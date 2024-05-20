import { FormButton } from "../../Global/FormComponents/Button";
import { Input } from "../../Global/FormComponents/Input";
import { EditEmailAndPassword } from "./EditEmailAndPassword";
import { ProfileImage } from "./ProfileImage";

export const ProfilePageCard = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold capitalize mb-8 text-center">
        edit profile
      </h1>
      <div className="flex gap-20 justify-evenly tablet-below:flex-col tablet-below:justify-center tablet-below:items-center">
        <ProfileImage />
        {/*  */}
        <div className="border dark:border-gray-400 rounded-md w-[600px] mobile:w-full  px-3 py-1">
          {/*  */}
          <EditEmailAndPassword />
          <form>
            <div className="mb-4">
              <Input
                htmlFor="fullname"
                id="fullname"
                name="full name"
                nameOfInput="fullname"
                placeholder="fullname"
                inputType="text"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-4">
              <Input
                htmlFor="phone"
                id="phone"
                name="phone number"
                nameOfInput="phone"
                placeholder="phone"
                inputType="text"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-4">
              <Input
                htmlFor="location"
                id="location"
                name="location"
                nameOfInput="location"
                placeholder="location"
                inputType="text"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-3">
              <FormButton name="save profile" />
            </div>
          </form>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
