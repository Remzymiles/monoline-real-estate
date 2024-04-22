import { Outlet } from "react-router-dom";
import { HomepageHeader } from "../Components/Pages/HomePage/Header/HomepageHeader";
import { HomepageFooter } from "../Components/Pages/HomePage/Footer/HomepageFooter";
import { useIsFilterClicked } from "../base/hooks/useIsFilterClicked";

export const GlobalLayout = () => {
  //
  const { isFilterClicked } = useIsFilterClicked();

  return (
    <div
      className={`relative flex flex-col h-[100vh] min-w-[320px] ${
        isFilterClicked === true ? "overflow-y-hidden" : "overflow-auto"
      }`}
    >
      <HomepageHeader />
      <main className="flex-1 pt-3 mobile:mx-4 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-16">
        <Outlet />
      </main>
      <HomepageFooter />
    </div>
  );
};
