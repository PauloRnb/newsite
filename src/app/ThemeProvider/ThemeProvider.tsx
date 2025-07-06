"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const disableTransitionsTemporarily = () => {
      const css = document.createElement("style");
      css.setAttribute("id", "disable-transitions");
      css.appendChild(
        document.createTextNode(
          `* {
            transition: none !important;
          }`
        )
      );
      document.head.appendChild(css);

      // Remove o estilo depois de 2 frames (~32ms)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const existing = document.getElementById("disable-transitions");
          if (existing) existing.remove();
        });
      });
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          disableTransitionsTemporarily();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
