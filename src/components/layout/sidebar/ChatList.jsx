function ChatList({ chats }) {
  return (
    <ul className="flex flex-col gap-1">
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={
            "hover:bg-surface/70 cursor-pointer rounded-sm px-3 py-2 text-base transition-colors duration-300 ease-in-out" +
            (chat.isActive ? " glass shadow-even" : "")
          }
        >
          {chat.title}
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
