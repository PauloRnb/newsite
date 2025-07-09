"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { EllipsisVertical, CircleX, Headset, FileScan } from "lucide-react";
import { TbAccessible } from "react-icons/tb";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { ButtonThemeToggle } from "../ButtonThemeToggle/ButtonThemeToggle";

export function DrawerSubHeader() {
  return (
    <nav>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            aria-label="Abrir o menu"
            type="button"
            className="w-7 h-7 flex items-center justify-center focus:outline-none focus-visible:text-zinc-100 dark:focus-visible:text-cyan-500 text-white hover:text-zinc-100 dark:text-cyan-400 dark:hover:text-cyan-500 transition-colors duration-200"
          >
            <EllipsisVertical size={20} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px]">
            <Dialog.Title asChild>
              <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                <Dialog.Close asChild>
                  <button
                    aria-label="Fechar o menu"
                    className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                  >
                    <CircleX size={28} />
                  </button>
                </Dialog.Close>
              </h2>
            </Dialog.Title>
            <main className="flex flex-col">
              <div className="flex flex-col items-start px-5 mt-9">
                <a
                  href="https://wa.me/5585997362750?text=Olá estou precisando de um suporte, poderia me ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  <div className="flex items-center gap-1">
                    <Headset size={16} className="md:size-5" />
                    <span>Suporte 24H</span>
                  </div>
                </a>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                <a
                  href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  <div className="flex items-center gap-1">
                    <FileScan size={16} className="md:size-5" />
                    <span>2ª Via da Fatura</span>
                  </div>
                </a>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                <Link
                  prefetch
                  href="/acessibility"
                  className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  <div className="flex items-center gap-1">
                    <TbAccessible
                      size={18}
                      className="md:size-6"
                      strokeWidth={1.8}
                    />
                    <span>Acessibilidade</span>
                  </div>
                </Link>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
              </div>
            </main>
            <div className="flex-1"></div>
            <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5">
              <ButtonThemeToggle className="flex items-center justify-center p-1.5 gap-1 font-semibold rounded-full focus:outline-none bg-blue-700 w-[9.063rem] text-base py-[2px] text-white dark:bg-cyan-400 dark:text-zinc-800 transition-colors duration-200 hover:bg-blue-500 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500 focus-visible:bg-blue-500 group md:text-lg" />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
}
