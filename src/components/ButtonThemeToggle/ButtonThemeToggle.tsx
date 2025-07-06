"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

interface ButtonThemeToggleProps {
  className?: string;
}

export function ButtonThemeToggle({ className = "" }: ButtonThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Alternar entre modo Clarp/Escuro"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center justify-between p-1.5 gap-2 font-semibold opacity-100 rounded-full focus:outline-none bg-white w-[9.063rem] text-base py-[2px] text-blue-700 dark:bg-cyan-400 dark:text-zinc-800 ${className}`}
    >
      {isDark ? "Modo Claro" : "Modo Escuro"}
      {isDark ? (
        <div className="flex items-center justify-center w-7 h-5 bg-zinc-800 rounded-full text-cyan-400">
          <BsSunFill size={14} />
        </div>
      ) : (
        <div className="flex items-center justify-center w-7 h-5 bg-blue-700 rounded-full text-white">
          <BsFillMoonStarsFill size={12} />
        </div>
      )}
    </button>
  );
}
