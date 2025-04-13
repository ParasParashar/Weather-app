import DayForecastCard from "./DayForecastCard";
import HourCard from "./HourCard";
import TopCard from "./Topcard";
import { filterDailyForecast } from "../libs/dateFormat";
import SearchBar from "./SearchBar";
import { Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

async function getWeatherData(city) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&APPID=${apiKey}`
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${apiKey}`
      ),
    ]);

    if (!currentRes.ok || !forecastRes.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    const dailyForecast = filterDailyForecast(forecastData.list);
    const hourlyForecast = dailyForecast[Object.keys(dailyForecast)[1]] || [];

    return {
      current: currentData,
      daily: dailyForecast,
      hourly: hourlyForecast,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { current: null, daily: null, hourly: null };
  }
}
export default async function MainCard({ search }) {
  const city = search || "jaipur";
  const { current, daily, hourly } = await getWeatherData(city);

  if (!current || !daily || !hourly) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Weather Data Not Available</h2>
          <p className="text-muted-foreground">
            Could not fetch weather data for {city}. Please try another
            location.
          </p>
          <SearchBar defaultValue={city} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <SearchBar defaultValue={city} />

          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <TopCard
              name={current.name}
              country={current.sys?.country}
              icon={current.weather[0].icon}
              temp={current.main.temp}
              description={current.weather[0].main}
            />
          </div>

          {/* Weather Stats */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Weather Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Thermometer className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Feels Like</p>
                  <p className="font-medium">
                    {Math.round(current.main.feels_like)}°C
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Humidity</p>
                  <p className="font-medium">{current.main.humidity}%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Pressure</p>
                  <p className="font-medium">{current.main.pressure} hPa</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wind className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Wind</p>
                  <p className="font-medium">{current.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hourly Forecast */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Hourly Forecast</h3>
            <div className="flex overflow-x-auto pb-2 gap-4">
              {hourly.map((hourData, index) => (
                <HourCard
                  key={index}
                  temp={hourData.main.temp}
                  icon={hourData.weather[0].icon}
                  time={hourData.dt_txt}
                />
              ))}
            </div>
          </div>

          {/* Daily Forecast */}
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">7-Day Forecast</h3>
            <div className="space-y-3">
              {Object.keys(daily).map((date) => (
                <DayForecastCard key={date} data={daily[date]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
