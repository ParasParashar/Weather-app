"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
