import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IDarkModeStore } from "../../Layouts/interface/IDarkMode";

export const useDarkModeStore = create<
  IDarkModeStore,
  [["zustand/persist", IDarkModeStore]]
>(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        if (get().theme === "dark") {
          set(() => ({ theme: "light" }));
        } else {
          set(() => ({ theme: "dark" }));
        }
      },
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
