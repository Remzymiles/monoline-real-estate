import { UseHandleAboutMonolineDropdown } from "../../../../Layouts/hooks/useHandleAboutMonolineDropdown";
import { ChevronArrowDown } from "../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../Icons/ChevronArrowUp";

export const AboutMonolineContents = () => {
  //
  const { isAboutMonolineVisible, openAboutMonolineDropDown } =
    UseHandleAboutMonolineDropdown();
  //
  return (
    <div className=" tablet-above:ml-4">
      <button
        onClick={openAboutMonolineDropDown}
        className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
      >
        about monoline real estate
        <span className="tablet-above:hidden">
          {isAboutMonolineVisible ? <ChevronArrowDown /> : <ChevronArrowUp />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ${
          isAboutMonolineVisible
            ? "visible h-[120px]"
            : "h-0 tablet-below:invisible tablet-below:opacity-0"
        }`}
      >
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            company profile
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            about us
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            in the news
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            philanthropy
          </span>
        </p>
      </div>
    </div>
  );
};
