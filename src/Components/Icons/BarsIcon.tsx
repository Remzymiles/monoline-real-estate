import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const BarsIcon = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-sm text-secondaryColor-dark"
      />
    </div>
  );
};
