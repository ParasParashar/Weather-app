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
  const day = days[dateOnly.getDay()]
  return day;
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

 // const filterDailyForecast = (forecastList) => {
  //   const dailyForecast = forecastList.reduce((acc, item) => {
  //     const date = item.dt_txt.split(' ')[0];
  
  //     // Check if the date is already in the accumulator
  //     const existingDay = acc.find((day) => day.date === date);
  
  //     if (existingDay) {
  //       existingDay.forecast.push(item);
  //     } else {
  //       acc.push({
  //         date,
  //         forecast: [item],
  //       });
  //     }
  
  //     return acc;
  //   }, []);
  
  //   return dailyForecast;
  // };