import { SettingsIcon } from "../../../Icons/SettingsIcon";

export const FilterButton = () => {
  return (
    <button className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300">
      <p className="font-bold text-sm big-screen-mobile-below:hidden">Filters</p>
      <SettingsIcon />
    </button>
  );
};
