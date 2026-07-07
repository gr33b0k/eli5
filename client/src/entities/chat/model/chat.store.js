import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useChatStore = create(
  devtools((set) => ({
    chats: [],
    activeChatId: null,

    setChats: (chats) =>
      set({ chats: chats.map((chat) => ({ ...chat, messages: [] })) }),
    setActiveChat: (id) => set({ activeChatId: id }),

    addChat: (chat) =>
      set((state) => ({ chats: [{ ...chat, messages: [] }, ...state.chats] })),
    removeChat: (chatId) =>
      set((state) => ({
        chats: state.chats.filter((chat) => chat.id !== chatId),
      })),
    changeChatName: (chatId, newTitle) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId ? { ...chat, title: newTitle } : chat,
        ),
      })),

    setChatMessages: (chatId, messages) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId ? { ...chat, messages } : chat,
        ),
      })),
    addMessage: (chatId, message) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: [...(chat.messages ?? []), message] }
            : chat,
        ),
      })),
    updateMessage: (chatId, messageId, data) =>
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: chat.messages.map((message) =>
                  message.id === messageId
                    ? {
                        ...message,
                        ...data,
                      }
                    : message,
                ),
              }
            : chat,
        ),
      })),
  })),
);
