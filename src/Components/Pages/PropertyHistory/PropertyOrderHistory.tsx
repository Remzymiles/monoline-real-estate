import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useClearOrderHistory } from "../../../base/hooks/propertyHistoryPage/useClearOrderHistory";
import { useFetchOrderHistoryProperties } from "../../../base/hooks/propertyHistoryPage/useFetchOrderHistoryProperties";
import { useFormatDateAndTime } from "../../../base/hooks/propertyHistoryPage/useFormatDateAndTime";
import { useHandleClearPropertyHistoryWarningModal } from "../../../base/hooks/propertyHistoryPage/useHandleClearPropertyHistoryWarningModal";
import { IOrderHistoryProperty } from "../../../base/interface/propertyHistoryPage/IOrderHistoryProperty";
import { useOrderHistoryStore } from "../../../base/store/propertyHistoryPage/useOrderHistoryStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { ClearPropertyHistoryWarningModal } from "./ClearPropertyHistoryWarningModal";

export const PropertyOrderHistory = () => {
  const { data: orderHistoryProperties, isLoading } =
    useFetchOrderHistoryProperties();
  const { mutate: clearOrderHistory } = useClearOrderHistory();

  const {
    isClearPropertyHistoryWarningVisible,
    handleShowClearPropertyHistoryWarning,
    handleCloseClearPropertyHistoryWarning,
  } = useHandleClearPropertyHistoryWarningModal();

  const { clearOrderHistoryProperties } = useOrderHistoryStore((state) => ({
    clearOrderHistoryProperties: state.clearOrderHistoryProperties,
  }));

  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [orderHistoryProperties]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <WaveFormLoader extraStyle="bg-black dark:bg-white" />
      </div>
    );
  }

  if (!orderHistoryProperties || orderHistoryProperties.length <= 0) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="capitalize font-extrabold text-lg">History is empty!</p>
      </div>
    );
  }

  const handleClearOrderHistory = () => {
    clearOrderHistory();
    clearOrderHistoryProperties();
    toast.success("Order History Has Been Cleared");
  };
  //
  const { formatDateTime } = useFormatDateAndTime();
  //
  const purchaseId = Math.floor(Math.random() * 10000);

  //
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="max-w-[1100px] m-auto w-full bg-primaryColor-lightCream dark:bg-secondaryColor-light/70 shadow-xl rounded-md px-4 py-2 pb-3">
        {/*  */}
        <ClearPropertyHistoryWarningModal
          handleClearOrderHistory={handleClearOrderHistory}
          handleCloseClearPropertyHistoryWarning={
            handleCloseClearPropertyHistoryWarning
          }
          isClearPropertyHistoryWarningVisible={
            isClearPropertyHistoryWarningVisible
          }
        />
        {/*  */}
        {orderHistoryProperties.map(
          (orderHistoryProperty: IOrderHistoryProperty) => (
            <div key={orderHistoryProperty.property_id}>
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-xs font-bold text-gray-500">
                    Purchased On:{" "}
                    {formatDateTime(orderHistoryProperty.order_date)}
                  </p>
                  <p className="text-xs py-1 text-gray-500 capitalize font-bold">
                    PID: MR{purchaseId}
                  </p>
                </div>
                <div className="flex items-center gap-x-4 big-screen-mobile-below:gap-x-3">
                  <div className="w-[190px] between-mobile-and-tablet:w-[270px] md:w-[250px] h-[200px] mobile:h-[170px] ">
                    <img
                      src={orderHistoryProperty.property_photo_url}
                      alt="image"
                      className="w-[100%] h-[100%] rounded-md object-cover"
                    />
                  </div>
                  <div className="flex md:w-[550px] lg:w-[700px] flex-col md:flex-row justify-between gap-y-5">
                    <p className="big-screen-mobile-below:break-all tablet-below:text-sm lg:text-base font-bold">
                      {orderHistoryProperty.address}
                    </p>
                    <p className="big-screen-mobile-below:break-all tablet-below:text-sm lg:text-base font-extrabold">
                      ${orderHistoryProperty.price.toLocaleString()}
                    </p>
                    <Link
                      to={`/property-details/address=${orderHistoryProperty.address}&city=${orderHistoryProperty.city}&state=${orderHistoryProperty.state}&country=${orderHistoryProperty.country}&?id=${orderHistoryProperty.property_id}`}
                      className="capitalize text-center py-1 px-1 sm:px-2 tablet-below:py-0.5 text-sm bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold"
                    >
                      View Property
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="my-3 mb-5 h-[2px] bg-black" />
            </div>
          )
        )}
        <div className="text-end">
          <button
            className="capitalize py-1 px-2 text-sm bg-red-500 transition-colors duration-300 hover:bg-red-700 text-white rounded font-bold"
            onClick={handleShowClearPropertyHistoryWarning}
          >
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
};
