"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function DayDetails({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors"
      >
        <ArrowRight
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden col-span-3"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg mt-1">
              {data.map((hour, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="text-sm font-medium">
                    {new Date(hour.dt_txt).getHours()}:00
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                    alt="Weather icon"
                    width={30}
                    height={30}
                  />
                  <p className="font-medium">{Math.round(hour.main.temp)}°</p>
                  <p className="text-xs text-muted-foreground">
                    {hour.weather[0].main}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
