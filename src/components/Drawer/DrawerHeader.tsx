"use client";

import React, { useEffect, useState, Suspense } from "react";
import {
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
import { DrawerSubMenu } from "./DrawerSubMenu";

// Componente principal
export function DrawerHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) setSubmenu(null);
  }, [isOpen]);

  const submenuItems = [
    {
      label: "Internet Fibra",
      icon: <Globe size={16} className="md:size-5" />,
      key: "fibra",
    },
    {
      label: "Streaming",
      icon: <Airplay size={16} className="md:size-5" />,
      key: "streaming",
    },
    {
      label: "Área do Cliente",
      icon: <CircleUser size={16} className="md:size-5" />,
      key: "cliente",
    },
  ];

  return (
    <Drawer.Root
      direction="right"
      dismissible={false}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {/* Botão hamburguer */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir o menu"
        type="button"
        className="focus:outline-none group"
      >
        <div className="flex flex-col gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-[2px] bg-gray-600 rounded-full dark:bg-cyan-400 group-focus-visible:bg-blue-700"
            />
          ))}
        </div>
      </button>

      {/* Menu principal */}
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
                onClick={() => setIsOpen(false)}
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
              {submenuItems.map(({ label, icon, key }) => (
                <React.Fragment key={key}>
                  <button
                    onClick={() => setSubmenu(key)}
                    className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg"
                  >
                    <div className="flex items-center gap-1">
                      {icon}
                      <span>{label}</span>
                    </div>
                    <ChevronRight size={16} className="md:size-5" />
                  </button>
                  <Separator className="w-full h-[1px] bg-gray-400 shrink-0 my-6" />
                </React.Fragment>
              ))}

              {/* Combos */}
              <Link
                onClick={() => setIsOpen(false)}
                href="/combos"
                prefetch
                className="w-full flex items-center justify-between text-base font-medium text-gray-600 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg"
              >
                <div className="flex items-center gap-1">
                  <span className="sr-only">Ícone de combos</span>
                  <Combine aria-hidden size={16} className="md:size-5" />
                  <span>Nossos Combos</span>
                </div>
              </Link>
            </div>
          </main>

          <div className="flex-1" />

          {/* Rodapé */}
          <div className="flex-row sticky bottom-0 flex h-20 min-h-[5rem] w-full items-center gap-6 px-5 py-5">
            <Link
              onClick={() => setIsOpen(false)}
              href="/Security"
              className="flex items-center justify-center gap-1 p-1.5 rounded-full bg-blue-700 hover:bg-blue-500 w-[9.063rem] text-base py-[2px] text-white dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 transition-colors duration-200 focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 group"
            >
              <span className="font-medium md:text-lg">Segurança</span>
              <span className="sr-only">Ícone de escudo</span>
              <ShieldCheck
                aria-hidden
                size={20}
                className="text-blue-700 fill-white dark:fill-zinc-900 dark:text-cyan-400 group-hover:text-blue-500 dark:group-hover:text-cyan-500"
              />
            </Link>

            <Separator
              orientation="vertical"
              className="w-[1px] h-6 bg-gray-400 shrink-0"
            />

            <Link
              onClick={() => setIsOpen(false)}
              href="/Indicate"
              prefetch
              className="w-full flex items-center justify-between text-base font-medium text-gray-600 hover:text-blue-700 transition-colors duration-200 dark:text-cyan-400 focus:outline-none dark:focus-visible:text-cyan-500 select-none focus-visible:text-blue-700 md:text-lg"
            >
              Indique e Ganhe
            </Link>
          </div>
        </Drawer.Content>
      </Drawer.Portal>

      {/* Submenu dinâmico */}
      {submenu && (
        <Suspense fallback={<div>Carregando submenu...</div>}>
          <DrawerSubMenu
            isOpen={!!submenu}
            onClose={() => setSubmenu(null)}
            title={
              submenuItems.find((item) => item.key === submenu)?.label || ""
            }
            icon={
              submenuItems.find((item) => item.key === submenu)?.icon || null
            }
          >
            {submenu === "fibra" && (
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Planos de Internet
                </h3>
                <ul className="list-disc list-inside text-sm">
                  <li>300Mb com Paramount+ e HBO Max</li>
                  <li>400Mb com Premiere e canais ao vivo</li>
                  <li>600Mb com todos os apps inclusos</li>
                </ul>
              </div>
            )}

            {submenu === "streaming" && (
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Apps de Streaming
                </h3>
                <ul className="list-disc list-inside text-sm">
                  <li>HBO Max</li>
                  <li>Paramount+</li>
                  <li>SporTV, Premiere, TNT Sports</li>
                </ul>
              </div>
            )}

            {submenu === "cliente" && (
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Área do Cliente</h3>
                <p className="text-sm">
                  Segunda via de boletos, teste de velocidade, abertura de
                  chamado e muito mais.
                </p>
              </div>
            )}
          </DrawerSubMenu>
        </Suspense>
      )}
    </Drawer.Root>
  );
}
