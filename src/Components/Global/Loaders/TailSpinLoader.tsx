import { tailspin } from "ldrs";

export const TailSpinLoader = ({
  extraStyle,
  color,
}: {
  extraStyle?: string;
  color: string;
}) => {
  tailspin.register();

  return (
    <div className={`${extraStyle}`}>
      <l-tailspin size="20" stroke="5" speed="0.9" color={`${color}`}></l-tailspin>
    </div>
  );
};
