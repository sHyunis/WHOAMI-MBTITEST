import { create } from "zustand";

const useBearsStore = create((set) => ({
  user: null,
  mode: "login",
  setMode: (newMode) => set({ mode: newMode }),
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useBearsStore;
