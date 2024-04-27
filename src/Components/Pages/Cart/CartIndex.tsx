import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import Properties from "../../../base/dummyData/properties.json"

export const CartIndex = () => {
  //
  const {propertyIds} = useCartPropertyIdsStore((state) => ({
    propertyIds: state.propertyIds,
    clearPropertyIds: state.clearPropertyIds
  }));
  // 
  const cartProperties = Properties.filter((property)=>{
    return propertyIds.includes(property.property_id)
  })
  console.log(cartProperties);
  
  //
  return (
    <div className="flex justify-center flex-wrap gap-5 min-h-[50vh] pt-2 mobile:mx-4 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-16">
      CartIndex
    </div>
  );
};
