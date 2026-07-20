import { useState } from "react";
import { List } from "@phosphor-icons/react";
import { Sidebar } from "@/widgets/sidebar";
import { ChatContent } from "@/features/explanation";
import { Background } from "@/shared/ui/background";
import { useChatStore } from "@/entities/chat/model/chat.store";

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeChatId = useChatStore((state) => state.activeChatId);
  const getChatById = useChatStore((state) => state.getChatById);

  return (
    <Background className="relative flex h-dvh flex-col overflow-hidden md:flex-row">
      <Sidebar isOpen={sidebarOpen} onOpenChange={setSidebarOpen} />

      <main className="relative flex h-full min-h-0 flex-1 flex-col gap-4 overflow-hidden p-4 md:pl-2">
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="text-text glass-40 z-10 flex items-center justify-center rounded-full p-2"
            onClick={() => setSidebarOpen(true)}
          >
            <List size={24} />
          </button>

          <p className="text-text z-10 flex-1 text-center text-lg font-semibold">
            {activeChatId ? getChatById(activeChatId).title : ""}
          </p>
        </div>

        <ChatContent />
      </main>
    </Background>
  );
}

export default Chat;
