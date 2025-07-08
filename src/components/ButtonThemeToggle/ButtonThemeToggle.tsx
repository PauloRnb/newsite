"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

interface ButtonThemeToggleProps {
  className?: string; // classe completa do botão
  iconClassName?: string; // classe do contêiner do ícone
}

export function ButtonThemeToggle({
  className = "",
  iconClassName = "",
}: ButtonThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Alternar entre modo Claro/Escuro"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    >
      {isDark ? "Modo Claro" : "Modo Escuro"}
      <div className={iconClassName}>
        {isDark ? <BsSunFill size={14} /> : <BsFillMoonStarsFill size={12} />}
      </div>
    </button>
  );
}
