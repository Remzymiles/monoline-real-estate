import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthData } from "../../../../../base/hooks/useGetAuthData";
import { useIsUserLoggedIn } from "../../../../../base/store/useIsUserLoggedIn";
import supabase from "../../../../../config/supabaseClient";

export const DropdownContent = ({ extraStyle }: { extraStyle: string }) => {
  //
  const redirect = useNavigate();
  const { isUserLoggedIn, setIsUserLoggedIn } = useIsUserLoggedIn((state) => ({
    isUserLoggedIn: state.isUserLoggedIn,
    setIsUserLoggedIn: state.setIsUserLoggedIn,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data) {
        setIsUserLoggedIn(true);
      }
    };

    fetchData();
  }, []);
  //
  const handleLogout = async () => {
    await supabase.auth.signOut();
    redirect("/auth/login");
  };
  //
  return (
    <div
      className={`border rounded-lg absolute z-50 right-0  top-[52px] w-[160px] bg-white flex flex-col ${extraStyle} mt-1`}
    >
      <Link
        to={"/auth/sign-up"}
        className={`${isUserLoggedIn ? "hidden" : "block"}`}
      >
        <div className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2 hover:rounded-t-lg">
          sign up
        </div>
        <hr />
      </Link>
      {/*  */}
      <Link
        to={"/auth/login"}
        className={`${isUserLoggedIn ? "hidden" : "block"}`}
      >
        <div className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2">
          login
        </div>
        <hr className={`${!isUserLoggedIn && "hidden"}`} />
      </Link>
      {/*  */}
      <Link
        to={"/wishlist"}
        className={`${isUserLoggedIn ? "block" : "hidden"}`}
      >
        <div
          className={`capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2 ${
            isUserLoggedIn && "hover:rounded-t-xl"
          }`}
        >
          wishlist
        </div>
        <hr />
      </Link>
      {/*  */}
      <Link
        to={"/profile"}
        className={`${isUserLoggedIn ? "block" : "hidden"}`}
      >
        <div className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2">
          profile
        </div>
        <hr />
      </Link>
      {/*  */}
      <Link
        to={"/order-history"}
        className={`${isUserLoggedIn ? "block" : "hidden"}`}
      >
        <div className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2">
          order history
        </div>
        <hr />
      </Link>
      {/*  */}
      <div
        className={`${isUserLoggedIn ? "block" : "hidden"}`}
        onClick={handleLogout}
      >
        <div className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 hover:rounded-b-xl transition-colors duration-300 px-2">
          logout
        </div>
      </div>
      {/*  */}
    </div>
  );
};
