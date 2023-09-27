import React from 'react'
import {formatDate} from "../libs/dateFormat"
const Topcard = ({icon, country,name,description,temp}) => {
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
        <h3 className="text-md mt-1 "> {formatDate(new Date()/1000)}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="loading"
          width={100}
          height={100}
          className=""
        />
        <h1 className="text-[55px]"> {temp}°</h1>
        <div className="rounded-2xl bgtop">
          <span className="mx-2">{description}</span>
        </div>
      </div>
  )
}

export default Topcard