import { useEffect, useState } from "react";
import { getAuthData } from "../../../base/hooks/useGetAuthData";
import { useHandleEditPassword } from "../../../base/hooks/useHandleEditPassword";
import { EditPasswordForm } from "./EditPasswordForm";

export const EditPassword = () => {
  //
  const { handleEditPassword, isEditPasswordVisible } = useHandleEditPassword();
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
