import { TrashIcon } from "@phosphor-icons/react";

function ChatList({ chats, activeChat, onSelect, onDelete }) {
  return (
    <ul className="custom-scrollbar flex flex-col gap-1 overflow-y-auto px-4 py-1">
      {chats.map((chat, index) => (
        <li
          key={chat.id}
          className={
            "text-text group flex cursor-pointer items-center justify-between rounded-4xl px-3 py-2 transition-colors duration-300 ease-in-out " +
            (chat.id === activeChat ? "glass-50" : "hover:bg-surface/60")
          }
          onClick={() => onSelect(chat.id)}
        >
          {chat.title}
          <button
            className="text-error h-full cursor-pointer opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(chat.id);
            }}
          >
            <TrashIcon weight="bold" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
