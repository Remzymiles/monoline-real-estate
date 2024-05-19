import { ChangeEvent, useState } from "react";
import { useTogglePassword } from "../../../base/hooks/useTogglePassword";
import { IInput } from "../../../base/interface/IInput";
import { PasswordVisibilityIcon } from "../../Icons/PasswordVisibilityIcon";
import { PasswordVisibilityOffIcon } from "../../Icons/PasswordVisibilityOffIcon";

export const Input = ({
  inputType,
  placeholder,
  id,
  htmlFor,
  nameOfInput,
  name,
  register,
  extraStyle,
  maxLength,
  onChange,
  disabled
}: IInput) => {
  //
  const { togglePasswordVisibility, passwordVisibility } = useTogglePassword();
  //
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedValue: string = e.target.value;

    if (id === "card_number" && updatedValue.length > 4 && updatedValue.length !== 19 ) {
      updatedValue = updatedValue.replace(/\D/g, "").replace(/(.{4})/g, "$1-");
    }

    setInputValue(updatedValue); 

    if (onChange) {
      onChange(updatedValue); 
    }
  };


  return (
    <>
      <div className="relative">
        <label
          className="capitalize text-secondaryColor-light font-bold dark:text-gray-400 big-screen-mobile-below:text-[17px] between-mobile-and-tablet:text-[19px] tablet-above:text-[17px]"
          htmlFor={htmlFor}
        >
          {nameOfInput}
        </label>
        <input
          name={name}
          type={passwordVisibility ? "text" : inputType}
          placeholder={placeholder}
          className={`px-4 py-3 my-1 bg-gray-100 dark:bg-secondaryColor-lighter/30 w-full focus:border-b-2 focus:border-secondaryColor-dark dark:focus:border-gray-400 focus:outline-none focus:bg-gray-200 dark:focus:bg-secondaryColor-lighter/40 ${extraStyle}`}
          id={id}
          {...register(name)}
          maxLength={maxLength}
          value={inputValue}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
        />
        {inputType === "password" ? (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-10"
          >
            {passwordVisibility ? (
              <PasswordVisibilityIcon />
            ) : (
              <PasswordVisibilityOffIcon />
            )}
          </button>
        ) : null}
      </div>
    </>
  );
};
