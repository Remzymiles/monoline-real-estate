import { FooterContents } from "./FooterContents";
import { NavigationTab } from "./NavigationTab";

export const HomepageFooter = () => {
  //

  return (
    <footer className="bg-primaryColor-cream mt-5 w-full">
      <div className="mobile:mx-1 tablet-above:mx-8 tablet:mx-8 laptop:mx-16 mt-5 tablet-below:mb-[75px]">
        <div className="tablet-above:mb-[100px]">
          <FooterContents />
        </div>
        {/*  */}
        <div className="mb-2 mt">
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            <span className="capitalize font-bold text-lg text-secondaryColor-dark underline hover:no-underline hover:text-[#1877F2]">
              facebook
            </span>{" "}
            <span className="font-bold"> -</span>
            <span className="capitalize font-bold text-lg text-secondaryColor-dark underline hover:no-underline hover:bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 hover:text-transparent bg-clip-text ">
              instagram
            </span>{" "}
            <span className="font-bold"> -</span>
            <span className="capitalize font-bold text-lg text-secondaryColor-dark underline hover:no-underline hover:text-[#808080]">
              x
            </span>{" "}
            <span className="font-bold"> -</span>
            <span className="capitalize font-bold text-lg text-secondaryColor-dark underline hover:no-underline hover:text-[#FF0000]">
              youtube
            </span>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <p className="underline underline-offset-4 font-bold hover:text-secondaryColor-lighter">
            Do Not Sell or Share My Personal Information
          </p>
        </div>
        {/*  */}
        <div className="border mt-10 border-t-slate-500 border-b-slate-500 mb-5 py-6 flex justify-center gap-10 flex-wrap mobile:flex-col mobile:justify-start mobile:mx-3">
          <p className="underline capitalize hover:text-secondaryColor-lighter">
            privacy policy
          </p>
          <p className="underline capitalize hover:text-secondaryColor-lighter">
            terms & conditions
          </p>
          <p className="underline capitalize hover:text-secondaryColor-lighter">
            accessibility statement
          </p>
          <p className="underline capitalize hover:text-secondaryColor-lighter">
            cookies preferences
          </p>
          <p className="underline capitalize hover:text-secondaryColor-lighter">
            fair housing act
          </p>
        </div>
        {/*  */}
        <div className=" mt-10 flex flex-col justify-center items-center gap-y-3">
          <p className="text-xs">
            &copy; 2024 Monoline Real Estate LLC. All rights reserved.{" "}
          </p>
          <p className="text-xs">
            MONOLINE®, the MONOLINE Logo and M® are service marks owned by
            MONOLINE Real Estate LLC. MONOLINE Real Estate LLC fully supports
            the principles of the Fair Housing Act and the Equal Opportunity
            Act. Each office is independently owned and operated. Listing
            information is deemed reliable but not guaranteed accurate.
          </p>
        </div>
      </div>
      {/*  */}
      <NavigationTab/>
    </footer>
  );
};
