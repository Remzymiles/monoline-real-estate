import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HomepageFooter } from "../Components/Pages/HomePage/Footer/HomepageFooter";
import { HomepageHeader } from "../Components/Pages/HomePage/Header/HomepageHeader";

export const GlobalLayout = () => {
  //
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  //
  return (
    <div className={`flex flex-col h-[100vh] min-w-[320px]`}>
      <HomepageHeader />
      <main className="flex-1 dark:bg-secondaryColor-dark/95 pb-16 dark:text-gray-400">
        <Outlet />
      </main>
      <HomepageFooter />
    </div>
  );
};
