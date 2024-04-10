import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const HeartIcon = ({ color }: { color: string }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faHeart} className={`text-lg ${color}`} />
    </div>
  );
};
