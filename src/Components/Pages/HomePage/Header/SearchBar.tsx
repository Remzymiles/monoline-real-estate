import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon } from "../../../Icons/SearchIcon";

//
export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  //
  const currentLocation = useLocation();

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
        className={`border w-[100%] py-3.5 px-7 rounded-full shadow-lg transition-transform duration-300 ${
          isFocused ? "border-primaryColor-light outline-none shadow-2xl" : ""
        }`}
      />
      <Link
        to={
          inputRef.current?.value
            ? `/search-properties/searchDetail/?search=${inputRef.current?.value}`
            : currentLocation.search
        }
        onClick={() => {
          clearInputValue();
          setIsFocused(false)
        }}
        className={`absolute right-3 top-2 bg-primaryColor-light rounded-full h-[%] px-3 py-2 flex items-center hover:bg-primaryColor-dark transition-all duration-300 ${
          isFocused
            ? "w-[130px] big-screen-mobile-below:w-20 transition-[width] duration-300"
            : "w-10"
        }`}
      >
        <SearchIcon
          extraStyle={`text-white ${
            isFocused ? "big-screen-mobile-below:hidden" : "visible"
          }`}
        />
        <span
          className={`text-white pl-2 font-bold transition-opacity duration-300 ${
            isFocused ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          Search
        </span>
      </Link>
    </form>
  );
};
