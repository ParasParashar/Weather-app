import Image from "next/image";
import { formatTime } from "../libs/dateFormat";

export default function HourCard({ temp, icon, time }) {
  return (
    <div className="flex flex-col items-center min-w-[80px] bg-muted/50 rounded-lg p-3">
      <p className="text-sm font-medium">{formatTime(time)}</p>
      <Image
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather icon"
        width={40}
        height={40}
        className="my-1"
      />
      <p className="font-semibold">{Math.round(temp)}°</p>
    </div>
  );
}
