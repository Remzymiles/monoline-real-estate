import properties from "../../../base/dummyData/properties.json";
import { IProperty } from "../../../base/interface/IProperty";
import { useOrderHistoryStore } from "../../../base/store/useOrderHistoryStore";

export const PropertyOrderHistory = () => {
  //
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const { orderHistoryPropertyIds } = useOrderHistoryStore((state) => ({
    orderHistoryPropertyIds: state.orderHistoryPropertyIds,
  }));
  //
  const orderHistoryProperties: IProperty[] = [];

  orderHistoryPropertyIds.forEach((id) => {
    const property = properties.find((property) => property.property_id === id);
    if (property) {
      orderHistoryProperties.push(property);
    }
  });
  //
  return (
    <div className="max-w-[1100px] m-auto bg-primaryColor-lightCream px-4 py-2 pb-3">
      {orderHistoryProperties.map((orderHistoryProperty) => (
        <div key={orderHistoryProperty.property_id}>
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-xs font-bold text-gray-500">
                Purchased On: {day} {month}, {year}
              </p>
              <p className="text-xs py-1 text-gray-500 capitalize font-bold">
                PID: mr{Math.floor(Math.random() * 10000)}
              </p>
            </div>
            <div className="flex items-center gap-x-4 big-screen-mobile-below:gap-x-3">
              <div className="w-[220px] sm:w-[300px] md:w-[250px] h-[200px] ">
                <img
                  src={orderHistoryProperty.photos[0]}
                  alt="image"
                  className="w-[100%] h-[100%] rounded-md object-cover"
                />
              </div>
              <div className="flex md:w-[550px] lg:w-[700px] flex-col md:flex-row justify-between gap-y-5">
                <p className="big-screen-mobile-below:break-all big-screen-mobile-below:text-sm lg:text-lg font-bold">
                  {orderHistoryProperty.location.address}
                </p>
                <p className="big-screen-mobile-below:break-all big-screen-mobile-below:text-sm lg:text-lg font-bold">
                  ${orderHistoryProperty.price.toLocaleString()}
                </p>
                <button className="capitalize py-1 px-1 sm:px-2 sm:py-1.5 text-sm bg-primaryColor-light transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold">
                  view property
                </button>
              </div>
            </div>
          </div>
          <hr className="my-3 mb-5 h-[2px] bg-black" />
        </div>
      ))}
      {/*  */}
      <div className="text-end">
        <button className="capitalize py-1 px-2 text-sm bg-primaryColor-light transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold">
          clear history
        </button>
      </div>
    </div>
  );
};
