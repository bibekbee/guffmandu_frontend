// Importing audios for sound effects
import ReceivedGiftAudio from "@Sounds/received-gift-audio.mp3"
import ReceivedMessageAudio from "@Sounds/received-message-audio.mp3"
import ReceivedStickerAudio1 from "@Sounds/received-sticker-audio-1.mp3"
import ReceivedStickerAudio2 from "@Sounds/received-sticker-audio-2.mp3"

const receivedMessageAudio = new Audio(ReceivedMessageAudio)
const receivedGiftAudio = new Audio(ReceivedGiftAudio)
const receivedStickerAudio1 = new Audio(ReceivedStickerAudio1)
const receivedStickerAudio2 = new Audio(ReceivedStickerAudio2)

const useAudio = () => {
    
    const playReceivedMessageAudio = () =>{
        receivedMessageAudio.play()
    }

    const playReceivedGiftAudio = () =>{
      receivedGiftAudio.play()
    }

    const playReceivedStickerAudio = () =>{
      receivedStickerAudio2.play()
    }

  return {playReceivedMessageAudio, playReceivedGiftAudio, playReceivedStickerAudio}
}

export default useAudio

