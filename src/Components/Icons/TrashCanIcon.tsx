import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITrashCanIcon } from "../../base/interface/ITrashCanIcon";

export const TrashCanIcon = ({ clicked, extraStyle }: ITrashCanIcon) => {
  return (
    <button onClick={clicked}>
      <FontAwesomeIcon icon={faTrashCan} className={`text-sm ${extraStyle}`} />
    </button>
  );
};
