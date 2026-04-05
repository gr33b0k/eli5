import { BookIcon } from "@phosphor-icons/react";

import ChatList from "./ChatList";

function Sidebar() {
  return (
    <aside className="w-70 border-r border-indigo-700/20 bg-indigo-300/20 p-4 dark:border-indigo-700/50 dark:bg-slate-100/5">
      <div className="border-b-gray mb-4 flex items-center gap-2">
        <div className="rounded-md bg-indigo-900 p-1.5">
          <BookIcon className="h-6 w-6 text-indigo-100" />
        </div>
        <h1 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
          ELI5
        </h1>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
        Chats
      </h2>
      <ChatList
        chats={[
          { id: 1, title: "Chat-1", isActive: false },
          { id: 2, title: "Chat-2", isActive: true },
          { id: 3, title: "Chat-3", isActive: false },
        ]}
      />
    </aside>
  );
}

export default Sidebar;
