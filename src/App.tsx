import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./Layouts/AuthLayout";
// import { HomePageIndex } from "./Components/Pages/HomePage/HomePageIndex";
import { GlobalLayout } from "./Layouts/GlobalLayout";
import { SignUpPage } from "./Pages/SignUpPage";
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/*  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUpPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Route>
        {/*  */}
      </Routes>
    
  );
}

export default App;
