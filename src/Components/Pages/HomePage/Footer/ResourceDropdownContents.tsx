import { UseHandleResourceDropDown } from "../../../../Layouts/hooks/useHandleResourceDropdown";
import { ChevronArrowDown } from "../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../Icons/ChevronArrowUp";

export const ResourceDropdownContents = () => {
  //
  const { isResourceVisible, openResourceDropDown } =
    UseHandleResourceDropDown();
  //
  return (
    <div className=" tablet-above:ml-4">
      <button
        onClick={openResourceDropDown}
        className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
      >
        resource
        <span className="tablet-above:hidden">
          {isResourceVisible ? <ChevronArrowDown /> : <ChevronArrowUp />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ${
          isResourceVisible
            ? "visible h-[120px]"
            : "h-0 tablet-below:invisible tablet-below:opacity-0"
        }`}
      >
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            home seller resources
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            home buyer resources
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            real estate glossary
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            mortgage calculators
          </span>
        </p>
      </div>
    </div>
  );
};
