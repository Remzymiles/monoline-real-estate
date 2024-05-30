export const PropertyPicturesLoadingSkeleton = () => {
  return (
    <div className="flex justify-center items-center gap-3 tablet-below:gap-0 animate-pulse h-fit">
      <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full bg-gray-300 dark:bg-gray-700 rounded-l-lg tablet-below:rounded-md">
        <p className="uppercase bg-gray-300 dark:bg-gray-700 px-[5px] absolute top-2 left-3 rounded-sm font-bold text-gray-300 text-[10px]">
        </p>
        <div className="capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm bg-gray-300 dark:bg-gray-700 text-gray-300 tablet-above:hidden">
          <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="absolute bottom-2 right-2 bg-gray-300 dark:bg-gray-700 text-gray-300 text-sm flex gap-2 p-2 capitalize rounded-sm tablet-above:hidden mobile:text-xs">
          <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-[300px] h-[243px] relative tablet-below:hidden bg-gray-300 dark:bg-gray-700 rounded-tr-lg">
          <div className="capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm bg-gray-300 dark:bg-gray-700 text-gray-300">
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
        <div className="w-[300px] h-[243px] relative tablet-below:hidden bg-gray-300 dark:bg-gray-700 rounded-br-lg">
          <div className="absolute bottom-2 right-2 bg-gray-300 dark:bg-gray-700 text-gray-300 text-sm flex gap-2 p-2 capitalize rounded-sm">
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
