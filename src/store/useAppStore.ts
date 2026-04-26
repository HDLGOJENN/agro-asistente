import { create } from 'zustand';

interface User {
  id: string;
  nombre_completo?: string;
}

interface AppState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));