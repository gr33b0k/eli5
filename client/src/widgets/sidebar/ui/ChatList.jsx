function ChatList({ chats }) {
  return (
    <ul className="custom-scrollbar flex flex-col gap-1 overflow-y-auto px-4">
      {chats.map((chat, index) => (
        <li
          key={chat.id}
          className={
            "text-text cursor-pointer rounded-4xl px-3 py-2 transition-colors duration-300 ease-in-out " +
            (chat.isActive ? "glass-50" : "hover:bg-surface/60")
          }
        >
          {chat.title}
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
