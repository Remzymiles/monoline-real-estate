import { Link, NavLink } from "react-router-dom";

export const DropdownContent = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div
      className={`border rounded-lg absolute z-50 mobile:right-1 between-mobile-and-tablet:right-5 tablet-above:right-8 top-[80px] laptop:right-16 w-[120px] bg-white flex flex-col ${extraStyle}`}
    >
      <Link
        to={"/auth/sign-up"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        sign up
      </Link>
      <hr />
      <Link
        to={"/auth/login"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        login
      </Link>
      <hr className="my-1" />
      <NavLink
        to={"/wishlist"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        wishlist
      </NavLink>
    </div>
  );
};
