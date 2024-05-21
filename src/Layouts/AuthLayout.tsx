import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToggleDarkModeIcon } from "../Components/Icons/ToggleDarkModeIcon";
import { AuthFooter } from "../Components/Pages/Auth/Footer";
import { AuthHeader } from "../Components/Pages/Auth/Header";
import { useDarkModeStore } from "../base/store/useDarkModeStore";
import { Toaster, toast } from "sonner";

export const AuthLayout = () => {
  //
  const { theme } = useDarkModeStore((state) => ({
    theme: state.theme,
  }));
// 
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      return;
    }

    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  // 
  return (
    <div className="flex flex-col min-h-[100vh] min-w-[320px] dark:bg-secondaryColor-dark/95">
      <AuthHeader />
      <div className="absolute right-2 top-2">
        <ToggleDarkModeIcon />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <AuthFooter />
      <Toaster closeButton={true}  />
    </div>
  );
};
