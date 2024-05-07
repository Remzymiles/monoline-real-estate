import { Input } from "../../Global/FormComponents/Input";
import image from "/images/12-Antonellis-Cir-2.webp";

export const CheckoutIndex = () => {
  return (
    <div className="flex gap-x-2 justify-center tablet-below:flex-col tablet-below:gap-y-7">
      <div className="w-[550px] tablet-below:w-full bg-primaryColor-lightCream rounded-lg pb-5 px-3 py-3 shadow-xl big-screen-mobile-below:px-0 big-screen-mobile-below:bg-white big-screen-mobile-below:shadow-none">
        <h1 className="capitalize big-screen-mobile-below:text-[20px] between-mobile-and-tablet:text-[22px] tablet-above:text-[25px] font-extrabold text-center mb-4">
          checkout informations
        </h1>
        <div className="flex gap-x-6 items-center mb-5 big-screen-mobile-below:gap-x-3">
          <div className="w-[300px] h-[150px] between-mobile-and-tablet:h-[200px] big-screen-mobile-below:h-[150px]">
            <img
              src={image}
              alt="image"
              className="w-[100%] h-[100%] rounded-lg object-cover"
            />
          </div>
          <div className="flex justify-between w-full gap-x-3 big-screen-mobile-below:flex-col big-screen-mobile-below:gap-y-3">
            <div>
              <p className="font-bold capitalize big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
                27615 N 137th St
              </p>
              <p className="font-bold big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] capitalize text-gray-400">
                austin,tx
              </p>
            </div>
            {/*  */}
            <p className="font-extrabold big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
              $1,000,000,00
            </p>
          </div>
        </div>
        {/*  */}

        <hr className="bg-black h-[2px]" />
        {/*  */}
        <div className="flex justify-between py-2 px-1">
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-bold capitalize">subtotal</p>
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-semibold capitalize">$1,000,000,000</p>
        </div>
        <hr className="bg-black h-[2px]" />
        {/*  */}
        <div className="flex justify-between py-2 px-1">
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-bold capitalize">tax</p>
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-semibold capitalize">$1,000</p>
        </div>
        <hr className="bg-black h-[2px]" />
        {/*  */}
        <div className="flex justify-between py-3 px-1">
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-bold capitalize">estimated total</p>
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-semibold capitalize">$1,000,000,000</p>
        </div>
        <hr className="bg-black h-[2px]" />
        <hr className="bg-black h-[2px]" />
      </div>
      {/*  */}
      <div className="w-[700px] rounded-lg py-2 px-2 tablet-below:w-full tablet-above:sticky tablet-above:top-[120px] h-fit">
        <h1 className="big-screen-mobile-below:text-[20px] between-mobile-and-tablet:text-[22px] tablet-above:text-[25px] font-extrabold text-center capitalize">
          payment information
        </h1>
        <p className="border-2 border-primaryColor-light w-fit px-1 py-1 rounded-lg capitalize font-bold bg-slate-100 m-auto my-4 big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
          credit/debit card
        </p>
        <div className="w-full px-2">
          <div className="mb-4">
            <Input
              htmlFor="card_number"
              id="card_number"
              name="card_number"
              nameOfInput="card number"
              placeholder="card number"
              inputType="number"
              register={() => {}}
              extraStyle={``}
            />
          </div>
          {/*  */}
          <div className="mb-4">
            <Input
              htmlFor="cardHolder-name"
              id="cardHolder-name"
              name="cardHolder-name"
              nameOfInput="cardHolder name"
              placeholder="card holder name"
              inputType="number"
              register={() => {}}
              extraStyle={``}
            />
          </div>
          {/*  */}
          <div className="flex justify-between items-center">
            <div className="mb-4 w-[45%]">
              <Input
                htmlFor="exp_date"
                id="exp_date"
                name="exp_date"
                nameOfInput="exp date"
                placeholder="mm/yy"
                inputType="number"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-4 w-[30%]">
              <Input
                htmlFor="cvv"
                id="cvv"
                name="cvv"
                nameOfInput="cvv"
                placeholder="cvv"
                inputType="number"
                register={() => {}}
                extraStyle={``}
              />
            </div>
          </div>
          <button className="bg-primaryColor-light py-2 px-2 w-full text-white capitalize big-screen-mobile-below:text-[16px] between-mobile-and-tablet:text-[18px] tablet-above:text-[19px] font-bold rounded-lg hover:bg-primaryColor-dark transition-colors duration-300">
            pay $1,000,000,000
          </button>
        </div>
      </div>
    </div>
  );
};
