import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITrashCan } from "../../base/interface/ITrashCan";

export const TrashCanIcon = ({ clicked, extraStyle }: ITrashCan) => {
  return (
    <button onClick={clicked}>
      <FontAwesomeIcon icon={faTrashCan} className={`text-sm ${extraStyle}`} />
    </button>
  );
};
