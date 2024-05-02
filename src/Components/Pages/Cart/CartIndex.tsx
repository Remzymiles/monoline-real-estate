import { CartPropertyCard } from "./CartPropertyCard";

export const CartIndex = () => {
  return (
    <div className="min-h-[50vh] pt-2 mobile:mx-4 tablet:mx-4 big-screen-mobile-below:mt-[140px] tablet-above:mt-[170px] mt-[170px] laptop:mt-[120px] tablet-above:mx-8 laptop:mx-16">
      <CartPropertyCard />
    </div>
  );
};
