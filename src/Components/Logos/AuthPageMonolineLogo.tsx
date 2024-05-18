import MonolineLogoDarkMode from "/images/Monoline-Real-Estate-Logo-no-bg-dark-mode.png";
import Monoline_Logo from "/images/Monoline-Real-Estate-Logo-no-bg.png";

export const AuthPageMonolineLogo = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%]">
        <div className="h-[190px] w-[190px] big-screen-mobile-below:w-[120px] big-screen-mobile-below:h-[120px]">
        <img
            src={Monoline_Logo}
            alt="monoline logo"
            className="w-[100%] h-[100%] object-contain dark:w-0 dark:h-0 dark:hidden block"
          />
          <img
            src={MonolineLogoDarkMode}
            alt="Monoline logo dark mode"
            className="w-0 h-0 object-contain hidden dark:w-[100%] dark:h-[100%] dark:block"
          />
        </div>
      </div>
    </div>
  );
};
