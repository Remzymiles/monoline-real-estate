import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../../Icons/SearchIcon";

//
export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  //
  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form
      className="relative"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="City, Area, ZIP"
        id="input"
        className={`border w-[100%] py-4 px-7 rounded-full shadow-lg transition-transform duration-300 ${
          isFocused ? "border-primaryColor-light outline-none shadow-2xl" : ""
        }`}
      />
      <Link
        to={`/search-properties/searchDetail/?search=${inputRef.current?.value}`}
        onClick={() => {
          clearInputValue();
        }}
        className={`absolute right-3 top-2 bg-primaryColor-light rounded-full h-[52px] px-3 py-2 flex items-center hover:bg-primaryColor-dark transition-all duration-300 ${
          isFocused
            ? "w-[130px] big-screen-mobile-below:w-[90px]  big-screen-mobile-below:px-[4px] transition-[width] duration-300"
            : "w-[52px]"
        }`}
      >
        <SearchIcon
          extraStyle={`text-white ${
            isFocused ? "big-screen-mobile-below:hidden" : "visible"
          }`}
        />
        <span
          className={`text-white pl-2 font-bold transition-opacity duration-300 ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
        >
          Search
        </span>
      </Link>
    </form>
  );
};
