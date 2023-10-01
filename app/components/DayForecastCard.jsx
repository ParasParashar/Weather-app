"use client";
import {ArrowRight } from 'lucide-react'
import Sidebar from "../components/Sidebar";
import { formatDayOnly } from "../libs/dateFormat";
import { useEffect, useState } from "react";
const DayForecastCard = ({ data }) => {
  if (!data) {
    return null;
  }
  const dayName = formatDayOnly(data[0].dt_txt.split(" ")[0]);
  const iconUrl = `http://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`;
  const maxTemp = Math.round(data[0].main.temp_max);
  const minTemp = Math.round(data[0].main.temp_min);
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="relative group flex items-center flex-col max-sm:w-full">
      <div className="flex p-1 min-w-[300px]  max-w-[450px] justify-between gap-5">
        <p className="text-md font-semibold text-left">{dayName}</p>
        <img src={iconUrl} alt="Logo" width={30} height={30} className='object-contain w-12 h-12' />
        <div>
          <span className="text-md font-semibold">{maxTemp}°</span>/
          <span className="text-md font-semibold">{minTemp}°</span>
        </div>
        <button onClick={toggle} className='hover:text-slate-700 hover:bg-slate-100/20 rounded-lg text-blue' >
        <ArrowRight className='h-10 w-10'/>
        </button>
      </div>
      {show && (
        <div className=" flex w-full mt-1">
          <Sidebar data={data}/>
        </div>
      )}
    </div>
  );
};

export default DayForecastCard;
