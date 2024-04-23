import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./Layouts/AuthLayout";
import { GlobalLayout } from "./Layouts/GlobalLayout";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { PropertyDetails } from "./Pages/PropertyDetails";
import { SearchPage } from "./Pages/SearchPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { Wishlist } from "./Pages/Wishlist";


function App() {
  return (
    
     <div className="font-myFont">
       <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/property-details/:propertyId" element={<PropertyDetails/>} />
          <Route path="/search-properties/:searchDetail" element={<SearchPage/>} />
        </Route>
        {/*  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUpPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Route>
        {/*  */}
      </Routes>
     </div>
    
  );
}

export default App;
