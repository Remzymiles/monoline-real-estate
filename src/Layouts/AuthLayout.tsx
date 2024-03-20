import { Outlet } from "react-router-dom";
import { AuthFooter } from "../Components/Pages/Auth/Footer";
import { AuthHeader } from "../Components/Pages/Auth/Header";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col h-[100vh] min-w-[320px]">
        <AuthHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <AuthFooter />
    </div>
  );
};
