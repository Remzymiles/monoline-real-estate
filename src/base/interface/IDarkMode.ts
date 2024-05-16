export interface IDarkModeStore {
  theme: "dark" | "light";
  toggleTheme: () => void;
}
