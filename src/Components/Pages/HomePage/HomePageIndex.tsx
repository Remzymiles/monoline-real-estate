import { useEffect } from "react";
import { useFilterStore } from "../../../base/store/useFilterStore";
import { PropertyCard } from "../../Global/Cards/PropertyCard";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { FilterButton } from "./FilterDropdown/FilterButton";

export const HomePageIndex = () => {
  //
  const { isFilterButtonClicked } = useFilterStore((state) => ({
    isFilterButtonClicked: state.isFilterButtonClicked,
  }));

  useEffect(() => {
    isFilterButtonClicked === "true"
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "");
  }, [isFilterButtonClicked]);
  //
  return (
    <div
      className={`pt-2 mobile:mx-3 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-28`}
    >
      <FilterButton />
      <div className="flex justify-center flex-wrap gap-5 min-h-[50vh] mt-[55px] big-screen-mobile-below:mt-[24px] laptop:mt-[70px]">
        <PropertyCard />
        {isFilterButtonClicked === "true" && (
          <div className="absolute top-0 left-0 bg-black/50 z-50 w-[100%] h-[1000vh] flex justify-center items-center">
            <div className="fixed top-[50%]">
              <WaveFormLoader />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
