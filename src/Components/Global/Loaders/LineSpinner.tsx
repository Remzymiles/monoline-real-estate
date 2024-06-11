import { lineSpinner } from "ldrs";
export const LineSpinner = ({ extraStyle }: { extraStyle: string }) => {
  lineSpinner.register();

  return (
    <div className={`${extraStyle}`}>
      <l-line-spinner
        size="20"
        stroke="3"
        speed="1"
        color="white"
      ></l-line-spinner>
    </div>
  );
};
