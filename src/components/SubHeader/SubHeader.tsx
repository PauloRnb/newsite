"use client";

import { useMediaQuery } from "@/Hooks/useIsMediaQuery";
import dynamic from "next/dynamic";

const SubHeaderMobile = dynamic(() => import("./SubHeaderMobile"), {
  ssr: false,
});
const SubHeaderDesktop = dynamic(() => import("./SubHeaderDesktop"), {
  ssr: false,
});

export default function SubHeader() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (isMobile === null) return null; // ou um loader ou placeholder

  return (
    <nav className="sticky top-0 w-full min-w-[375px] bg-blue-700 dark:bg-zinc-800 z-20">
      {isMobile ? <SubHeaderMobile /> : <SubHeaderDesktop />}
    </nav>
  );
}
