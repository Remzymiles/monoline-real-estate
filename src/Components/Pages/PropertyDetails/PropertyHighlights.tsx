import { IProperty } from "../../../base/interface/IProperty";
import { CalculatorIcon } from "../../Icons/CalculatorIcon";
import { CalenderIcon } from "../../Icons/CalenderIcon";
import { DeckIcon } from "../../Icons/DeckIcon";
import { ParkingIcon } from "../../Icons/ParkingIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { TemperatureIcon } from "../../Icons/TemperatureIcon";

export const PropertyHighlights = ({selectedProperty}:{selectedProperty:IProperty|undefined}) => {
    const pricePerSquareFoot =
    selectedProperty &&
    selectedProperty.details &&
    selectedProperty.details.sqft
      ? selectedProperty.price / selectedProperty.details.sqft
      : 0;
  return (
    <>
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
              ${Math.round(Math.random()*1000)}/Monthly
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
              ${pricePerSquareFoot.toFixed()}
            </span>
          </div>
          {/*  */}
          <div className="flex gap-x-16 mb-3">
            <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
              <CalenderIcon extraStyle="text-gray-500" /> Listed
            </span>
            <span className="capitalize font-extrabold text-sm mobile:text-xs">
              {" "}
              {Math.round(Math.random()*20)} days ago
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
