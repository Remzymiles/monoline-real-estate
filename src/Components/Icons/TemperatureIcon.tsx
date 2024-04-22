import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";

export const TemperatureIcon = ({extraStyle}:{extraStyle:string}) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faTemperatureHalf}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  )
}



