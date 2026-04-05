function ChatList({ chats }) {
  return (
    <ul className="flex flex-col gap-1">
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={`cursor-pointer rounded-sm px-3 py-2 text-base transition-colors duration-300 ease-in-out ${chat.isActive ? "border border-indigo-700/50 bg-indigo-300/30 dark:border-indigo-300/20 dark:bg-indigo-300/20" : "hover:bg-indigo-300 dark:hover:bg-indigo-400/20"} `}
        >
          {chat.title}
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
