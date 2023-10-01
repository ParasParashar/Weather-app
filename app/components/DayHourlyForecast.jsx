import { formatDayOnly, formatTime } from "../libs/dateFormat";

const DayHourlyForecast = ({ time, icon ,maxTemp,minTemp }) => {
  return (
    <div className="m-1 rounded-lg">
      <div className="group flex  p-1 items-center justify-between bg-transparent rounded-md shadow-2xl">
        <div className="flex p-1 items-center gap-1">
        <p className="text-sm font-semibold">{formatDayOnly(time)}</p>
        <p className="text-sm ">{formatTime(time)}</p>
        </div>
        <img
          className="w-20 h-20 object-contain"
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="Icon"
        />
        <div className="flex flex-wrap">
          <span className="text-md font-semibold">{maxTemp}°/</span>
          <span className="text-md font-semibold">{minTemp}°</span>
        </div>
      </div>
    </div>
  );
};

export default DayHourlyForecast;
