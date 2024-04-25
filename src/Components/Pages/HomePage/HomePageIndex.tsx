import { PropertyCard } from "../../Global/Cards/PropertyCard";

export const HomePageIndex = () => {
  return (
    <div className="flex justify-center flex-wrap gap-5 min-h-[50vh] pt-2 mobile:mx-4 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-16">
      <PropertyCard />
    </div>
  );
};