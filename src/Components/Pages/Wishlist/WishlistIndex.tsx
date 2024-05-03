import { WishlistCards } from "./WishlistCards";

export const WishlistIndex = () => {
  return (
    <div className="pt-3 mobile:mx-4 tablet:mx-8 big-screen-mobile-below:mt-[150px] tablet-above:mt-[180px] mt-[180px] laptop:mt-[120px] tablet-above:mx-8 laptop:mx-16">
      <WishlistCards />
    </div>
  );
};
