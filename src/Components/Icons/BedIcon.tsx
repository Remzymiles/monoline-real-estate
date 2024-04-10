import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons";

export const BedIcon = ({extraStyle}:{extraStyle:string}) => {
  return (
    <div>
        <FontAwesomeIcon
        icon={faBed}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  )
}
