import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useHandleClearPropertyHistoryWarningModal } from "../../../base/hooks/useHandleClearPropertyHistoryWarningModal";
import { useOrderHistoryStore } from "../../../base/store/useOrderHistoryStore";
import { IProperty } from "../../../base/interface/IProperty";

export const PropertyOrderHistory = () => {
  //
  const {
    isClearPropertyHistoryWarningVisible,
    handleShowClearPropertyHistoryWarning,
    handleCloseClearPropertyHistoryWarning,
  } = useHandleClearPropertyHistoryWarningModal();
  const { orderHistoryProperties, clearOrderHistoryProperties } =
    useOrderHistoryStore((state) => ({
      orderHistoryProperties: state.orderHistoryProperties,
      clearOrderHistoryProperties: state.clearOrderHistoryProperties,
    }));
  //

  return (
    <div
      className={`flex items-center justify-center ${
        orderHistoryProperties.length <= 0 && "min-h-[50vh]"
      }`}
    >
      {orderHistoryProperties.length > 0 ? (
        <div className="max-w-[1100px] m-auto w-full bg-primaryColor-lightCream dark:bg-secondaryColor-light/70 shadow-xl rounded-md px-4 py-2 pb-3">
          <div
            className={`absolute bg-black/50 w-[100%] h-[1000vh] z-50 top-0 left-0 flex justify-center items-center ${
              isClearPropertyHistoryWarningVisible ? "block" : "hidden"
            }`}
          >
            <div className="max-w-[600px] h-fit mobile:mx-5 bg-white dark:bg-secondaryColor-dark dark:border dark:border-gray-300 px-4 py-3 rounded-lg fixed top-[35%]">
              <p className="font-bold mb-2">
                Are you sure you want to clear your order history? This action
                will permanently remove all records of your previous purchases.
                You won't be able to view your order history again once it's
                cleared.
              </p>
              <div className="flex justify-between">
                <button
                  className="capitalize py-1 px-2 text-sm w-[40%] bg-red-500 transition-colors duration-300 hover:bg-red-700 text-white rounded font-bold"
                  onClick={() => {
                    clearOrderHistoryProperties();
                    toast.success("Order History Has Been Cleared");
                  }}
                >
                  clear history
                </button>
                <button
                  className="capitalize py-1 px-2 text-sm w-[40%] bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold"
                  onClick={handleCloseClearPropertyHistoryWarning}
                >
                  don't clear
                </button>
              </div>
            </div>
          </div>
          {orderHistoryProperties.map((orderHistoryProperty:IProperty) => (
            <div key={orderHistoryProperty.property_id}>
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-xs font-bold text-gray-500">
                    Purchased On: {orderHistoryProperty.orderDate}
                  </p>
                  <p className="text-xs py-1 text-gray-500 capitalize font-bold">
                    PID: MR{Math.floor(Math.random() * 10000)}
                  </p>
                </div>
                <div className="flex items-center gap-x-4 big-screen-mobile-below:gap-x-3">
                  <div className="w-[190px] between-mobile-and-tablet:w-[270px] md:w-[250px] h-[200px] mobile:h-[170px] ">
                    <img
                      src={orderHistoryProperty.propertyPhotos[0].url[4]}
                      alt="image"
                      className="w-[100%] h-[100%] rounded-md object-cover"
                    />
                  </div>
                  <div className="flex md:w-[550px] lg:w-[700px] flex-col md:flex-row justify-between gap-y-5">
                    <p className="big-screen-mobile-below:break-all tablet-below:text-sm lg:text-base font-bold">
                      {orderHistoryProperty.propertyLocation.address}
                    </p>
                    <p className="big-screen-mobile-below:break-all tablet-below:text-sm lg:text-base font-extrabold">
                      ${orderHistoryProperty.price.toLocaleString()}
                    </p>
                    <Link
                      to={`/property-details/address=${orderHistoryProperty.propertyLocation.address}&city=${orderHistoryProperty.propertyLocation.city}&state=${orderHistoryProperty.propertyLocation.state}&country=${orderHistoryProperty.propertyLocation.country}&?id=${orderHistoryProperty.property_id}`}
                      className="capitalize text-center py-1 px-1 sm:px-2 tablet-below:py-0.5 text-sm bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold"
                    >
                      view property
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-3 mb-5 h-[2px] bg-black" />
            </div>
          ))}
          {/*  */}
          <div className="text-end">
            <button
              className="capitalize py-1 px-2 text-sm bg-red-500 transition-colors duration-300 hover:bg-red-700 text-white rounded font-bold"
              onClick={handleShowClearPropertyHistoryWarning}
            >
              clear history
            </button>
          </div>
        </div>
      ) : (
        <p className="flex justify-center items-center capitalize font-extrabold text-lg">
          history is empty!
        </p>
      )}
    </div>
  );
};
