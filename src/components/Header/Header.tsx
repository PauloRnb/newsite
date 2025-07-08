"use client";

import { useMediaQuery } from "@/Hooks/useIsMediaQuery";
import dynamic from "next/dynamic";

const HeaderMobile = dynamic(() => import("./HeaderMobile"), { ssr: false });
const HeaderDesktop = dynamic(() => import("./HeaderDesktop"), { ssr: false });

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <header className="z-10 flex h-[3.75rem] min-w-[375px] items-center bg-gray-100 dark:bg-zinc-900 border-b border-zinc-400">
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
}
