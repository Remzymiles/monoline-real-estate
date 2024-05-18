import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const PasswordVisibilityIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEye} className="text-sm text-gray-900 dark:text-gray-400" />
    </div>
  );
};
