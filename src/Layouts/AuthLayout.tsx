import { Link, Outlet } from "react-router-dom";
import { Footer } from "../Components/Pages/Auth/Footer";
import { Header } from "../Components/Pages/Auth/Header";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col h-[100vh] min-w-[320px]">
        <Header />
      {/* <Link to={"/"}>
      </Link> */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
