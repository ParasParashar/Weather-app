import { ArrowRight } from "lucide-react";
import { formatDayOnly } from "../libs/dateFormat";
import { motion, AnimatePresence } from "framer-motion";
import DayDetails from "./DayDetails";

export default function DayForecastCard({ data }) {
  if (!data) return null;

  const dayName = formatDayOnly(data[0].dt_txt.split(" ")[0]);
  const iconUrl = `https://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`;
  const maxTemp = Math.round(data[0].main.temp_max);
  const minTemp = Math.round(data[0].main.temp_min);

  return (
    <div className="group">
      <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
        <p className="font-medium min-w-[100px]">{dayName}</p>
        <div className="flex items-center gap-2">
          <img
            src={iconUrl}
            alt="Weather icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 min-w-[60px] justify-end">
            <span className="font-medium">{maxTemp}°</span>
            <span className="text-muted-foreground">{minTemp}°</span>
          </div>
          <DayDetails data={data} />
        </div>
      </div>
    </div>
  );
}
