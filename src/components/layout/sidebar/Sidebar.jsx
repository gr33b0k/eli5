import ChatList from "./ChatList";

function Sidebar() {
  return (
    <aside className="glass flex w-80 flex-col gap-6 rounded-3xl p-6">
      <h1 className="text-text flex items-center gap-2">
        <span className="block text-3xl font-bold">ELI5</span>
        <div className="text-xs">
          <span className="block">Explain it like</span>
          <span className="block">i'm five</span>
        </div>
      </h1>
      <button className="bg-accent shadow-primary/50 rounded-3xl px-4 py-2 text-white shadow-md">
        + New Chat
      </button>
      <div>
        <h2 className="text-text-muted mb-2 text-sm font-semibold">Chats</h2>
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
