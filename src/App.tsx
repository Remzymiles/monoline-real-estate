import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./Layouts/AuthLayout";
import { GlobalLayout } from "./Layouts/GlobalLayout";
import { SignUpPage } from "./Pages/SignUpPage";
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { Wishlist } from "./Pages/Wishlist";
import { ProfilePage } from "./Pages/ProfilePage";
import { PropertyDetails } from "./Pages/PropertyDetails";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/property-details/:propertyId" element={<PropertyDetails/>} />
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
