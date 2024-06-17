import { SearchedPropertiesCard } from "../../Global/Cards/SearchedPropertiesCard";

export const SearchPageIndex = () => {
  //
  return (
    <div className="flex justify-center flex-wrap gap-4 min-h-[50vh] pt-3 mobile:mx-4 tablet:mx-8 big-screen-mobile-below:mt-[150px] tablet-above:mt-[180px] mt-[180px] laptop:mt-[120px] tablet-above:mx-8 laptop:mx-16">
      <SearchedPropertiesCard />
    </div>
  );
};
