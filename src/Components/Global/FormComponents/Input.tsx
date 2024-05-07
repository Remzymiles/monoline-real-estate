import { IInput } from "../../../base/interface/IInput";
import { PasswordVisibilityIcon } from "../../Icons/PasswordVisibilityIcon";
import { PasswordVisibilityOffIcon } from "../../Icons/PasswordVisibilityOffIcon";
import { useTogglePassword } from "../../../base/hooks/useTogglePassword";

export const Input = ({
  inputType,
  placeholder,
  id,
  htmlFor,
  nameOfInput,
  name,
  register,
  extraStyle,
}: IInput) => {
  //
  const { togglePasswordVisibility, passwordVisibility } = useTogglePassword();
  //

  return (
    <>
      <div className="relative">
        <label
          className="mb-1 capitalize text-secondaryColor-light font-bold big-screen-mobile-below:text-[17px] between-mobile-and-tablet:text-[19px] tablet-above:text-[21px]"
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
