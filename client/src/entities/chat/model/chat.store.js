import { create } from "zustand";

export const useChatStore = create((set) => ({
  chats: [],
  activeChatId: null,

  setChats: (chats) => set({ chats }),
  setActiveChat: (id) => set({ activeChatId: id }),
  addChat: (chat) => set((state) => ({ chats: [chat, ...state.chats] })),
  removeChat: (chatId) =>
    set((state) => ({
      chats: state.chats.filter((chat) => chat.id !== chatId),
    })),
  changeChatName: (chatId, newTitle) =>
    set((state) => ({
      chats: state.chats.map(
        (chat) => chat.id === chatId && { ...chat, title: newTitle },
      ),
    })),
}));
