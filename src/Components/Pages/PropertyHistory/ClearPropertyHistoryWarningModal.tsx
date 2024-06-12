export const ClearPropertyHistoryWarningModal = ({
  isClearPropertyHistoryWarningVisible,
  handleClearOrderHistory,
  handleCloseClearPropertyHistoryWarning,
}: {
  isClearPropertyHistoryWarningVisible: boolean;
  handleClearOrderHistory: () => void;
  handleCloseClearPropertyHistoryWarning: () => void;
}) => {
    // 
  return (
    <div
      className={`absolute bg-black/50 w-[100%] h-[1000vh] z-50 top-0 left-0 flex justify-center items-center ${
        isClearPropertyHistoryWarningVisible ? "block" : "hidden"
      }`}
    >
      <div className="max-w-[600px] h-fit mobile:mx-5 bg-white dark:bg-secondaryColor-dark dark:border dark:border-gray-300 px-4 py-3 rounded-lg fixed top-[35%]">
        <p className="font-bold mb-2">
          Are you sure you want to clear your order history? This action will
          permanently remove all records of your previous purchases. You won't
          be able to view your order history again once it's cleared.
        </p>
        <div className="flex justify-between">
          <button
            className="capitalize py-1 px-2 text-sm w-[40%] bg-red-500 transition-colors duration-300 hover:bg-red-700 text-white rounded font-bold"
            onClick={handleClearOrderHistory}
          >
            Clear History
          </button>
          <button
            className="capitalize py-1 px-2 text-sm w-[40%] bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-colors duration-300 hover:bg-primaryColor-dark text-white rounded font-bold"
            onClick={handleCloseClearPropertyHistoryWarning}
          >
            Don't Clear
          </button>
        </div>
      </div>
    </div>
  );
};
