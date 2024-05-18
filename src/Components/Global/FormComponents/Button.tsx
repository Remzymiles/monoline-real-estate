export const FormButton = ({name}:{name:string}) => {
  return (
    <div>
      <button
        type="submit"
        className=" px-5 mt-4 py-2 w-full text-center bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 text-white rounded-lg capitalize font-bold hover:bg-primaryColor-dark transition-colors duration-500"
      >
        {name}
      </button>
    </div>
  );
};
