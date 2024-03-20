export const FormButton = ({name}:{name:string}) => {
  return (
    <div>
      <button
        type="submit"
        className=" px-5 mt-4 py-4 w-full text-center bg-primaryColor-light text-white rounded-xl capitalize font-bold hover:bg-primaryColor-dark transition-colors duration-500"
      >
        {name}
      </button>
    </div>
  );
};
