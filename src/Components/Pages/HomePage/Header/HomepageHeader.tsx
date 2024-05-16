import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartPropertyIdsStore } from "../../../../base/store/useCartPropertyIdsStore";
import { useDarkModeStore } from "../../../../base/store/useDarkModeStore";
import { CartIcon } from "../../../Icons/CartIcon";
import { MonolineLogo } from "../../../Logos/MonolineLogo";
import { SearchBar } from "./SearchBar";
import { UserProfileDropdown } from "./UserProfile/UserProfileDropdown";

export const HomepageHeader = () => {
  //
  const { propertyIds } = useCartPropertyIdsStore((state) => ({
    propertyIds: state.propertyIds,
  }));

  const { theme, toggleTheme } = useDarkModeStore((state) => ({
    theme: state.theme,
    toggleTheme: state.toggleTheme,
  }));

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
    <header className="border-b-4 border-slate-200 bg-primaryColor-lightCream dark:bg-black/95 pb-3 fixed w-full z-30 top-0">
      <div className=" mobile:mx-2 between-mobile-and-tablet:mx-5 tablet-above:mx-8 laptop-below:grid laptop-below:grid-cols-2 laptop-below:justify-between flex laptop:mx-16 laptop:gap-10 items-center laptop:justify-between">
        <Link to={"/"}>
          <MonolineLogo />
        </Link>
        {/*  */}
        <div className="flex-1 laptop-below:row-start-2 col-span-3">
          <SearchBar />
        </div>
        {/*  */}
        <div className="flex items-center justify-end gap-2">
          {/*  */}
          <Link
            to={"/cart-page"}
            className="hidden relative tablet-above:block bg-white px-2 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
          >
            <CartIcon extraStyle="fill-black/80" />
            {propertyIds.length > 0 && (
              <p className="absolute -top-3 -right-2 font-extrabold text-white bg-primaryColor-light rounded-full px-[8px] text-xs py-[2px]">
                {propertyIds.length}
              </p>
            )}
          </Link>
          <UserProfileDropdown />
        </div>
      </div>

      <button
        className="dark:text-white text-xl text-black"
        onClick={() => {
          toggleTheme();
        }}
      >
        Fucking Toggle this thing
      </button>
    </header>
  );
};
