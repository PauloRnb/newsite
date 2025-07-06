import { useEffect, useState } from "react";

export function useDelayedVisibility(open: boolean, delay = 300) {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (open) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => setIsVisible(false), delay);
    }

    return () => clearTimeout(timeout);
  }, [open, delay]);

  return isVisible;
}
