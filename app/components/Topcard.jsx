import { Sun } from "lucide-react";
import { formatDate } from "../libs/dateFormat";
import Image from "next/image";

export default function TopCard({ icon, country, name, description, temp }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold text-center">
        {name}, {country}
      </h1>
      <h3 className="text-muted-foreground">{formatDate(new Date() / 1000)}</h3>

      <div className="relative my-4">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          width={120}
          height={120}
          className="z-10 relative"
        />
        <Sun className="absolute inset-0 m-auto h-32 w-32 text-yellow-400/10 dark:text-yellow-200/5 animate-pulse" />
      </div>

      <div className="text-center">
        <h1 className="text-6xl font-bold my-2">{Math.round(temp)}°</h1>
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
          <span className="capitalize">{description}</span>
        </div>
      </div>
    </div>
  );
}
