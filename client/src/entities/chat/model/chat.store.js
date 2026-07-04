import { create } from "zustand";

export const useChatStore = create((set) => ({
  chats: [],
  activeChatId: null,

  setChats: (chats) => set({ chats }),
  setActiveChat: (id) => set({ activeChatId: id }),
  addChat: (chat) => set((state) => ({ chats: [chat, ...state.chats] })),
}));
