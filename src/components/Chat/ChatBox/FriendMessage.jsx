function FriendMessage({message}) {
  return (
    <div className="flex gap-1 items-end">
        <img src="https://photoscissors.com/images/samples/1-before.jpg" alt="" className="profile-photo h-8 w-8"/>
        <p className="max-w-[70%] p-2 rounded-lg rounded-bl-none text-white text-sm break-words bg-brand-color">{message}</p>
    </div>
  )
}

export default FriendMessage