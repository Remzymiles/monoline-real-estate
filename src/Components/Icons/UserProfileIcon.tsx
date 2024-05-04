import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserProfileIcon = ({
  extraStyle,
  iconStyle
}: {
  extraStyle: string;
  iconStyle: string
}) => {
  return (
    <div className={`rounded-full  ${extraStyle} text-center`}>
      <FontAwesomeIcon icon={faUser} className= {` text-white ${iconStyle}`} />
    </div>
  );
};
