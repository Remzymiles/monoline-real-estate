import  Monoline_Logo from "/images/Monoline-Real-Estate-Logo-no-bg.png";
import MonolineLogoDarkMode from "/images/Monoline-Real-Estate-Logo-no-bg-dark-mode.png"

export const MonolineLogo = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%]">
        <div className="h-[100px] w-[100px] big-screen-mobile-below:w-[70px] big-screen-mobile-below:h-[70px]">
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
