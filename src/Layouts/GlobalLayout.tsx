import { Outlet } from "react-router-dom";

export const GlobalLayout = () => {
  return (
    <div>
      <header></header>
      <main> <Outlet/> </main>
      <footer></footer>
    </div>
  );
};
