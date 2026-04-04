function ChatList({ chats }) {
  return (
    <ul className="flex flex-col gap-2">
      {chats.map((chat) => (
        <li
          key={chat.id}
          className="cursor-pointer rounded-lg border border-indigo-700/50 bg-indigo-400/20 px-3 py-2 transition-colors duration-300 ease-in-out hover:bg-indigo-300 dark:border-indigo-300/20 dark:bg-indigo-300/20 dark:hover:bg-indigo-400/20"
        >
          {chat.title}
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
