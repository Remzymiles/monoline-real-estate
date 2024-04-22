import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";


export const PhotoIcon = ({extraStyle}:{extraStyle: string}) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faImage}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  )
}

