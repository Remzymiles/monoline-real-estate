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
  disabled,
  value,
}: IInput) => {
  //
  const { togglePasswordVisibility, passwordVisibility } = useTogglePassword();
  //


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
          maxLength={maxLength}
          onChange={(e) => {
            register(name).onChange(e);
          }}
          disabled={disabled}
          {...register(name)}
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
