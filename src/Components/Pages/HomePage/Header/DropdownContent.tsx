import { Link, NavLink } from "react-router-dom";

export const DropdownContent = () => {
  return (
    <div className="border rounded-lg absolute top-11 right-0 w-[210px] bg-white flex flex-col">
      <Link
        to={"/auth/sign-up"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        sign up
      </Link>
      <Link
        to={"/auth/login"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        login
      </Link>
      <hr className="my-1" />
      <NavLink
        to={"/sell-your-home"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        sell your home
      </NavLink>
      <NavLink
        to={"/wishlist"}
        className="capitalize pl-4 text-md text-secondaryColor-dark py-1 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        wishlist
      </NavLink>
    </div>
  );
};
