import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 960) {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkWidth(); // executa na montagem

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isMobile;
}
