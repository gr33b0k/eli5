function ChatList({ chats }) {
  return (
    <ul className="flex flex-col gap-1 px-4">
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={
            "text-text cursor-pointer rounded-4xl px-3 py-2 transition-colors duration-300 ease-in-out " +
            (chat.isActive ? "glass" : "hover:bg-surface/60")
          }
        >
          {chat.title}
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
