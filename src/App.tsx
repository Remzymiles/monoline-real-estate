import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./Layouts/AuthLayout";
import { SignUpIndex } from "./Components/Pages/Auth/SignUp/SignUpIndex";
import { LoginIndex } from "./Components/Pages/Auth/Login/LoginIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<SignUpIndex/>} />
          <Route path="/sign-up" element={<SignUpIndex/>} />
          <Route path="/login" element={<LoginIndex/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
