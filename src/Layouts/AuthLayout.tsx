import { Outlet } from "react-router-dom";
import { AuthFooter } from "../Components/Pages/Auth/Footer";
import { AuthHeader } from "../Components/Pages/Auth/Header";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col h-[100vh] min-w-[320px] dark:bg-secondaryColor-dark/95">
      <AuthHeader />
      <main className="flex-1 min-h-fit">
        <Outlet />
      </main>
      <AuthFooter />
    </div>
  );
};
