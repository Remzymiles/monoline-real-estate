import { AboutMonolineContents } from "./AboutMonolineContents";
import { GeneralDropdownContents } from "./GeneralDropdownContents";
import { JoinMonolineContents } from "./JoinMonolineContents";
import { ResourceDropdownContents } from "./ResourceDropdownContents";

export const FooterContents = () => {
  //

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
        <GeneralDropdownContents />
        {/*  */}
        <ResourceDropdownContents />
        {/*  */}
        <AboutMonolineContents />
        {/*  */}
        <JoinMonolineContents />
      </div>
    </div>
  );
};
