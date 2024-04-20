import { useSearchParams } from "react-router-dom";
import properties from "../../../base/dummyData/properties.json";

export const PropertyDetailsIndex = () => {
  const [query] = useSearchParams();
  const propertyId = query.get("id");
  //
  const selectedProperty = properties.find((property) => {
    return property.property_id == Number(propertyId)
  });
  console.log(selectedProperty);
  

  return <div>{propertyId}</div>;
};
