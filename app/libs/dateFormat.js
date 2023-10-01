const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = (timestamp) => {
  const datetime = new Date(timestamp * 1000);
  const dayOfWeek = days[datetime.getDay()];
  const dayOfMonth = datetime.getDate();

  const month = monthNames[datetime.getMonth()];

  return `${dayOfWeek} ${dayOfMonth} ${month}`;
};

export const formatDayOnly=(date)=>{
  const dateOnly = new Date(date)
  const currentDate =days[ new Date().getDay()];
  const day = days[dateOnly.getDay()]
  if(day === currentDate){
    return 'Today'
  }else{
    return day;
  }
};

export function formatTime(dt_txt) {
  const date = new Date(dt_txt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
export  const filterDailyForecast = (forecastList) => {
  const dailyForecast = {};

  forecastList.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }
    dailyForecast[date].push(item);
  });
  return dailyForecast;
};