"use client";
import Image from "next/image";
import Link from "next/link";
import { DrawerHeader } from "../Drawer/DrawerHeader";

export default function HeaderMobile() {
  return (
    <nav className="flex w-full items-center justify-between px-5 dark:bg-zinc-900 lg:px-6 h-full">
      <Link href="/" className="select-none">
        LOGO
      </Link>
      <DrawerHeader />
    </nav>
  );
}
