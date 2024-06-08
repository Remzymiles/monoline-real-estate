export const WaveFormLoader = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div className="container">
      <div className={`bar ${extraStyle}`}></div>
      <div className={`bar ${extraStyle}`}></div>
      <div className={`bar ${extraStyle}`}></div>
      <div className={`bar ${extraStyle}`}></div>
    </div>
  );
};
