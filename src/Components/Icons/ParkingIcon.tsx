import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ParkingIcon = ({extraStyle}:{extraStyle:string}) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSquareParking}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  );
};
