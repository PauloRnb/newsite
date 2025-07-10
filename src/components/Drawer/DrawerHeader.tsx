"use client";
import React, { useEffect, useState } from "react";
import {
  CircleX,
  ChevronLeft,
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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleCloseTwo = () => setIsOpenTwo(false);
  const handleCloseThree = () => setIsOpenThree(false);
  const handleCloseFour = () => setIsOpenFour(false);

  useEffect(() => {
    if (!isOpen) {
      setIsOpenTwo(false);
      setIsOpenThree(false);
      setIsOpenFour(false);
    }
  }, [isOpen]);

  return (
    <>
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
            className="text-gray-600 hover:text-gray-500 focus:outline-none focus-visible:text-gray-500 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500 transition-colors duration-200"
          >
            <div className="flex flex-col gap-1">
              <div className="w-5 h-[2px] bg-gray-600 rounded-full"></div>
              <div className="w-5 h-[2px] bg-gray-600 rounded-full"></div>
              <div className="w-5 h-[2px] bg-gray-600 rounded-full"></div>
            </div>
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay
            onPointerDown={() => setIsOpen(false)}
            className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          />
          <Drawer.Content
            style={{ willChange: "transform, opacity" }}
            className="fixed z-50 flex flex-col h-full w-full sm:max-w-sm md:max-w-[613px] inset-y-0 right-0 border-l overflow-y-auto p-0 bg-white dark:bg-zinc-800 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:border-l-zinc-500"
          >
            <Drawer.Title asChild>
              <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                <button
                  onClick={handleClose}
                  aria-label="Fechar o menu"
                  className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                >
                  <span className="sr-only">Ícone de X</span>
                  <CircleX aria-hidden size={28} />
                </button>
              </h2>
            </Drawer.Title>
            <main className="flex flex-col">
              <div className="flex flex-col items-start px-5 mt-9">
                {/* Submenus */}
                {[
                  {
                    label: "Internet Fibra",
                    icon: <Globe size={16} className="md:size-5" />,
                    isOpen: isOpenTwo,
                    setOpen: setIsOpenTwo,
                    handleClose: handleCloseTwo,
                  },
                  {
                    label: "Streaming",
                    icon: <Airplay size={16} className="md:size-5" />,
                    isOpen: isOpenThree,
                    setOpen: setIsOpenThree,
                    handleClose: handleCloseThree,
                  },

                  {
                    label: "Área do Cliente",
                    icon: <CircleUser size={16} className="md:size-5" />,
                    isOpen: isOpenFour,
                    setOpen: setIsOpenFour,
                    handleClose: handleCloseFour,
                  },
                ].map((submenu, index) => (
                  <React.Fragment key={index}>
                    <Drawer.Root
                      direction="right"
                      dismissible={false}
                      open={submenu.isOpen}
                      onOpenChange={submenu.setOpen}
                    >
                      <Drawer.Trigger asChild>
                        <button className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500  select-none focus-visible:text-blue-700 md:text-lg">
                          <div className="flex items-center gap-1">
                            {submenu.icon}
                            <span>{submenu.label}</span>
                          </div>
                          <ChevronRight size={16} className="md:size-5" />
                        </button>
                      </Drawer.Trigger>
                      <Drawer.Portal>
                        <Drawer.Overlay
                          onPointerDown={() => submenu.setOpen(false)}
                          className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                        />
                        <Drawer.Content
                          style={{ willChange: "transform, opacity" }}
                          className="fixed z-50 flex flex-col h-full w-full sm:max-w-sm md:max-w-[613px] inset-y-0 right-0 border-l overflow-y-auto p-0 bg-white dark:bg-zinc-800 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:border-l-zinc-500"
                        >
                          <Drawer.Title asChild>
                            <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                              <button
                                onClick={submenu.handleClose}
                                aria-label="Fechar o menu"
                                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
                              >
                                <span className="sr-only">
                                  Ícone de seta apontada pra esquerda
                                </span>
                                <ChevronLeft aria-hidden size={28} />
                              </button>
                            </h2>
                          </Drawer.Title>
                        </Drawer.Content>
                      </Drawer.Portal>
                    </Drawer.Root>
                    <Separator
                      orientation="horizontal"
                      className="w-full h-[1px] bg-gray-400 shrink-0 my-6"
                    />
                  </React.Fragment>
                ))}
                {/* Combos */}
                <Link
                  onClick={handleClose}
                  prefetch
                  href="/combos"
                  className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
                >
                  <div className="flex items-center gap-1">
                    <span className="sr-only">Ícone de combos</span>
                    <Combine aria-hidden size={16} className="md:size-5" />
                    <span>Nossos Combos</span>
                  </div>
                </Link>
              </div>
            </main>

            <div className="flex-1"></div>

            <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5">
              {/* Segurança */}
              <Link
                onClick={handleClose}
                href="/Security"
                className="flex items-center justify-center gap-1 p-1.5 opacity-100 rounded-full focus:outline-none bg-blue-700 hover:bg-blue-500 w-[9.063rem] text-base py-[2px] text-blue-700 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 group transition-colors duration-200 dark:focus-visible:bg-cyan-500 focus-visible:bg-blue-500 group"
              >
                <span className="text-white text-base dark:text-zinc-900 font-medium md:text-lg">
                  Segurança
                </span>
                <span className="sr-only">Ícone de escudo</span>
                <ShieldCheck
                  aria-hidden
                  size={20}
                  className="text-blue-700 fill-white dark:fill-zinc-900 dark:text-cyan-400 group-hover:text-blue-500 dark:group-hover:text-cyan-500 group-focus-visible:text-blue-500 dark:group-focus-visible:text-cyan-500"
                />
              </Link>

              <Separator
                orientation="vertical"
                className="w-[1px] h-6 bg-gray-400 shrink-0"
              />
              {/* Indique */}
              <Link
                onClick={handleClose}
                prefetch
                href="/Indicate"
                className="text-base font-medium text-gray-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 md:text-lg"
              >
                Indique e Ganhe
              </Link>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
