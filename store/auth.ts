import { create } from "zustand";

type AuthType = {
  isLogin: boolean;
  setIsLogin: (isLogined: boolean) => void;
};

export const useAuthStore = create<AuthType>((set) => ({
  isLogin: false,
  setIsLogin: (isLogined: boolean) => set({ isLogin: isLogined }),
}));
