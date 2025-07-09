"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  Menu,
  CircleX,
  ChevronRight,
  Combine,
  Globe,
  Airplay,
  CircleUser,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

export function DrawerHeader() {
  return (
    <nav>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            aria-label="Abrir o menu"
            type="button"
            className="w-7 h-7 flex items-center justify-center bg-blue-700 rounded-md border border-blue-700 text-white transition-colors hover:bg-transparent hover:text-blue-700 hover:border-blue-700 hover:border-2 duration-300 dark:hover:text-cyan-500 dark:hover:border-cyan-500 dark:bg-cyan-400 dark:text-zinc-900 dark:hover:bg-transparent dark:border-cyan-400 focus:outline-none focus-visible:bg-transparent focus-visible:border-blue-700 focus-visible:text-blue-700 focus-visible:border-2 dark:focus-visible:bg-transparent dark:focus-visible:border-cyan-500 dark:focus-visible:text-cyan-500"
          >
            <Menu size={20} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            forceMount
            className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          />
          <Dialog.Content
            forceMount
            className="fixed z-50 gap-4 shadow-lg overflow-y-auto ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right w-full transform bg-white p-0 transition-all dark:bg-zinc-800 sm:max-w-sm md:max-w-[615px] flex flex-col"
          >
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
                {/* Menu Drawer Internet Fibra */}
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg">
                      <div className="flex items-center gap-1">
                        <Globe size={16} className="md:size-5" />
                        <span>Intenet Fibra</span>
                      </div>
                      <ChevronRight size={16} className="md:size-5" />
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
                        <div className="flex flex-col items-start px-5 mt-9"></div>
                      </main>
                      <div className="flex-1"></div>
                      <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5"></div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                <Link
                  prefetch
                  href="/combos"
                  className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  <div className="flex items-center gap-1">
                    <Combine size={16} className="md:size-5" />
                    <span>Nossos Combos</span>
                  </div>
                </Link>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                {/* Menu Drawer Streaming */}
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg">
                      <div className="flex items-center gap-1">
                        <Airplay size={16} className="md:size-5" />
                        <span>Streaming</span>
                      </div>
                      <ChevronRight size={16} className="md:size-5" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                    <Dialog.Content className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm flex h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-gray-700 md:max-w-[613px]">
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
                        <div className="flex flex-col items-start px-5 mt-9"></div>
                      </main>
                      <div className="flex-1"></div>
                      <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5"></div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                {/* Menu Drawer Área do Cliente  */}
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg">
                      <div className="flex items-center gap-1">
                        <CircleUser size={16} className="md:size-5" />
                        <span>Área do Cliente</span>
                      </div>
                      <ChevronRight size={16} className="md:size-5" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                    <Dialog.Content className="fixed z-50 gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm h-svh w-full flex-col overflow-y-auto bg-white p-0 dark:bg-zinc-800 md:max-w-[613px]">
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
                        <div className="flex flex-col items-start px-5 mt-9"></div>
                      </main>
                      <div className="flex-1"></div>
                      <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5"></div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
              </div>
            </main>
            <div className="flex-1"></div>
            <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5">
              <button className="flex items-center justify-center gap-1 p-1.5 opacity-100 rounded-full focus:outline-none bg-blue-700 hover:bg-blue-500 w-[9.063rem] text-base py-[2px] text-blue-700 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 group transition-colors duration-200 dark:focus-visible:bg-cyan-500 focus-visible:bg-blue-500 group">
                <span className="text-white text-base dark:text-zinc-900 font-medium md:text-lg">
                  Segurança
                </span>
                <ShieldCheck
                  size={20}
                  className="text-blue-700 fill-white dark:fill-zinc-900 dark:text-cyan-400 group-hover:text-blue-500 dark:group-hover:text-cyan-500 group-focus-visible:text-blue-500 dark:group-focus-visible:text-cyan-500"
                />
              </button>
              <Separator
                orientation="vertical"
                className="w-[1px] h-6 bg-gray-400 shrink-0"
              />
              <Link
                href="/indicate"
                className="text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
              >
                Indique e Ganhe
              </Link>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
}
