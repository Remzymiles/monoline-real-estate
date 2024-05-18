import { useDarkModeStore } from "../../base/store/useDarkModeStore";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const ToggleDarkModeIcon = () => {
  const { theme, toggleTheme } = useDarkModeStore((state) => ({
    theme: state.theme,
    toggleTheme: state.toggleTheme,
  }));

  return (
    <div
      className="relative py-1 px-1 bg-white w-[30px] h-[30px] rounded-full shadow-xl border transition-all duration-300"
      onClick={() => {
        toggleTheme();
      }}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ${
          theme === "dark" ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
        }`}
      >
        <MoonIcon extraStyle="" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ${
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
        }`}
      >
        <SunIcon extraStyle="" />
      </div>
    </div>
  );
};
