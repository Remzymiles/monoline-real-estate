import { MonolineLogo } from "../../../MonolineLogo";
import { SearchBar } from "./SearchBar";
import { UserProfileDropdown } from "./UserProfileDropdown";

export const HomepageHeader = () => {
  return (
    <header className="border-b-2 border-slate-200 bg-primaryColor-lightCream pb-3 sticky w-full  z-10 top-0">
      <div className="mobile:mx-1 tablet:mx-8 tablet-below:grid tablet-below:grid-cols-2 tablet-below:justify-between flex laptop:mx-16 laptop:gap-24 items-center laptop:justify-between">
        <div>
          <MonolineLogo />
        </div>
        {/*  */}
        <div className="flex-1 tablet-below:row-start-2 col-span-3">
          <SearchBar />
        </div>
        {/*  */}
        <div className="flex items-center justify-end laptop:gap-5">
          <button className="capitalize font-bold text-sm hover:bg-gray-200 py-2 px-3 rounded-full transition-colors duration-300 mobile:hidden">
            sell your home
          </button>
          {/*  */}
          <div className="relative">
            <UserProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
