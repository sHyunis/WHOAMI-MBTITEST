import { create } from "zustand";
import api from "../api/api";

const useBearsStore = create((set, get) => ({
  user: null,
  profile: null,
  error: null,
  loading: false,
  mode: "login",

  setMode: (newMode) => set({ mode: newMode }),

  register: async (email, password, nickname) => {
    set({ loading: true, error: null });
    try {
      await api.post("/users", { email, password, nickname });
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/users", { params: { email, password } });
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        set({ user, loading: false });
        const profileResponse = await api.get(`/profiles`, {
          params: { userId: user.id },
        });
        set({ profile: profileResponse.data[0] });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getUserProfile: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/profiles`, { params: { userId: id } });
      set({ profile: response.data[0], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateNickname: async (newNickname) => {
    set({ loading: true, error: null });
    try {
      const { user } = get();
      if (!user) throw new Error("No user found");
      const response = await api.patch(`/profiles/${user.id}`, {
        nickname: newNickname,
      });
      set({ profile: { ...response.data }, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  logout: () => {
    set({ user: null, profile: null });
  },
}));

export default useBearsStore;
