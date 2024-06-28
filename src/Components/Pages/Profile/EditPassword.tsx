import { useEffect, useState } from "react";
import { useHandleEditPasswordForm } from "../../../base/hooks/profilePage/useHandleEditPasswordForm";
import { EditPasswordForm } from "./EditPasswordForm";

export const EditPassword = () => {
  //
  const { handleEditPassword, isEditPasswordVisible } =
    useHandleEditPasswordForm();
  //
  const [userEmail, setUserEmail] = useState<string>("");
  //
  
  useEffect(() => {
    const data = localStorage.getItem("sb-xvfhzmjbcswkydirxlry-auth-token");
    if (data) {
      let userData = JSON.parse(data);
      setUserEmail(userData.user.email);
    }
  }, []);

  //
  return (
    <div>
      <div className="mb-3">
        <h1 className="capitalize font-bold text-lg">email</h1>
        <div className="flex gap-x-5 items-end">
          <p className="text-sm tracking-wide">{userEmail}</p>
        </div>
      </div>

      {/*  */}

      <EditPasswordForm
        handleEditPassword={handleEditPassword}
        isEditPasswordVisible={isEditPasswordVisible}
      />
    </div>
  );
};
