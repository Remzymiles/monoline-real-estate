import { create } from "zustand";
import { IProfilePhoto } from "../interface/profilePage/IProfilePhoto";

export const useProfilePhotoStore = create<IProfilePhoto>((set) => ({
  profilePhotoUrl: "",

  updateProfilePhotoUrl: (newProfilePhotoUrl) =>
    set(() => ({ profilePhotoUrl: newProfilePhotoUrl })),
}));
