import { useHandleFocusAndBlur } from "../../../../base/hooks/useHandleFocusAndBlur";
import { SearchIcon } from "../../../Icons/SearchIcon";

export const SearchBar = () => {
  //
  const { isFocused, handleFocus, handleBlur } =
    useHandleFocusAndBlur();

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="City, Area, ZIP"
        id="input"
        className="border w-[100%] py-4 px-7 rounded-full shadow-lg focus:border-primaryColor-light focus:outline-none focus:shadow-2xl focus:transition-transform duration-300"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {/*  */}
      <button
        className={`absolute right-3 top-2 bg-primaryColor-light rounded-full h-[52px] px-3 py-2 flex items-center hover:bg-primaryColor-dark transition-all duration-300 ${
          isFocused
            ? "w-[130px] transition-[width] duration-300 ease-in-out"
            : "w-[52px]"
        }`}
      >
        {isFocused ? (
          <>
            <SearchIcon />
            <span className="text-white pl-2 font-bold transition-all duration-300">
              Search
            </span>
          </>
        ) : (
          <SearchIcon />
        )}
      </button>
    </form>
  );
};
