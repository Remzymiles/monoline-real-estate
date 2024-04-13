import { MonolineLogo } from "../../../Logos/MonolineLogo";
import { FilterButton } from "./FilterDropdown/FilterButton";
import { SearchBar } from "./SearchBar";
import { UserProfileDropdown } from "./UserProfile/UserProfileDropdown";

export const HomepageHeader = () => {
  //

  return (
    <header className="border-b-2 border-slate-200 bg-primaryColor-lightCream pb-3 fixed w-full z-20 top-0">
      <div className=" mobile:mx-2 between-mobile-and-tablet:mx-5 tablet-above:mx-8 laptop-below:grid laptop-below:grid-cols-2 laptop-below:justify-between flex laptop:mx-16 laptop:gap-10 items-center laptop:justify-between">
        <div>
          <MonolineLogo />
        </div>
        {/*  */}
        <div className="flex-1 laptop-below:row-start-2 col-span-3">
          <SearchBar />
        </div>
        {/*  */}
        <div className="flex items-center justify-end gap-2">
          <FilterButton />
          {/*  */}
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
};
