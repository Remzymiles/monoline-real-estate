import { Outlet } from "react-router-dom";
import { HomepageHeader } from "../Components/Pages/HomePage/Header/HomepageHeader";
import { HomepageFooter } from "../Components/Pages/HomePage/Footer/HomepageFooter";

export const GlobalLayout = () => {
  return (
    <div className="flex flex-col h-[100vh] min-w-[320px]">
      <HomepageHeader />
      <main className="flex-1 mobile:mx-1 tablet:mx-8 laptop:mx-16">
        <Outlet />
      </main>
      <HomepageFooter />
    </div>
  );
};
