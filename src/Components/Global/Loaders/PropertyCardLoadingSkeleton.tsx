export const PropertyCardLoadingSkeleton = () => {
  return (
    <div className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card relative animate-pulse">
      <div className="w-full h-[270px] bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
      <div className="mt-1 mx-1">
        <div className="flex justify-between">
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-12 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="mt-1 flex gap-3">
          <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="w-16 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="w-40 h-5 bg-gray-300 dark:bg-gray-700 rounded mt-1"></div>
        <div className="w-24 h-5 bg-gray-300 dark:bg-gray-700 rounded mt-1"></div>
      </div>
      <style>
        
      </style>
    </div>
  );
};
