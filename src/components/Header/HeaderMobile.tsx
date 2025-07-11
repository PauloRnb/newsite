"use client";
import Link from "next/link";
import { DrawerMain } from "../Drawer/DrawerMain";
import Image from "next/image";

export default function HeaderMobile() {
  return (
    <nav className="flex w-full items-center justify-between px-5 dark:bg-zinc-900 lg:px-6 h-full">
      <Link href="/" className="select-none">
        <Image
          src="/logoblue.svg"
          alt="Logo Net Evolution"
          width={150}
          height={29}
          priority
          className="dark:hidden block"
        />
        <Image
          src="/logowhite.svg"
          alt="Logo Net Evolution"
          width={150}
          height={29}
          priority
          className="hidden dark:block"
        />
      </Link>
      <DrawerMain />
    </nav>
  );
}
