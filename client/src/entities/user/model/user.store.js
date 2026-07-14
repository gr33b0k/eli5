import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  initialized: false,

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  setInitialized: () => set({ initialized: true }),
}));
