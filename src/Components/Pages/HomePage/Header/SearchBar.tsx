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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search-properties/searchDetail/?search=${inputRef.current?.value}`;
    clearInputValue();
    setIsFocused(false);
  };

  return (
    <form
      className="relative"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="City, Area, ZIP"
        id="input"
        className={`border dark:border-gray-500 w-[100%] dark:text-gray-400 py-2.5 px-7 rounded-full shadow-lg transition-transform duration-300 outline-none dark:bg-secondaryColor-light ${
          isFocused ? "border-primaryColor-light dark:border-primaryColorDarkMode outline-none shadow-2xl" : ""
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
          setIsFocused(false);
        }}
        className={`absolute right-3 top-[6px] bg-primaryColor-light dark:bg-primaryColorDarkMode/60 rounded-full h-[%] px-3 py-2 flex items-center hover:bg-primaryColorDarkMode/90 transition-all duration-300 ${
          isFocused
            ? "w-[115px] h-9 big-screen-mobile-below:w-20 transition-all duration-300"
            : "w-9 h-9"
        }`}
      >
        <SearchIcon
          extraStyle={`text-white font-bold ${
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
