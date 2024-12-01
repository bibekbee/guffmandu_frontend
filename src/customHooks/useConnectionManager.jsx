// Imports from react
import { useRef } from 'react';

// Import from third-party libraries
import { useDispatch } from 'react-redux';

// Additional imports
import { SignalingURL } from "@Utilities/apiEndpoints";
import { setConnectionStatus, setwillingNewConnection  } from '@ReduxStore/Chat/connectionSlice';
import { addMessage, restoreConversation } from '@ReduxStore/Chat/conversationSlice';
import { addReceivedFlirt, restoreReceivedFlirts } from '@ReduxStore/Chat/receivedFlirtsSlice';
import useAudio from './useAudio';

const useConnectionManager = () => {
    const dispatch = useDispatch()
    const isInitiator = useRef(false);
    const peerDetails = useRef({});
    
    const signalingChannel = useRef(null);
    const peerConnection = useRef(null);
    const dataChannel = useRef(null)
    
    const localStream = useRef(null)
    const remoteStreamElementRef = useRef(null)
    const {playReceivedMessageAudio, playReceivedStickerAudio} = useAudio()
    
    const initializeConnection = (localMediaStream=null, remoteVideoElementRef=null, willingNewConnection) => {
        resetAttributes();
        dispatch(setConnectionStatus("connecting"))

        // Setting the Streams if Given
        if ((localMediaStream!==null)&&(remoteVideoElementRef!==null)){
            localStream.current = localMediaStream
            remoteStreamElementRef.current = remoteVideoElementRef
        }
        
        // If WillingNewConnection starting new connection
        if (willingNewConnection) {
            signalingChannel.current = new WebSocket(SignalingURL);
            signalingChannel.current.onopen = () => console.log("Connected to Signaling Server!");
            signalingChannel.current.onclose = () => console.log("Signaling Server Closed");
            signalingChannel.current.onmessage = (e) =>  processSignal(JSON.parse(e.data));
        } else {
            console.error("Can't initialize the Signaling Channel without willingNewConnection being true");
        }
    };

    const processSignal = async (data) => {
        switch (data.signal_type) {
            case "match":
                await handleMatch(data);
                break;
            case "offer":
                await handleOffer(data);
                break;
            case "answer":
                await handleAnswer(data.answer);
                break;
            case "ice_candidate_user1":
            case "ice_candidate_user2":
                await handleIceCandidate(data.candidate);
                break;
            default:
                console.log("Received Unknown signal type !!!");
        }
    };

    const handleMatch = async (data) => {
        console.log("✅ Got a Match ✅");

        delete data.signal_type;
        peerDetails.current = data;
        isInitiator.current = true;

        initializeRTCConnection();
        createDataChannelForOfferor();

        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        sendSignal({ signal_type: "offer", offer: offer });
    };

    const handleOffer = async (data) => {
        initializeRTCConnection();
        createDataChannelForAnswerer();

        const { offer, signal_type, ...peerData } = data;
        peerDetails.current = peerData;

        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);
        sendSignal({ signal_type: "answer", answer: answer });
    };

    const initializeRTCConnection = () => {
        const configuration = {
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                { urls: "stun:stun2.l.google.com:19302" },
                { urls: "stun:stun3.l.google.com:3478" },
                { urls: "stun:stun4.l.google.com:19302" }
            ]
        };

        peerConnection.current = new RTCPeerConnection(configuration);
        localStream.current.getTracks().forEach(track => peerConnection.current.addTrack(track, localStream.current));

        peerConnection.current.ontrack = ({ streams: [remoteStream] }) => {
            if (remoteStreamElementRef.current.current) {
                // Doing .current.current but we are using 2 useRef (one for outside, one for this hook)
                remoteStreamElementRef.current.current.srcObject = remoteStream;
            }
        };

        peerConnection.current.onicecandidate = event => {
            if (event.candidate) {
                sendSignal({
                    signal_type: isInitiator.current ? "ice_candidate_user1" : "ice_candidate_user2",
                    candidate: event.candidate
                });
            }
        };
    };

    const createDataChannelForOfferor = () => {
        dataChannel.current = peerConnection.current.createDataChannel("text");
        setDataChannelEvents()
    };

    const createDataChannelForAnswerer = () => {
        peerConnection.current.addEventListener('datachannel', event => {
            dataChannel.current = event.channel;
            setDataChannelEvents()
        });
    };

    const setDataChannelEvents =()=>{
        dataChannel.current.onopen = () =>{ 
            dispatch(setConnectionStatus("connected"));
            signalingChannel.current.close();
        }

        dataChannel.current.onclose = () => {
            // Restoring the Chat Conversation
            dispatch(restoreConversation())
            // Restores the received flirts
            dispatch(restoreReceivedFlirts())
            // Restoring the Connection Status
            dispatch(setConnectionStatus("closed"))
        }
        
        dataChannel.current.onmessage=(e)=>{handleMessage(e.data)}
    }
    
    const handleMessage = (message)=>{
        message = JSON.parse(message)
        console.log('Received Message from dataChannel', message)

        if (message.type==="chat"){
            // Dispatching message to the redux store
            dispatch(addMessage({sender:"friend",message:message.text}))
            playReceivedMessageAudio()
        }
        else if (message.type==="flirt"){
            // Dispatching message to the redux store
            dispatch(addReceivedFlirt(message.number))
            playReceivedStickerAudio()
        }
    }

    const sendMessage=(message)=>{
        if (dataChannel.current){
            dispatch(addMessage({sender:"self",message}))
            dataChannel.current.send(JSON.stringify({type:"chat", text:message}))
        }
    }

    const sendFlirt=(number)=>{
        if (dataChannel.current){
            dataChannel.current.send(JSON.stringify({type:"flirt", number:number}))
        }
    }

    const resetAttributes = () => {
        peerConnection.current = null;
        signalingChannel.current = null;
        dataChannel.current = null;

        peerDetails.current = {};
        isInitiator.current = false;
    };

    const handleAnswer = async (answer) => {
        const remoteDesc = new RTCSessionDescription(answer);
        await peerConnection.current.setRemoteDescription(remoteDesc);
    };

    const handleIceCandidate = async (candidate) => {
        try {
            const iceCandidate = new RTCIceCandidate(candidate);
            await peerConnection.current.addIceCandidate(iceCandidate);
        } catch (error) {
            console.log("Error adding ICE candidate:", error);
        }
    };

    const sendSignal = (data) => {
        signalingChannel.current.send(JSON.stringify({ ...peerDetails.current, ...data }));
    };

    const closeConnection = () => {
        console.log("Closing connection...");

        // Closing every connections
        peerConnection.current?.close();
        // localStream.current?.getTracks().forEach(track => track.stop())
        signalingChannel.current?.close();

        // Close DataChannel at last, cause it has event handler to start the new connection
        dataChannel.current?.close()

        // Reset Attributes
        resetAttributes();
    };

    // This will close the connection and stop new connection
    const stopConnection = () =>{
        dispatch(setwillingNewConnection(false))
        closeConnection()
    }

    return { initializeConnection, sendMessage, closeConnection, stopConnection, sendFlirt};
};

export default useConnectionManager;
