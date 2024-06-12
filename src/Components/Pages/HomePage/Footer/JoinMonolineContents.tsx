import { UseHandleJoinMonolineDropdown } from "../../../../Layouts/hooks/useHandleJoinMonolineDropdown";
import { ChevronArrowDown } from "../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../Icons/ChevronArrowUp";

export const JoinMonolineContents = () => {
  //
  const { isJoinMonolineVisible, openJoinMonolineDropDown } =
    UseHandleJoinMonolineDropdown();
  //
  return (
    <div className=" tablet-above:ml-4">
      <button
        onClick={openJoinMonolineDropDown}
        className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
      >
        join monoline
        <span className="tablet-above:hidden">
          {isJoinMonolineVisible ? <ChevronArrowDown /> : <ChevronArrowUp />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ${
          isJoinMonolineVisible
            ? "visible h-[90px]"
            : "h-0 tablet-below:invisible tablet-below:opacity-0"
        }`}
      >
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            why monoline
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            real estate careers
          </span>
        </p>
        <p className="text-xs mb-2 tablet-above:text-center tablet-below:ml-2">
          <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
            franchise
          </span>
        </p>
      </div>
    </div>
  );
};
