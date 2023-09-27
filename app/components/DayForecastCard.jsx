import { formatDayOnly } from "../libs/dateFormat";

const DayForecastCard = ({ data }) => {

  if (!data) {
    return null; 
  }

  const dayName = formatDayOnly(data[0].dt_txt.split(' ')[0]);
  const iconUrl = `http://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`;
  const maxTemp = Math.round(data[0].main.temp_max);
  const minTemp = Math.round(data[0].main.temp_min);


  return (
    <div className="flex shadow-lg p-1  justify-between gap-10">
      <span className="text-[20px] font-semibold">{dayName}</span>
      <img src={iconUrl} alt="Logo" width={30} height={30} />
      <div>
        <span className="text-[20px] font-semibold">{maxTemp}°</span> /{' '}
        <span className="text-[20px] font-semibold">{minTemp}°</span>
      </div>
    </div>
  );
};

export default DayForecastCard;
