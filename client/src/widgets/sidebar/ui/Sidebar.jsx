import ChatList from "./ChatList";
import UserCard from "./UserCard";

import { useUserStore, logout } from "@/entities/user";
import {
  useChatStore,
  createChat,
  deleteChat,
  renameChat,
} from "@/entities/chat";

import { Logo } from "@/shared/ui";

function Sidebar() {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const chats = useChatStore((state) => state.chats);
  const addChat = useChatStore((state) => state.addChat);
  const getChatById = useChatStore((state) => state.getChatById);
  const activeChatId = useChatStore((state) => state.activeChatId);
  const removeChat = useChatStore((state) => state.removeChat);
  const changeChatName = useChatStore((state) => state.changeChatName);
  const setActiveChat = useChatStore((state) => state.setActiveChat);

  async function handleCreateChat() {
    const activeChat = getChatById(activeChatId);

    if (
      activeChat &&
      activeChat.messages.length === 0 &&
      activeChat.title === "New chat"
    )
      return;

    if (activeChat?.deletedOnServer) {
      removeChat(activeChatId);
    }

    const chat = await createChat();
    addChat(chat);
    setActiveChat(chat.id);
  }

  async function handleDeleteChat(chatId) {
    await deleteChat(chatId);
    removeChat(chatId);

    const { activeChatId, chats } = useChatStore.getState();

    if (activeChatId === chatId && chats.length === 0) {
      setActiveChat(null);
    }
  }

  async function handleRenameChat(chatId, newTitle) {
    await renameChat(chatId, newTitle);
    changeChatName(chatId, newTitle);
  }

  async function handleLogout() {
    await logout();
    clearUser();
  }

  return (
    <aside className="flex h-full w-80 flex-col gap-4">
      <div className="glass-40 rounded-4xl px-7 py-4">
        <Logo />
      </div>

      <div className="glass-40 flex flex-1 flex-col gap-3 overflow-hidden rounded-4xl py-4 pb-7">
        <button className="btn-primary mx-4" onClick={handleCreateChat}>
          + New Chat
        </button>
        <ChatList
          chats={chats}
          activeChat={activeChatId}
          onSelect={setActiveChat}
          onRename={handleRenameChat}
          onDelete={handleDeleteChat}
        />
      </div>
      {user && <UserCard user={user} onLogout={handleLogout} />}
    </aside>
  );
}

export default Sidebar;
