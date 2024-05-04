import { useState } from "react";
import { Input } from "../../Global/FormComponents/Input";

export const EditEmailAndPassword = () => {
  //
  const [isEditPasswordVisible, setIsEditPasswordVisible] = useState(false);
  const [isEditEmailVisible, setIsEditEmailVisible] = useState(false);
  const handleEditEmail = () => {
    isEditEmailVisible
      ? setIsEditEmailVisible(false)
      : setIsEditEmailVisible(true);
  };
  const handleEditPassword = () => {
    isEditPasswordVisible
      ? setIsEditPasswordVisible(false)
      : setIsEditPasswordVisible(true);
  };

  //
  return (
    <div>
      <div className="mb-3">
        <h1 className="capitalize font-bold text-lg">email</h1>
        <div className="flex gap-x-5 items-end">
          <p className="text-sm tracking-wide">remzymiles@gmail.com</p>
          <button
            className="text-xs text-primaryColor-light"
            onClick={handleEditEmail}
          >
            Edit
          </button>
        </div>
      </div>
      <div
        className={`border rounded-md px-3 py-2 transition-all duration-300 ${
          isEditEmailVisible
            ? "h-[27vh] opacity-100 mb-5"
            : "invisible h-0 opacity-0"
        }`}
      >
        <div className="mb-4">
          <Input
            htmlFor="email_address"
            id="email_address"
            name="email_address"
            nameOfInput="email address"
            placeholder="email address"
            inputType="text"
            register={() => {}}
            extraStyle={``}
          />
        </div>
        {/*  */}
        <div className="mb-4">
          <Input
            htmlFor="current_password"
            id="current_password"
            name="current_password"
            nameOfInput="current password"
            placeholder="current password"
            inputType="text"
            register={() => {}}
            extraStyle={``}
          />
        </div>
      </div>
      {/*  */}
      <div className="mb-4">
        <h1 className="capitalize font-bold text-lg">password</h1>
        <div className="flex gap-x-5 items-start">
          <p className="text-sm tracking-wide">*********</p>
          <button
            className="text-xs text-primaryColor-light"
            onClick={handleEditPassword}
          >
            Edit
          </button>
        </div>
      </div>
      <div
        className={`border rounded-md px-3 py-2 transition-all duration-300 ${
          isEditPasswordVisible
            ? "h-[38vh] opacity-100 mb-5"
            : "invisible h-0 opacity-0"
        }`}
      >
        <div className="mb-4">
          <Input
            htmlFor="current_password"
            id="current_password"
            name="current_password"
            nameOfInput="current password"
            placeholder="current password"
            inputType="text"
            register={() => {}}
            extraStyle={``}
          />
        </div>
        {/*  */}
        <div className="mb-4">
          <Input
            htmlFor="new_password"
            id="new_password"
            name="new_password"
            nameOfInput="new password"
            placeholder="new password"
            inputType="text"
            register={() => {}}
            extraStyle={``}
          />
        </div>
        {/*  */}
        <div className="mb-4">
          <Input
            htmlFor="confirm_password"
            id="confirm_password"
            name="confirm_password"
            nameOfInput="confirm password"
            placeholder="confirm password"
            inputType="text"
            register={() => {}}
            extraStyle={``}
          />
        </div>
      </div>
    </div>
  );
};
