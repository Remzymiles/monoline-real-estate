import React, { ReactNode } from "react";

export const FormButton = ({ children: children, ...props }: { children: ReactNode } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <div>
      <button
        type="submit"
        className=" px-5 py-2 w-full text-center bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 text-white rounded-lg capitalize font-bold hover:bg-primaryColor-dark transition-colors duration-300 flex justify-center"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
