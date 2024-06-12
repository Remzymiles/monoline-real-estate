import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IXIcon } from "../../Layouts/interface/IXIcon";

export const XIcon = ({ clicked, extraStyle }: IXIcon) => {
  return (
    <button onClick={clicked}>
      <FontAwesomeIcon
        icon={faXmark}
        className={`text-secondaryColor-dark ${extraStyle}`}
      />
    </button>
  );
};
