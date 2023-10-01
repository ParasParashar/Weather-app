"use client";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import DayForecastCard from "./DayForecastCard";
import HourCard from "./HourCard";
import Topcard from "./Topcard";
import Loader from "./Loader";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { filterDailyForecast } from "../libs/dateFormat";

const MainCard = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [details, setDetails] = useState({});
  const [foreCast, setForecast] = useState([]);
  const [hourlyForecast, sethourlyForecast] = useState([]);
  const searchParams = useSearchParams();

  const city = searchParams.get("search") || "jaipur";

  //for main top card or for fetch the details of the current Day
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&APPID=${apiKey}`
      )
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setDetails({});
        } else {
          console.error("An error occurred:", error);
        }
      });
    // for fetching the request for forecast

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${apiKey}`
      )
      .then((res) => {
        setForecast(filterDailyForecast(res.data.list));
        const dailyForecast = filterDailyForecast(res.data.list);
        const hourlyData = dailyForecast[Object.keys(dailyForecast)[1]];
        sethourlyForecast(hourlyData);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          sethourlyForecast([]);
          setForecast([]);
        } else {
          console.error("An error occurred:", error);
        }
      });
  }, [city]);

  if (!details.main) {
    return (
    <Loader/>
    );
  }


  return (
    <div className="min-h-screen bgcolorDeatils px-2 flex items-center justify-center overflow-x-hidden md:rounded-lg">
      <div className=" flex flex-col items-center">
        <SearchBar/>
        {/* top */}
        <Topcard
          name={details.name}
          country={details.sys.country}
          icon={details.weather[0].icon}
          temp={details.main.temp}
          description={details.weather[0].main}
        />
        {/* mid */}
        <div className="flex flex-wrap items-center justify-center gap-10 mt-4">
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

export default MainCard;
