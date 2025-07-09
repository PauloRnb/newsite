"use client";
import React from "react";

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

import { Drawer } from "vaul";

export function DrawerHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenTwo, setIsOpenTwo] = React.useState(false);
  const [isOpenThree, setIsOpenThree] = React.useState(false);
  const [isOpenFour, setIsOpenFour] = React.useState(false);
  return (
    <nav>
      <Drawer.Root
        direction="right"
        dismissible={false}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Drawer.Trigger asChild>
          <button
            aria-label="Abrir o menu"
            type="button"
            className="w-7 h-7 flex items-center justify-center bg-blue-700 rounded-md border border-blue-700 text-white transition-colors hover:bg-transparent hover:text-blue-700 hover:border-blue-700 hover:border-2 duration-300 dark:hover:text-cyan-500 dark:hover:border-cyan-500 dark:bg-cyan-400 dark:text-zinc-900 dark:hover:bg-transparent dark:border-cyan-400 focus:outline-none focus-visible:bg-transparent focus-visible:border-blue-700 focus-visible:text-blue-700 focus-visible:border-2 dark:focus-visible:bg-transparent dark:focus-visible:border-cyan-500 dark:focus-visible:text-cyan-500"
          >
            <Menu size={20} />
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          />
          <Drawer.Content className="fixed z-50 gap-4 shadow-lg ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm w-full transform overflow-y-auto bg-white p-0 transition-all dark:bg-zinc-800 md:max-w-[613px] flex flex-col">
            <Drawer.Title asChild>
              <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                <Drawer.Close asChild>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Fechar o menu"
                    className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                  >
                    <span className="sr-only">Ícone de X</span>
                    <CircleX aria-hidden size={28} />
                  </button>
                </Drawer.Close>
              </h2>
            </Drawer.Title>
            <main className="flex flex-col">
              <div className="flex flex-col items-start px-5 mt-9">
                {/* Internet Fibra */}
                <Drawer.Root
                  direction="right"
                  dismissible={false}
                  open={isOpenTwo}
                  onOpenChange={setIsOpenTwo}
                >
                  <Drawer.Trigger asChild>
                    <button className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg">
                      <div className="flex items-center gap-1">
                        <Globe size={16} className="md:size-5" />
                        <span>Intenet Fibra</span>
                      </div>
                      <ChevronRight size={16} className="md:size-5" />
                    </button>
                  </Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Overlay
                      onClick={() => setIsOpenTwo(false)}
                      className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                    />
                    <Drawer.Content className="fixed z-50 gap-4 shadow-lg ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm w-full transform overflow-y-auto bg-white p-0 transition-all dark:bg-zinc-800 md:max-w-[613px] flex flex-col">
                      <Drawer.Title asChild>
                        <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                          <Drawer.Close asChild>
                            <button
                              onClick={() => setIsOpenTwo(false)}
                              aria-label="Fechar o menu"
                              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                            >
                              <span className="sr-only">Ícone de X</span>
                              <CircleX aria-hidden size={28} />
                            </button>
                          </Drawer.Close>
                        </h2>
                      </Drawer.Title>
                      <main className="flex flex-col">
                        <div className="flex flex-col items-start px-5 mt-9"></div>
                      </main>
                    </Drawer.Content>
                  </Drawer.Portal>
                </Drawer.Root>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                <Drawer.Close asChild>
                  <Link
                    onClick={() => setIsOpen(false)}
                    prefetch={true}
                    href="/combos"
                    className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                  >
                    <div className="flex items-center gap-1">
                      <span className="sr-only">Ícone de combos</span>
                      <Combine aria-hidden size={16} className="md:size-5" />
                      <span>Nossos Combos</span>
                    </div>
                  </Link>
                </Drawer.Close>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                {/* Streaming */}
                <Drawer.Root
                  direction="right"
                  dismissible={false}
                  open={isOpenThree}
                  onOpenChange={setIsOpenThree}
                >
                  <Drawer.Trigger asChild>
                    <button
                      aria-label="Abrir menu"
                      className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                    >
                      <div className="flex items-center gap-1">
                        <span className="sr-only">Ícone de TV, Play</span>
                        <Airplay aria-hidden size={16} className="md:size-5" />
                        <span>Streaming</span>
                      </div>
                      <span className="sr-only">
                        Ícone de seta apontada para a direita
                      </span>
                      <ChevronRight
                        aria-hidden
                        size={16}
                        className="md:size-5"
                      />
                    </button>
                  </Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Overlay
                      onClick={() => setIsOpenThree(false)}
                      className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                    />
                    <Drawer.Content className="fixed z-50 gap-4 shadow-lg ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm w-full transform overflow-y-auto bg-white p-0 transition-all dark:bg-zinc-800 md:max-w-[613px] flex flex-col">
                      <Drawer.Title asChild>
                        <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                          <Drawer.Close asChild>
                            <button
                              onClick={() => setIsOpenTwo(false)}
                              aria-label="Fechar o menu"
                              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                            >
                              <span className="sr-only">Ícone de X</span>
                              <CircleX aria-hidden size={28} />
                            </button>
                          </Drawer.Close>
                        </h2>
                      </Drawer.Title>
                      <main className="flex flex-col">
                        <div className="flex flex-col items-start px-5 mt-9"></div>
                      </main>
                    </Drawer.Content>
                  </Drawer.Portal>
                </Drawer.Root>
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                />
                {/* Área do Cliente */}
                <Drawer.Root
                  direction="right"
                  dismissible={false}
                  open={isOpenFour}
                  onOpenChange={setIsOpenFour}
                >
                  <Drawer.Trigger asChild>
                    <button className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg">
                      <div className="flex items-center gap-1">
                        <span className="sr-only">Ícone de pessoa</span>
                        <CircleUser
                          aria-hidden
                          size={16}
                          className="md:size-5"
                        />
                        <span>Área do Cliente</span>
                      </div>
                      <span className="sr-only">
                        Ícone de seta apontada para a direita
                      </span>
                      <ChevronRight
                        aria-hidden
                        size={16}
                        className="md:size-5"
                      />
                    </button>
                  </Drawer.Trigger>
                  <Drawer.Portal>
                    <Drawer.Overlay
                      onClick={() => setIsOpenFour(false)}
                      className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                    />
                    <Drawer.Content className="fixed z-50 gap-4 shadow-lg ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm w-full transform overflow-y-auto bg-white p-0 transition-all dark:bg-zinc-800 md:max-w-[613px] flex flex-col">
                      <Drawer.Title asChild>
                        <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                          <Drawer.Close asChild>
                            <button
                              onClick={() => setIsOpenTwo(false)}
                              aria-label="Fechar o menu"
                              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                            >
                              <span className="sr-only">Ícone de X</span>
                              <CircleX aria-hidden size={28} />
                            </button>
                          </Drawer.Close>
                        </h2>
                      </Drawer.Title>
                      <main className="flex flex-col">
                        <div className="flex flex-col items-start px-5 mt-9"></div>
                      </main>
                    </Drawer.Content>
                  </Drawer.Portal>
                </Drawer.Root>
              </div>
            </main>

            <div className="flex-1"></div>
            <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5">
              <Drawer.Close asChild>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={true}
                  href="/Security"
                  className="flex items-center justify-center gap-1 p-1.5 opacity-100 rounded-full focus:outline-none bg-blue-700 hover:bg-blue-500 w-[9.063rem] text-base py-[2px] text-blue-700 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 group transition-colors duration-200 dark:focus-visible:bg-cyan-500 focus-visible:bg-blue-500 group"
                >
                  <span className="text-white text-base dark:text-zinc-900 font-medium md:text-lg">
                    Segurança
                  </span>
                  <span className="sr-only">Ícone de escudo, segurança</span>
                  <ShieldCheck
                    aria-hidden
                    size={20}
                    className="text-blue-700 fill-white dark:fill-zinc-900 dark:text-cyan-400 group-hover:text-blue-500 dark:group-hover:text-cyan-500 group-focus-visible:text-blue-500 dark:group-focus-visible:text-cyan-500"
                  />
                </Link>
              </Drawer.Close>
              <Separator
                orientation="vertical"
                className="w-[1px] h-6 bg-gray-400 shrink-0"
              />
              <Drawer.Close asChild>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={true}
                  href="/Indicate"
                  className="text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  Indique e Ganhe
                </Link>
              </Drawer.Close>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
}
