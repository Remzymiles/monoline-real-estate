import { useCartPropertyIdsStore } from "../store/useCartPropertyIdsStore";
import { useCheckoutStore } from "../store/useCheckoutStore";
import { useOrderHistoryStore } from "../store/useOrderHistoryStore";
import { useProperties } from "../utils/fetchProperties";

export const useHandleOrderHistoryDateAndTime = () => {
  //
  const { updateOrderHistoryProperties } = useOrderHistoryStore((state) => ({
    updateOrderHistoryProperties: state.updateOrderHistoryProperties,
  }));
  //
  const { clearCartPropertyIds } = useCartPropertyIdsStore((state) => ({
    clearCartPropertyIds: state.clearCartPropertyIds,
  }));
  //
  const { isPropertyFromCart } = useCheckoutStore((state) => ({
    isPropertyFromCart: state.isPropertyFromCart,
  }));
  //
  const { checkoutIds } = useCheckoutStore((state) => ({
    checkoutIds: state.checkoutIds,
  }));

  const { data: properties } = useProperties();
  //
  const handleOrderHistoryAndClearCartProperties = () => {
    if (!properties) {
      return [];
    }
    // 
    const checkoutProperties = properties.filter((property) => {
      return checkoutIds.includes(property.property_id);
    });
    // 
    //handle date for order history properties
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const time = `${hours}:${minutes} ${meridiem}`;

    checkoutProperties.forEach((property) => {
      updateOrderHistoryProperties({
        ...property,
        orderDate: `${day} - ${month} - ${year} ${time}`,
      });
    });
    isPropertyFromCart === true && clearCartPropertyIds();
  };
  return { handleOrderHistoryAndClearCartProperties };
};
