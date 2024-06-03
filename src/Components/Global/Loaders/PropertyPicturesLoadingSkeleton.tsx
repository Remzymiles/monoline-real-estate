export const PropertyPicturesLoadingSkeleton = () => {
  return (
    <div className="pt-3 mobile:mx-4 tablet:mx-8 big-screen-mobile-below:mt-[150px] tablet-above:mt-[180px] mt-[180px] laptop:mt-[120px] tablet-above:mx-8 laptop:mx-16">
      <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
        <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full">
          <div className="w-[100%] h-[100%] rounded-l-lg tablet-below:rounded-md big-screen-mobile-below:object-cover bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <div className="w-[100%] h-[100%] rounded-tr-lg bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <div className="w-[100%] h-[100%] rounded-br-lg bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex tablet-below:flex-col justify-center tablet-above:gap-x-16 mt-4">
        <div className="flex tablet-below:justify-between big-screen-mobile-below:flex-col tablet-above:gap-x-56 big-screen-laptop:gap-x-96 tablet-below:mb-5">
          <div className="big-screen-mobile-below:mb-3">
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-8 w-56 rounded-md mb-1"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-40 rounded-md mb-3"></div>
            <div className="mt-1 flex gap-3">
              <div className="animate-pulse flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="font-extrabold w-11 h-4 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-11 h-4 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-11 h-4 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-8 w-28 rounded-md mb-1"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-32 rounded-md"></div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="big-screen-laptop:max-w-[1000px] mt-5 m-auto">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-6 w-1/4 mb-3 rounded-md"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-48 w-full mb-6 rounded-md"></div>
      </div>
    </div>
  );
};
