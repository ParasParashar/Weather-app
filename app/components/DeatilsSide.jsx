"use client";
import { useEffect, useState } from "react";
import DayForecastCard from "./DayForecastCard";
import HourCard from "./HourCard";
import Topcard from "./Topcard";
import axios from "axios";

const DeatilsSide = () => {
  const [details, setDetails] = useState({});
  const [foreCast, setForecast] = useState([]);
  const [hourlyForecast, sethourlyForecast] = useState([]);
  //for main top card or for fetch the details of current Day
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather/?q=jaipur&units=metric&APPID=73009497cbc082d8b80a2e8dc748fd55"
      )
      .then((res) => {
        setDetails(res.data);
      });
    // for fetch the request for forecast

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast/?q=jaipur&units=metric&APPID=73009497cbc082d8b80a2e8dc748fd55"
      )
      .then((res) => {
        setForecast(filterDailyForecast(res.data.list));
        const dailyForecast = filterDailyForecast(res.data.list);
        const hourlyData = dailyForecast[Object.keys(dailyForecast)[1]];
        console.log(hourlyData, "hourlydata");
        sethourlyForecast(hourlyData);
      });
  }, []);

  const filterDailyForecast = (forecastList) => {
    const dailyForecast = {};

    forecastList.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      const time = item.dt_txt.split(" ")[1];

      if (!dailyForecast[date]) {
        dailyForecast[date] = [];
      }

      // if (time === '21:00:00') {
      //   dailyForecast[date].push(item);
      // }
      dailyForecast[date].push(item);
    });
    return dailyForecast;
  };

  if (!details.main) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen max-md:w-screen bgcolorDeatils max-md:h-full p-2">
      <div className="text-white flex items-center flex-col">
        {/* top */}
        <Topcard
          name={details.name}
          country={details.sys.country}
          icon={details.weather[0].icon}
          temp={details.main.temp}
          description={details.weather[0].main}
        />
        {/* mid */}
        <div className="flex justify-center gap-10 mt-4">
          {hourlyForecast.map((hourData, index) => (
            <HourCard
              key={index}
              temp={hourData.main.temp}
              icon={hourData.weather[0].icon}
              time={hourData.dt_txt}
            />
          ))}
        </div>
        {/* bottom */}
        <div className="flex flex-col items-center gap-5 mt-6">
          {Object.keys(foreCast).map((date) => (
            <DayForecastCard key={date} data={foreCast[date]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeatilsSide;
