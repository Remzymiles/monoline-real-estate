import { UseHandleAboutMonolineDropdown } from "../../../../base/hooks/useHandleAboutMonolineDropdown";
import { UseHandleGeneralDropDown } from "../../../../base/hooks/useHandleGeneralDropDown";
import { UseHandleJoinMonolineDropdown } from "../../../../base/hooks/useHandleJoinMonolineDropdown";
import { UseHandleResourceDropDown } from "../../../../base/hooks/useHandleResourceDropdown";
import { ChevronArrowDown } from "../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../Icons/ChevronArrowUp";

export const FooterContents = () => {
  //
  const { isGeneralVisible, openGeneralDropDown } = UseHandleGeneralDropDown();
  const { isResourceVisible, openResourceDropDown } = UseHandleResourceDropDown();
  const { isAboutMonolineVisible, openAboutMonolineDropDown } = UseHandleAboutMonolineDropdown();
  const { isJoinMonolineVisible, openJoinMonolineDropDown } = UseHandleJoinMonolineDropdown();

  return (
    <div>
      <div className="grid grid-cols-5 gap-6 tablet-below:grid-cols-1 tablet-below:gap-0">
        <div className="tablet-below:flex tablet-below:flex-col tablet-below:justify-center tablet-below:items-center tablet-below:mb-10">
          <h1 className="uppercase text-lg font-extrabold mb-5">
            monoline real estate
          </h1>
          <p className="hover:underline hover:text-secondaryColor-lighter mb-1 text-sm">
            08164228668
          </p>
          <p className="hover:underline hover:text-secondaryColor-lighter text-sm">
            Remzymiles@gmail.com
          </p>
        </div>
        {/*  */}
        <div className="mt-1 tablet-above:ml-4">
          <button
            onClick={openGeneralDropDown}
            className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
          >
            general
            <span className="tablet-above:hidden">
              {isGeneralVisible ? <ChevronArrowDown /> : <ChevronArrowUp />}
            </span>
          </button>

          <div
            className={`transition-all duration-300 ${
              isGeneralVisible ? "visible h-[120px]" : "h-0 tablet-below:invisible tablet-below:opacity-0"
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
        {/*  */}
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
              isResourceVisible ? "visible h-[120px]" : "h-0 tablet-below:invisible tablet-below:opacity-0"
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

        {/*  */}
        <div className=" tablet-above:ml-4">
          <button
            onClick={openAboutMonolineDropDown}
            className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
          >
            about monoline real estate
            <span className="tablet-above:hidden">
              {isAboutMonolineVisible ? (
                <ChevronArrowDown />
              ) : (
                <ChevronArrowUp />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-300 ${
              isAboutMonolineVisible ? "visible h-[120px]" : "h-0 tablet-below:invisible tablet-below:opacity-0"
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
        {/*  */}
        <div className=" tablet-above:ml-4">
          <button
            onClick={openJoinMonolineDropDown}
            className="capitalize font-bold mb-3 text-sm tablet-below:mb-1 tablet-below:border tablet-below:border-secondaryColor-dark tablet-below:p-3 tablet-below:flex tablet-below:justify-between w-full"
          >
            join monoline
            <span className="tablet-above:hidden">
              {isJoinMonolineVisible ? (
                <ChevronArrowDown />
              ) : (
                <ChevronArrowUp />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-300 ${
              isJoinMonolineVisible ? "visible h-[90px]" : "h-0 tablet-below:invisible tablet-below:opacity-0"
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
      </div>
    </div>
  );
};
