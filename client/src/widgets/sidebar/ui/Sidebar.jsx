import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PlusIcon, SidebarSimpleIcon } from "@phosphor-icons/react";
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

function Sidebar({ isOpen: mobileOpen = false, onOpenChange = () => {} }) {
  const [desktopExpanded, setDesktopExpanded] = useState(true);
  const [logoHovered, setLogoHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = (event) => setIsDesktop(event.matches);

    setIsDesktop(media.matches);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      onOpenChange(false);
    }
  }, [isDesktop, onOpenChange]);

  const compact = isDesktop && !desktopExpanded;
  const showMobileDrawer = !isDesktop ? mobileOpen : true;
  const showOverlay = !isDesktop && mobileOpen;

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
    <>
      {showOverlay && (
        <button
          type="button"
          className="glass-20 fixed inset-0 z-20 md:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      <aside
        className={`xs:min-w-0 glass-40 fixed z-30 flex h-full flex-col gap-0 p-0 transition-transform duration-200 md:static md:mr-2 md:gap-4 md:p-4 md:pr-0 ${
          !isDesktop
            ? `w-screen max-w-85 min-w-full ${showMobileDrawer ? "translate-x-0" : "-translate-x-full"}`
            : compact
              ? "md:w-20 md:px-0"
              : "md:glass-0 md:w-72 md:shadow-none md:inset-shadow-none"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-10 rounded-none px-6 py-4 ${
            compact ? "md:justify-center" : "md:glass-40 md:rounded-4xl"
          }`}
          onMouseEnter={() => {
            if (compact) setLogoHovered(true);
          }}
          onMouseLeave={() => setLogoHovered(false)}
        >
          {!compact ? (
            <>
              <Logo />

              <button
                type="button"
                className="text-accent flex items-center justify-center"
                onClick={() => {
                  if (!isDesktop) {
                    onOpenChange(false);
                  } else {
                    setDesktopExpanded(false);
                    setLogoHovered(false);
                  }
                }}
              >
                <SidebarSimpleIcon size={24} weight="bold" />
              </button>
            </>
          ) : (
            <button
              className="text-accent flex items-center justify-center"
              onClick={() => {
                setDesktopExpanded(true);
                setLogoHovered(false);
              }}
            >
              <AnimatePresence mode="wait">
                {logoHovered ? (
                  <motion.div
                    key="sidebar-close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.07 }}
                  >
                    <SidebarSimpleIcon size={24} weight="bold" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.07 }}
                  >
                    <Logo compact />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>

        <div
          className={`flex flex-1 flex-col gap-3 overflow-hidden rounded-none py-4 pb-7 ${
            !compact ? "md:glass-40 md:rounded-4xl" : ""
          }`}
        >
          <button
            className={`btn-primary flex items-center justify-center gap-2 ${!compact ? "mx-4" : "mx-2 p-2"}`}
            onClick={handleCreateChat}
          >
            <PlusIcon weight="bold" size={22} />
            {compact ? "" : "New Chat"}
          </button>
          <ChatList
            compact={compact}
            chats={chats}
            activeChat={activeChatId}
            onSelect={setActiveChat}
            onRename={handleRenameChat}
            onDelete={handleDeleteChat}
          />
        </div>

        {user && (
          <div
            className={`flex min-h-19.5 items-center justify-between rounded-none px-7 py-4 ${
              !compact ? "md:glass-40 md:rounded-4xl" : "md:justify-center"
            }`}
          >
            <UserCard compact={compact} user={user} onLogout={handleLogout} />
          </div>
        )}
      </aside>
    </>
  );
}

export default Sidebar;
