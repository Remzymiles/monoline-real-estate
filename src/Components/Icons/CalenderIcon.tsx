import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar} from "@fortawesome/free-solid-svg-icons";

export const CalenderIcon = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCalendar}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  )
}


