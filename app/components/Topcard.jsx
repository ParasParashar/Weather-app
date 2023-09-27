import React from 'react'
// import {formet, date} from "../libs/dateFormat"
const Topcard = ({icon, country,name}) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let datetime = new Date(1695826800 * 1000);  
  
  let date = datetime.toDateString();
  // let day = days[datetime.getDay()];
  return (
    <div className="flex  items-center flex-col gap-1">
        <h1 className="text-3xl font-bold">{name} , {country}</h1>
        <h3 className="text-sm mt-1"> {date}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="loading"
          width={70}
          height={70}
          className=""
        />
        <h1 className="text-[55px] "> 36.62°</h1>
        <div className="rounded-2xl bgtop">
          <span className="mx-2">Haze ,</span>
          <span className="mx-2">Few Clouds</span>
        </div>
      </div>
  )
}

export default Topcard