import { Outlet } from "react-router-dom";
import { HomepageFooter } from "../Components/Pages/HomePage/Footer/HomepageFooter";
import { HomepageHeader } from "../Components/Pages/HomePage/Header/HomepageHeader";
import { NavigationTab } from "../Components/Pages/HomePage/Footer/NavigationTab";

export const GlobalLayout = () => {
  //

  return (
    <div className={` flex flex-col h-[100vh] min-w-[320px]`}>
      <HomepageHeader />
      <main className="flex-1">
        <Outlet />
        <NavigationTab />
      </main>
      <HomepageFooter />
    </div>
  );
};
