import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const XIcon = ({clicked}:{clicked:any}) => {
  return (
    <button onClick={clicked}>
      <FontAwesomeIcon
        icon={faXmark}
        className="text-sm font- text-secondaryColor-dark"
      />
    </button>
  );
};
