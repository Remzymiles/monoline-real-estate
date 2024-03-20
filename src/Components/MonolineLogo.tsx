import Monoline_Logo from "../assets/images/Monoline-Real-Estate-Logo-no-bg.png";

export const MonolineLogo = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="w-[200px] h-[200px]">
        <img
          src={Monoline_Logo}
          alt="monoline logo"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
};
