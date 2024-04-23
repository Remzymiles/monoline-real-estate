import { Outlet } from "react-router-dom";
import { HomepageFooter } from "../Components/Pages/HomePage/Footer/HomepageFooter";
import { HomepageHeader } from "../Components/Pages/HomePage/Header/HomepageHeader";

export const GlobalLayout = () => {
  //

  return (
    <div className={`relative flex flex-col h-[100vh] min-w-[320px]`}>
      <HomepageHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <HomepageFooter />
    </div>
  );
};
