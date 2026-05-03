import { NotePencilIcon } from "@phosphor-icons/react";
import ChatList from "./ChatList";

function Sidebar() {
  return (
    <aside className="glass flex w-80 flex-col gap-7 rounded-4xl py-7">
      <h1 className="text-text flex items-center gap-2 px-7">
        <span className="block text-3xl font-bold">ELI5</span>
        <div className="text-xs">
          <span className="block">Explain it like</span>
          <span className="block">i'm five</span>
        </div>
      </h1>
      <button className="btn-primary mx-4">+ New Chat</button>
      <div>
        <h2 className="text-text-muted mb-2 px-7 text-sm font-semibold">
          Chats
        </h2>
        <ChatList
          chats={[
            { id: 1, title: "Chat-1", isActive: false },
            { id: 2, title: "Chat-2", isActive: true },
            { id: 3, title: "Chat-3", isActive: false },
          ]}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
