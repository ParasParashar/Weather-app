import React from 'react'
import { formatTime } from '../libs/dateFormat';

const HourCard = ({temp,icon,time}) => {
  const properTime = formatTime(time);
 return(
    <div className="flex flex-col items-center gap-1">
    <span>{properTime}</span>
    <img
      src={`http://openweathermap.org/img/wn/${icon}.png`}
      alt=""
      width={30}
      height={30}
    />
    <span>{temp}°</span>
  </div>
 )
}

export default HourCard