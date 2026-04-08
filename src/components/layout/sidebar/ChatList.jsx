function ChatList({ chats }) {
  return (
    <ul className="flex flex-col gap-1">
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={
            "hover:bg-surface/70 text-text cursor-pointer rounded-3xl px-3 py-2 transition-colors duration-300 ease-in-out" +
            (chat.isActive ? " glass" : "")
          }
        >
          {chat.title}
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
