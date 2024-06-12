import { create } from "zustand";
import { IUserIdStore } from "../../Layouts/interface/IUserIdStore";

export const useUserIdStore = create<IUserIdStore>((set) => ({
  userId: "",

  setUserId: (newUserId) =>
    set(() => ({
      userId: newUserId,
    })),
}));
