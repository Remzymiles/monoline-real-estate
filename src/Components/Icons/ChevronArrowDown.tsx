import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ChevronArrowDown = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronDown}
        className="text-sm text-secondaryColor-dark"
      />
    </div>
  );
};
