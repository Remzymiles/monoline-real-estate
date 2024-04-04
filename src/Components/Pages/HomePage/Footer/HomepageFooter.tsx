export const HomepageFooter = () => {
  return (
    <footer className="bg-primaryColor-cream mt-5 w-full">
      <div className="mobile:mx-1 tablet:mx-8 laptop:mx-16 mt-5">
        <div className="grid grid-cols-5 gap-6">
          <div>
            <h1 className="uppercase text-lg font-extrabold mb-5">
              monoline real estate
            </h1>
            <p className="hover:underline hover:text-secondaryColor-lighter mb-1">
              08164228668
            </p>
            <p className="hover:underline hover:text-secondaryColor-lighter">
              Remzymiles@gmail.com
            </p>
          </div>
          {/*  */}
          <div className="mt-1">
            <h3 className="capitalize font-bold mb-3 text-sm">general</h3>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                contact us
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                FAQs
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                sitemap
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                fraud alert
              </span>
            </p>
          </div>
          {/*  */}
          <div>
            <h3 className="capitalize font-bold mb-3 text-sm">resource</h3>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                home seller resources
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                home buyer resources
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                real estate glossary
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                mortgage calculators
              </span>
            </p>
          </div>
          {/*  */}
          <div>
            <h3 className="capitalize font-bold mb-3 text-sm">
              about monoline real estate
            </h3>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                company profile
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                about us
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                in the news
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                philanthropy
              </span>
            </p>
          </div>
          {/*  */}
          <div>
            <h3 className="capitalize font-bold mb-3 text-sm">join monoline</h3>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                why monoline
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                real estate careers
              </span>
            </p>
            <p className="text-xs mb-2">
              <span className=" capitalize hover:underline hover:text-secondaryColor-lighter">
                franchise
              </span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="mb-2">
          <div className="flex justify-center mt-10 gap-2">
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
        <div className="border mt-10 border-t-slate-500 border-b-slate-500 mb-5 py-6 flex justify-center gap-10">
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
    </footer>
  );
};
