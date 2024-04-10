import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ChevronArrowUp = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronUp}
        className="text-sm text-secondaryColor-dark"
      />
    </div>
  );
};
