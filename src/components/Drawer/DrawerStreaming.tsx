"use client";
import React from "react";
import {
  Airplay,
  ChevronRight,
  CircleX,
  Headset,
  FileScan,
} from "lucide-react";
import { TbAccessible } from "react-icons/tb";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { ButtonThemeToggle } from "../ButtonThemeToggle/ButtonThemeToggle";
import { Drawer } from "vaul";

export function DrawerStreaming() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav role="navigation" aria-label="Menu lateral">
      <Drawer.Root
        direction="right"
        dismissible={false}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Drawer.Trigger asChild>
          <button className="w-full flex items-center justify-between gap-1 text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg">
            <div className="flex items-center gap-1">
              <Airplay size={16} className="md:size-5" />
              <span>Streaming</span>
            </div>
            <ChevronRight size={16} className="md:size-5" />
          </button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay
            onPointerDown={() => setIsOpen(false)}
            className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          />
          <Drawer.Content className="fixed z-50 flex flex-col h-full w-full sm:max-w-sm md:max-w-[613px] inset-y-0 right-0 border-l overflow-y-auto p-0 bg-white dark:bg-zinc-800 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:border-l-zinc-500">
            <Drawer.Title asChild>
              <div className="sticky top-0 z-[2] flex items-center justify-end h-16 px-4 bg-blue-700 dark:bg-zinc-900">
                <button
                  aria-label="Fechar o menu"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                >
                  <span className="sr-only">Ícone de X</span>
                  <CircleX aria-hidden size={28} />
                </button>
              </div>
            </Drawer.Title>

            <main className="flex flex-col px-5 mt-9">
              {/* Suporte */}
              <a
                aria-label="Ir para suporte no WhatsApp"
                href="https://wa.me/5585997362750?text=Olá estou precisando de um suporte, poderia me ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start gap-1 text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg"
              >
                <Headset aria-hidden size={16} className="md:size-5" />
                <span>Suporte 24H</span>
              </a>
              <Separator className="my-6 h-[1px] w-full bg-gray-400" />

              {/* Fatura */}
              <a
                aria-label="Ir para a segunda via da fatura"
                href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start gap-1 text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg"
              >
                <FileScan aria-hidden size={16} className="md:size-5" />
                <span>2ª Via da Fatura</span>
              </a>
              <Separator className="my-6 h-[1px] w-full bg-gray-400" />

              {/* Acessibilidade */}
              <Drawer.Close asChild>
                <Link
                  prefetch
                  href="/Acessibility"
                  className="w-full flex items-center justify-start gap-1 text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  <TbAccessible
                    size={18}
                    className="md:size-6"
                    strokeWidth={1.8}
                  />
                  <span>Acessibilidade</span>
                </Link>
              </Drawer.Close>
              <Separator className="my-6 h-[1px] w-full bg-gray-400" />
            </main>

            <div className="flex-1" />

            {/* Rodapé com botão de tema */}
            <div className="sticky bottom-0 flex h-20 items-center px-5 py-5">
              <ButtonThemeToggle className="flex items-center justify-center gap-1 p-1.5 w-[9.063rem] text-base md:text-lg font-semibold rounded-full bg-blue-700 text-white dark:bg-cyan-400 dark:text-zinc-800 hover:bg-blue-500 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 transition-colors duration-200 group" />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
}
