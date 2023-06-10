import { create } from "zustand";

interface AppStore {
  backgroundColor: string;
  textColor: string;
  changeThemeColors: (backgroundColor: string, textColor: string) => void,

}

export const useAppStore = create<AppStore>((set) => ({
  backgroundColor: "#beecfa",
  textColor: 'white',
  changeThemeColors: (backgroundColor: string, textColor) => set({ backgroundColor, textColor }),
}));
