import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const UserProfileIcon = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div className={`h-[30px] w-[30px]  rounded-full  ${extraStyle}`}>
      <FontAwesomeIcon icon={faUser} className="text-sm text-white" />
    </div>
  );
};
