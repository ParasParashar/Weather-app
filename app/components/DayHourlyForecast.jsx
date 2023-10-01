import { formatDayOnly, formatTime } from "../libs/dateFormat";

const DayHourlyForecast = ({ time, icon ,temp ,description}) => {
  return (
    <div className="m-1 rounded-lg">
      <div className="group flex  p-1 items-center justify-between bg-transparent rounded-xl shadow-xl">
        <div className="flex p-1 items-center gap-1">
        <p className="text-sm font-semibold">{formatDayOnly(time)}</p>
        <p className="text-sm ">{formatTime(time)}</p>
        </div>
        <div className="flex flex-col items-center">
        <img
          className="w-20 h-20 object-contain"
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="Icon"
        />
          <span className="text-base opacity-70">{description}</span>
        </div>
        
          <span className="text-md font-semibold">{temp}°</span>
      </div>
    </div>
  );
};

export default DayHourlyForecast;
