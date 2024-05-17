import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders} from "@fortawesome/free-solid-svg-icons";

export const SettingsIcon = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSliders}
        className="text-sm text-secondaryColor-dark dark:text-zinc-400"
      />
    </div>
  )
}
