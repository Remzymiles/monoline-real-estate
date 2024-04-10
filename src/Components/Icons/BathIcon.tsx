import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath } from "@fortawesome/free-solid-svg-icons";

export const BathIcon = ({extraStyle}:{extraStyle:string}) => {
  return (
    <div>
        <FontAwesomeIcon
        icon={faBath}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  )
}
