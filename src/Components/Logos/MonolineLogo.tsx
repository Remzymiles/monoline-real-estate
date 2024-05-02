import Monoline_Logo from "/images/Monoline-Real-Estate-Logo-no-bg.png";

export const MonolineLogo = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%]">
        <div className="h-[90px] w-[90px]">
          <img
            src={Monoline_Logo}
            alt="monoline logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
