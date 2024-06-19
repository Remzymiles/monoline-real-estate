import { useHandleGeneralHeaderDropdown } from "../../../../../Layouts/hooks/useHandleDropdown";
import { useFetchProfilePicture } from "../../../../../base/hooks/profilePage/useFetchProfilePicture";
import { TailSpinLoader } from "../../../../Global/Loaders/TailSpinLoader";
import { BarsIcon } from "../../../../Icons/BarsIcon";
import { ToggleDarkModeIcon } from "../../../../Icons/ToggleDarkModeIcon";
import { UserProfileIcon } from "../../../../Icons/UserProfileIcon";
import { DropdownContent } from "./DropdownContent";

export const GeneralHeaderDropdown = () => {
  //
  const { data: profilePhotoUrl, isLoading } = useFetchProfilePicture();
  //
  const {
    isGeneralHeaderDropdownVisible,
    handleOpenGeneralHeaderDropdown,
    generalHeaderDropdownRef,
    setIsGeneralHeaderDropdownVisible,
  } = useHandleGeneralHeaderDropdown();
  //

  //
  return (
    <div
      ref={generalHeaderDropdownRef}
      onClick={() => {
        isGeneralHeaderDropdownVisible
          ? setIsGeneralHeaderDropdownVisible(false)
          : null;
      }}
      className="relative"
    >
      <div className="flex gap-x-1 items-center bg-white px-3 py-1.5 big-screen-mobile-below:py-1 rounded-xl big-screen-mobile-below:rounded-full border">
        <button
          className="flex gap-x-2 items-center border-r-2 pr-[5px]"
          onClick={handleOpenGeneralHeaderDropdown}
        >
          <BarsIcon />

          {isLoading ? (
            <div className="h-[32px] w-[32px] bg-black/70 rounded-full">
              <TailSpinLoader extraStyle="mt-[3px] ml-[1px]" color="white" />
            </div>
          ) : profilePhotoUrl ? (
            <div className="h-[32px] w-[32px]">
              <img
                src={profilePhotoUrl}
                alt="image"
                className="h-[100%] w-[100%] rounded-full object-cover border"
              />
            </div>
          ) : (
            !profilePhotoUrl && (
              <UserProfileIcon
                iconStyle="text-xs"
                extraStyle="bg-black/80 h-[30px] w-[30px] "
              />
            )
          )}
        </button>
        <ToggleDarkModeIcon />
      </div>
      <DropdownContent
        extraStyle={isGeneralHeaderDropdownVisible ? "block" : "hidden"}
      />
    </div>
  );
};
