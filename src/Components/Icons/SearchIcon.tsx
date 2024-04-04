import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchIcon = () => {
  return (
    <div className="">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-lg text-white"
      />
    </div>
  );
};
