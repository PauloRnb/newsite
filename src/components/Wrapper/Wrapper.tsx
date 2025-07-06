"use client";

import { useIsMobile } from "@/Hooks/useIsMobile";
import { SubHeaderMobile } from "../Mobile/SubHeaderMobile";
import { HeaderMobile } from "../Mobile/HeaderMobile";

export default function Wrapper() {
  const isMobile = useIsMobile(1024);

  if (isMobile === null) return null;

  return isMobile ? (
    <>
      {/* Somente Mobile */}
      <SubHeaderMobile />
      <HeaderMobile />
    </>
  ) : (
    <>{/* Somente Desktop */}</>
  );
}
