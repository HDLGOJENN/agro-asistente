import { create } from 'zustand';

interface User {
  id: string;
  nombre_completo?: string;
}

interface AppState {
  user: User | null;
  setUser: (user: User) => void;
  pickedLocation: { lat: number; lng: number } | null;
  setPickedLocation: (loc: { lat: number; lng: number } | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  pickedLocation: null,
  setPickedLocation: (loc) => set({ pickedLocation: loc }),
}));