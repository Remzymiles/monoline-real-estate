import Monoline_Logo from "/images/Monoline-Real-Estate-Logo-no-bg.png";

export const AuthPageMonolineLogo = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%]">
        <div className="h-[190px] w-[190px]">
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
