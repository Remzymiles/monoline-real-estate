import { useEffect, useState } from "react";
import { getAuthData } from "../../../base/hooks/useGetAuthData";
import { EditPasswordForm } from "./EditPasswordForm";
import { useHandleEditPasswordForm } from "../../../base/hooks/profilePage/useHandleEditPasswordForm";

export const EditPassword = () => {
  //
  const { handleEditPassword, isEditPasswordVisible } = useHandleEditPasswordForm();
  //
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data?.user?.email) {
        setUserEmail(data.user.email);
      }
    };

    fetchData();
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
