import { useOrderHistoryStore } from "../../../base/store/useOrderHistoryStore";

export const OrderHistory = () => {
  const { orderHistoryProperties } = useOrderHistoryStore((state) => ({
    orderHistoryProperties: state.orderHistoryProperties,
  }));

  return (
    <div className="grid grid-cols-2 laptop:gap-10 tablet-to-laptop:gap-x-3 tablet:gap-x-4 tablet:gap-y-8 mobile:grid-cols-1 mobile:gap-y-5">
      {/*  */}
      {orderHistoryProperties.map((orderHistoryProperty) => (
        <div
          className="tablet-to-laptop:w-[100%] tablet-to-laptop:h-[300px] tablet-below:h-auto bg-primaryColor-cream tablet-above:border-l-4 border-primaryColor-light tablet-below:border-t-4 px-3 pb-3"
          key={orderHistoryProperty.property_id}
        >
          <div className="flex justify-between">
            <p className="text-xs py-1 text-gray-500 capitalize font-bold">
              purchased on: {orderHistoryProperty.orderDate}
            </p>
            <p className="text-xs py-1 text-gray-500 capitalize font-bold">
              PID: mr{Math.floor(Math.random() * 10000)}
            </p>
          </div>
          <div className="flex items-end gap-5 big-screen-laptop:gap-9 tablet-to-laptop:gap-4 tablet-below:flex-col tablet-below:gap-2 mobile:w-full">
            <div className="h-[280px] w-[280px] tablet-to-laptop:h-[240px] tablet-below:w-full tablet:h-[250px]">
              <img
                src={orderHistoryProperty.photos[0]}
                alt="image"
                className="h-[100%] w-[100%] rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col laptop:gap-8 laptop:h-[280px] tablet-to-laptop:h-[240px] tablet-to-laptop:gap-4 break-all tablet-below:gap-2 tablet-below:w-full">
              <h1 className="text-lg font-bold">
                {orderHistoryProperty.location.address}
              </h1>
              <p className="text-lg font-bold">
                ${orderHistoryProperty.price.toLocaleString()}
              </p>
              <button className="capitalize py-1.5 px-1.5 bg-primaryColor-light transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold clamp">
                view property details
              </button>
            </div>
          </div>
        </div>
      ))}
      {/*  */}
    </div>
  );
};

// import Image from "/images/10994-N-123rd-St-4.webp";

// export const OrderHistory = () => {
//   const currentDate = new Date();

//   const day = currentDate.getDate();
//   const month = currentDate.toLocaleString('default', { month: 'long' });
//   const year = currentDate.getFullYear();

//   return (
//     <div className="grid grid-cols-2 laptop:gap-10 tablet-to-laptop:gap-x-3 tablet:gap-x-4 tablet:gap-y-8 mobile:grid-cols-1 mobile:gap-y-5">

//       {/*  */}
//       <div className="tablet-to-laptop:w-[100%] tablet-to-laptop:h-[300px] tablet-below:h-auto bg-primaryColor-cream tablet-above:border-l-4 border-primaryColor-light tablet-below:border-t-4 px-3 pb-3">
//         <div className="flex justify-between">
//         <p className="text-xs py-1 text-gray-500 capitalize font-bold">purchased on: {day} {month}, {year} </p>
//         <p className="text-xs py-1 text-gray-500 capitalize font-bold">PID: mr{Math.floor(Math.random()*10000)}</p>
//         </div>
//         <div className="flex items-end gap-5 big-screen-laptop:gap-9 tablet-to-laptop:gap-4 tablet-below:flex-col tablet-below:gap-2 mobile:w-full">
//           <div className="h-[280px] w-[280px] tablet-to-laptop:h-[240px] tablet-below:w-full tablet:h-[250px]">
//             <img
//               src={Image}
//               alt="image"
//               className="h-[100%] w-[100%] rounded-lg object-cover"
//             />
//           </div>
//           <div className="flex flex-col laptop:gap-8 laptop:h-[280px] tablet-to-laptop:h-[240px] tablet-to-laptop:gap-4 break-all tablet-below:gap-2 tablet-below:w-full">
//             <h1 className="text-lg font-bold">9821 Milton Albert Way</h1>
//             <p className="text-lg font-bold">$1,000,000,00</p>
//             <button className="capitalize py-1.5 px-1.5 bg-primaryColor-light transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold clamp">
//               view property details
//             </button>
//           </div>
//         </div>
//       </div>
//       {/*  */}
//     </div>
//   );
// };
