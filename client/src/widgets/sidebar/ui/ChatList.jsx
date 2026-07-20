import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { isPrimaryPointer } from "motion/react";
import { useState } from "react";

function ChatList({
  compact,
  chats,
  activeChat,
  onSelect,
  onRename,
  onDelete,
}) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");

  return (
    <ul
      className={`custom-scrollbar flex flex-col gap-1 overflow-y-auto px-4 py-1 ${compact ? "hidden" : ""}`}
    >
      {chats.map((chat, index) => (
        <li
          key={chat.id}
          className={
            "text-text group flex cursor-pointer items-center justify-between overflow-hidden rounded-4xl px-3 py-2 transition-colors duration-300 ease-in-out " +
            (chat.id === activeChat ? "glass-50" : "hover:bg-surface/60")
          }
          onClick={() => onSelect(chat.id)}
        >
          {editingId === chat.id ? (
            <input
              className="caret-text border-none outline-none"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={(e) => {
                onRename(chat.id, e.target.value);
                setEditingId(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onRename(chat.id, title);
                  setEditingId(null);
                }
              }}
              autoFocus
            />
          ) : (
            <span className="truncate" title={chat.title}>
              {chat.title}
            </span>
          )}

          <div className="flex gap-2 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
            <button
              className="text-accent h-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setEditingId(chat.id);
                setTitle(chat.title);
              }}
            >
              <PencilSimpleIcon weight="bold" />
            </button>
            <button
              className="text-error h-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(chat.id);
              }}
            >
              <TrashIcon weight="bold" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
