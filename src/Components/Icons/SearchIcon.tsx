import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchIcon = ({textColor}:{textColor:string}) => {
  return (
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={`text-lg ${textColor}`} />
    </div>
  )
};
