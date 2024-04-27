import { Link } from "react-router-dom";
import { MonolineLogo } from "../../../Logos/MonolineLogo";
import { SearchBar } from "./SearchBar";
import { UserProfileDropdown } from "./UserProfile/UserProfileDropdown";
import { CartIcon } from "../../../Icons/CartIcon";

export const HomepageHeader = () => {
  //
  return (
    <header className="border-b-2 border-slate-200 bg-primaryColor-lightCream pb-3 fixed w-full z-20 top-0">
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
         <Link to={"/cart-page"} className="hidden tablet-above:block bg-white px-2 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black">
         <CartIcon extraStyle="fill-black/70"/>
         </Link>
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
};
