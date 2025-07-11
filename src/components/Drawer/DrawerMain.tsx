"use client";

import Link from "next/link";
import Image from "next/image";
import { AlignJustify, Combine } from "lucide-react";
import { BiSolidCheckShield } from "react-icons/bi";
import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DrawerFiber } from "./DrawerFiber";
import { DrawerClient } from "./DrawerClient";
import { DrawerStreaming } from "./DrawerStreaming";

export function DrawerMain() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menu"
            type="button"
            className="flex items-center justify-center focus:outline-none focus-visible:text-zinc-500 dark:focus-visible:text-cyan-500 text-zinc-600 dark:text-cyan-400 "
          >
            <AlignJustify size={20} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="bg-blue-700 dark:bg-zinc-900 h-16 items-center">
            <SheetTitle asChild>
              <h2 className="text-white text-base md:text-lg">
                <Image
                  src="/logowhite.svg"
                  alt="Logo Net Evolution"
                  width={150}
                  height={29}
                  priority
                />
              </h2>
            </SheetTitle>
          </SheetHeader>
          <main className="flex flex-col px-5 mt-9">
            {/* Fibra */}
            <DrawerFiber />
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
            {/* Combos */}
            <Link
              href="/Combos"
              className="w-full flex items-center gap-1 text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
            >
              <div className="flex items-center gap-1">
                <Combine size={20} className="md:size-6" />
                <span>Nossos Combos</span>
              </div>
            </Link>
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
            {/* Streaming */}
            <DrawerStreaming />
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
            {/* Cliente */}
            <DrawerClient />
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-20 items-center px-5 py-5 gap-5">
            <Link
              href="/Security"
              className="flex items-center justify-center gap-1 p-1.5 w-[9.063rem] text-base md:text-lg font-semibold rounded-full bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-800 hover:bg-blue-500 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 transition-colors duration-200 group"
            >
              <BiSolidCheckShield />
              <span>Segurança</span>
            </Link>
            <Separator
              orientation="vertical"
              className="bg-zinc-200 dark:bg-zinc-500 my-7"
            />
            <Link
              prefetch
              href="/Indicate"
              className="text-base text-zinc-600 font-medium dark:text-cyan-400"
            >
              Indicação
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
