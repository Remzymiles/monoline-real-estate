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
  onChange
}: IInput) => {
  //
  const { togglePasswordVisibility, passwordVisibility } = useTogglePassword();
  //
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedValue: string = e.target.value;

    if (inputType === "tel" && updatedValue.length > 0) {
      updatedValue = updatedValue.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
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
          className="mb-1 capitalize text-secondaryColor-light font-bold big-screen-mobile-below:text-[17px] between-mobile-and-tablet:text-[19px] tablet-above:text-[17px]"
          htmlFor={htmlFor}
        >
          {nameOfInput}
        </label>
        <input
          name={name}
          type={passwordVisibility ? "text" : inputType}
          placeholder={placeholder}
          className={`px-4 py-3 my-1 bg-gray-100 w-full focus:border-b-2 focus:border-secondaryColor-dark focus:outline-none focus:bg-gray-200 ${extraStyle}`}
          id={id}
          {...register(name)}
          maxLength={maxLength}
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        {inputType === "password" ? (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-9"
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
