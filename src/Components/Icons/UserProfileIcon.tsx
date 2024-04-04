import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const UserProfileIcon = () => {
  return (
    <div className="h-[30px] w-[30px]  rounded-full bg-gray-400">
      <FontAwesomeIcon icon={faUser} className="text-sm text-white" />
    </div>
  );
};
