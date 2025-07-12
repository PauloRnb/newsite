"use client";

import Link from "next/link";
import { EllipsisVertical, FileScan, Headset } from "lucide-react";
import { TbAccessible } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import { ButtonThemeToggle } from "../ButtonThemeToggle/ButtonThemeToggle";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DrawerAcessibility() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Abrir menu"
            type="button"
            className="flex items-center justify-center focus:outline-none focus-visible:text-zinc-100 dark:focus-visible:text-cyan-500 text-white hover:text-zinc-100 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200"
          >
            <EllipsisVertical size={20} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="bg-blue-700 dark:bg-zinc-900 h-16 items-center">
            <SheetTitle asChild>
              <h2 className="text-white">Menu Acessível</h2>
            </SheetTitle>
          </SheetHeader>
          <main className="flex flex-col px-5 mt-9">
            {/* Suporte */}
            <a
              aria-label="Ir para suporte no WhatsApp"
              href="https://wa.me/5585997362750?text=Olá estou precisando de um suporte, poderia me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-start text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
            >
              <Headset aria-hidden size={16} className="md:size-5" />
              <span>Suporte 24H</span>
            </a>
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
            {/* Fatura */}
            <a
              aria-label="Ir para a segunda via da fatura"
              href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-start text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
            >
              <FileScan aria-hidden size={16} className="md:size-5" />
              <span>2ª Via da Fatura</span>
            </a>
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
            {/* Acessibilidade */}
            <Link
              prefetch
              href="/Acessibility"
              className="w-full flex items-center justify-start text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
            >
              <TbAccessible size={18} className="md:size-6" strokeWidth={1.8} />
              <span>Acessibilidade</span>
            </Link>
            <Separator className="bg-zinc-200 dark:bg-zinc-500 my-7" />
          </main>
          <div className="flex-1"></div>
          <SheetFooter className="sticky bottom-0 flex h-20 items-center px-5 py-5 gap-5">
            <ButtonThemeToggle className="flex items-center justify-center gap-1 p-1.5 w-[9.063rem] text-base md:text-lg font-semibold rounded-full bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-800 hover:bg-blue-500 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 transition-colors duration-200 group" />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
