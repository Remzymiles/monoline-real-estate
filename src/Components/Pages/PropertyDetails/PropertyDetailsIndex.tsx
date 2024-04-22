import { useSearchParams } from "react-router-dom";
import properties from "../../../base/dummyData/properties.json";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { CalculatorIcon } from "../../Icons/CalculatorIcon";
import { CalenderIcon } from "../../Icons/CalenderIcon";
import { DeckIcon } from "../../Icons/DeckIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { ParkingIcon } from "../../Icons/ParkingIcon";
import { PhotoIcon } from "../../Icons/PhotoIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { TemperatureIcon } from "../../Icons/TemperatureIcon";
import Picture from "/images/12-Nehring-Ave-2.webp";

export const PropertyDetailsIndex = () => {
  const [query] = useSearchParams();
  const propertyId = query.get("id");
  //
  //
  const selectedProperty = properties.find((property) => {
    return property.property_id == Number(propertyId);
  });
  console.log(selectedProperty);

  return (
    <div className="">
      <div className="absolute"></div>
      <div className="tablet-below:relative">
        <div className="mb-3">
          <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
            <div className="w-[700px] h-[500px] relative tablet-below:w-full">
              <p className="uppercase bg-white px-[5px] absolute top-2 left-3 rounded-sm font-bold text-primaryColor-dark text-[10px]">
                for sale
              </p>
              <div className="capitalize absolute top-2 right-2 flex gap-2 bg-white text-primaryColor-dark px-3 py-1 rounded-sm font-bold text-sm tablet-above:hidden">
                <HeartIcon color="text-primaryColor-dark text-sm" />
                save
              </div>
              <div className="absolute bottom-2 right-2 bg-white/90 text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white tablet-above:hidden mobile:text-xs">
                <PhotoIcon extraStyle="text-primaryColor-dark" />
                show all photos
              </div>
              <img
                src={Picture}
                alt="img"
                className="w-[100%] h-[100%] rounded-l-lg tablet-below:rounded-md big-screen-mobile-below:object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-[300px] h-[243px] relative tablet-below:hidden">
                <div className="capitalize absolute top-2 right-2 flex gap-2 bg-white text-primaryColor-dark px-3 py-1 rounded-sm font-bold text-sm">
                  <HeartIcon color="text-primaryColor-dark text-sm" />
                  save
                </div>
                <img
                  src={Picture}
                  alt="img"
                  className="w-[100%] h-[100%] rounded-tr-lg"
                />
              </div>
              <div className="w-[300px] h-[243px] relative tablet-below:hidden">
                <div className="absolute bottom-2 right-2 bg-white/90 text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white">
                  <PhotoIcon extraStyle="text-primaryColor-dark" />
                  show all photos
                </div>
                <img
                  src={Picture}
                  alt="img"
                  className="w-[100%] h-[100%] rounded-br-lg"
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex tablet-below:flex-col justify-center tablet-above:gap-x-16 mt-4">
            <div className="flex tablet-below:justify-between big-screen-mobile-below:flex-col tablet-above:gap-x-28 tablet-below:mb-5">
              <div className="big-screen-mobile-below:mb-3">
                <h1 className="text-xl font-extrabold tracking-wider">
                  5865 Winterthur Dr NW
                </h1>
                <p className="text-xs mb-3">Sandy Springs, GA 30328</p>
                <div className="mt-1 flex gap-3">
                  <span className="flex gap-1 text-sm text-secondaryColor-dark">
                    <BedIcon extraStyle="text-gray-500 text-[10px]" /> 3bd
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark">
                    <BathIcon extraStyle="text-gray-500 text-[10px]" /> 4ba
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark">
                    <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                    7sqft
                  </span>
                </div>
              </div>
              <div>
                <h1 className="font-extrabold text-xl tracking-wider">
                  $2,750,000
                </h1>
                <p className="text-xs">Est. Mortgage $16,621/mo*</p>
              </div>
            </div>
            {/*  */}
            <div className="tablet-below:w-full bg-white tablet-above:border rounded-md tablet-above:px-5 pt-3 flex flex-col">
              <p className="text-xs text-center">Request a tour as early as</p>
              <p className="font-bold text-center text-sm mt-2">
                Today at 11:00AM
              </p>
              <button className="bg-primaryColor-light hover:bg-primaryColor-dark transition-all duration-300 text-white font-bold mt-2 rounded-md px-10 py-2 text-sm">
                Schedule a tour
              </button>
              <button className="bg-primaryColor-light hover:bg-primaryColor-dark transition-all duration-300 text-white font-bold mt-2 rounded-md px-10 py-2 mb-3 text-sm">
                Request info
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="big-screen-laptop:max-w-[1000px] mt-10 m-auto">
          <div className="">
            <h1 className="text-xl font-extrabold capitalize mb-3">
              description
            </h1>
            <p>
              Nestled within the secluded embrace of a sprawling 2.5-acre lot,
              this exquisite Tuscan-style villa stands as a masterpiece of
              architectural grace and refined tranquility in Atlanta’s coveted
              Winterthur neighborhood. With its stunning clay barrel-tile roof
              and character-rich Tuscan front elevation, the residence evokes
              the timeless allure of a wine country estate, beautifully
              transposed to an idyllic Southern setting. The interiors, curated
              by the acclaimed designer Courtney Bishop, unfold in a tapestry of
              rustic elegance, where vaulted wood-beamed ceilings and expansive
              skylights invite an abundance of natural light, highlighting the
              sophisticated open-concept layout. The heart of the home features
              a chef’s kitchen, adorned with rustic barn doors, stacked stone
              archways, and wood-planked ceilings, creating a perfect backdrop
              for culinary exploration. The adjacent breakfast room offers a
              tranquil vista of the meticulously landscaped grounds, while the
              formal dining room sets the stage for lavish gatherings. A sunken
              living room creates a cozy ambiance with an inviting fireplace and
              spills into the spacious family room featuring a built-in wet bar
              with built-in beverage refrigerators and ice maker. Outside, the
              rear veranda offers a breathtaking outdoor living space, complete
              with a wood-burning fireplace, outdoor dining, and a heated pool
              and spa, creating an inviting retreat for year-round entertainment
              under the stars. The opulent primary suite offers a sanctuary of
              luxury, with its bespoke wood-lined ceilings, an intimate seating
              area, an expansive walk-in closet, and a spa-like bathroom that
              features a floating bathtub and an oversized walk-in shower. The
              estate’s terrace level is a haven of relaxation, comprising two
              elegantly appointed bedrooms linked by a Jack-and-Jill bathroom
              and a bonus room – perfect for a playroom or a media room. The
              outdoor realm of the property is nothing short of spectacular,
              with a private pool, hot tub, outdoor fireplace, covered dining
              areas, sports field, putting green, and lush gardens that whisk
              you away to the verdant landscapes of Europe. Residing in
              Winterthur not only means living in a home that’s a marvel of
              design and comfort but also enjoying community features like
              direct access to the Chattahoochee River, exclusive park, and
              tennis facilities. With proximity to Atlanta’s top private
              schools, excellent public schools, major highways, and Truist
              Park, this estate is a rare gem, offering a lifestyle steeped in
              luxury and unparalleled charm.
            </p>
          </div>
          {/*  */}
          <div className="border mt-5 px-3 pt-2 rounded-md">
            <h1 className="capitalize font-extrabold mb-5">home highlights</h1>
            <div className="grid tablet-below:grid-cols-1 grid-cols-2">
              <div className="flex gap-x-16 mb-3">
                <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                  <ParkingIcon extraStyle="text-gray-500" /> parking
                </span>
                <span className="capitalize font-extrabold text-sm mobile:text-xs">
                  {" "}
                  garage
                </span>
              </div>
              {/*  */}
              <div className="flex gap-x-16 mb-3">
                <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                  <DeckIcon extraStyle="fill-gray-500" /> outdoor
                </span>
                <span className="capitalize font-extrabold text-sm mobile:text-xs">
                  {" "}
                  Patio, Pool
                </span>
              </div>
              {/*  */}
              <div className="flex gap-x-16 mb-3">
                <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                  <TemperatureIcon extraStyle="text-gray-500" /> A/C
                </span>
                <span className="capitalize font-extrabold text-sm mobile:text-xs">
                  {" "}
                  Heating & Cooling
                </span>
              </div>
              {/*  */}
              <div className="flex gap-x-16 mb-3">
                <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                  <CalculatorIcon extraStyle="text-gray-500" /> HOA
                </span>
                <span className="capitalize font-extrabold text-sm mobile:text-xs">
                  {" "}
                  $104/Monthly
                </span>
              </div>
              {/*  */}
              <div className="flex gap-x-16 mb-3">
                <span className="capitalize flex tablet-below:gap-0 gap-1 text-sm">
                  <SquareFootIcon extraStyle="fill-gray-500 h-[15px] w-[15px] mt-1" />{" "}
                  Price/Sqft
                </span>
                <span className="capitalize font-extrabold text-sm mobile:text-xs">
                  {" "}
                  $638
                </span>
              </div>
              {/*  */}
              <div className="flex gap-x-16 mb-3">
                <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                  <CalenderIcon extraStyle="text-gray-500" /> Listed
                </span>
                <span className="capitalize font-extrabold text-sm mobile:text-xs">
                  {" "}
                  3 days ago
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <h1>new listings near 5865 Winterthur Dr NW</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
