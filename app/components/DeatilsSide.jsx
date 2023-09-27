"use client";
import { useEffect, useState } from "react";
import DayForecastCard from "./DayForecastCard";
import HourCard from "./HourCard";
import Topcard from "./Topcard";
import axios from "axios";
const DeatilsSide = () => {
  const [details, SetDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast/?q=jaipur&units=metric&APPID=73009497cbc082d8b80a2e8dc748fd55"
      )
      .then((res) => {
        SetDetails(res.data);
        console.log(res.data);
      });
  }, []);
  // console.log(details.country)
  return (
    <div className="h-screen w-[30vw] max-md:w-screen bgcolorDeatils max-md:h-full p-2 ">
      <div className="text-white flex  items-center flex-col  ">
        {/* top */}
        <Topcard 
        name={details.city.name}
         country={details.city.country} 
         icon={details.list.weather.icon}
          />
        {/* mid  */}
        <div className="flex justify-center gap-10 mt-4">
          <HourCard />
          <HourCard />
          <HourCard />
          <HourCard />
        </div>
        {/* bottom */}
        <div className="flex flex-col items-center gap-5 mt-6">
          <DayForecastCard />
          <DayForecastCard />
          <DayForecastCard />
          <DayForecastCard />
          <DayForecastCard />
        </div>
      </div>
    </div>
  );
};
export default DeatilsSide;
