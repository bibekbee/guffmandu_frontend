function UserMessage({message}) {
  return (
    <div className="flex gap-1 items-end flex-row-reverse">
        <img src="https://photoscissors.com/images/samples/1-before.jpg" alt="" className="profile-photo h-8 w-8"/>
        <p className="max-w-[70%] p-2 rounded-lg rounded-br-none text-black text-sm break-words bg-gray-300">{message}</p>
    </div>
  )
}

export default UserMessage