import { UseHandleGeneralDropDown } from "../../../../Layouts/hooks/useHandleGeneralDropDown";
import { ChevronArrowDown } from "../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../Icons/ChevronArrowUp";

export const GeneralDropdownContents = () => {
  //
  const { isGeneralDropdownVisible, openGeneralDropDown } =
    UseHandleGeneralDropDown();
  //
  return (
    <div className="mt-1 tablet-above:ml-4">
      <button
        onClick={openGeneralDropDown}
        className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
      >
        general
        <span className="tablet-above:hidden">
          {isGeneralDropdownVisible ? <ChevronArrowDown /> : <ChevronArrowUp />}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ${
          isGeneralDropdownVisible
            ? "visible h-[120px]"
            : "h-0 tablet-below:invisible tablet-below:opacity-0"
        }`}
      >
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            contact us
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            FAQs
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            sitemap
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            fraud alert
          </span>
        </p>
      </div>
    </div>
  );
};
