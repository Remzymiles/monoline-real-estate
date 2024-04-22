import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator} from "@fortawesome/free-solid-svg-icons";

export const CalculatorIcon = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCalculator}
        className={`text-sm ${extraStyle}`}
      />
    </div>
  );
};
