"use client";

import Link from "next/link";
import { Airplay, ChevronRight } from "lucide-react";
import { BiSolidCheckShield } from "react-icons/bi";
import { Separator } from "@radix-ui/react-separator";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DrawerStreaming() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Abri menu"
            type="button"
            className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
          >
            <div className="flex items-center gap-1">
              <Airplay size={20} className="md:size-6" />
              <span>Streaming</span>
            </div>
            <ChevronRight size={16} className="md:size-5" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="bg-blue-700 dark:bg-zinc-900 h-16 items-center">
            <SheetTitle asChild>
              <h2 className="text-white text-base md:text-lg">
                <div className="flex items-center gap-1">
                  <Airplay size={20} className="md:size-6" />
                  <span>Streaming</span>
                </div>
              </h2>
            </SheetTitle>
          </SheetHeader>
          <main className="flex flex-col px-5 mt-9"></main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-20 items-center px-5 py-5 gap-5">
            <Link
              href="/Security"
              className="flex items-center justify-center gap-1 p-1.5 w-[9.063rem] text-base md:text-lg font-semibold rounded-full bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-800 hover:bg-blue-500 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 transition-colors duration-200 group"
            >
              <span>Segurança</span>
              <BiSolidCheckShield />
            </Link>
            <Separator
              orientation="vertical"
              className="shrink-0 w-[1px] h-6 bg-zinc-400 dark:bg-white rounded-full"
            />
            <Link
              prefetch
              href="/Indicate"
              className="text-base text-zinc-700 font-medium dark:text-cyan-400"
            >
              Indique e Ganhe
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
