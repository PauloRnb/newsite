"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, CircleX } from "lucide-react";
import Link from "next/link";

export function HeaderMobile() {
  return (
    <header className="flex flex-row items-center z-10 min-w-[375px] bg-gray-100 border-b-2 border-gray-300 dark:bg-zinc-900">
      <nav className="w-full flex items-center justify-between h-[4.375rem] px-5">
        <Link
          aria-label="Link para voltar a tela inicial do site"
          href="/"
          className="text-blue-700 text-2xl font-bold dark:text-white focus:outline-none"
        >
          LOGO
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center bg-blue-700 rounded-md border border-blue-700 text-white transition-colors hover:bg-transparent hover:text-blue-700 hover:border-blue-700 hover:border-2 duration-300 dark:hover:text-cyan-400 dark:hover:border-cyan-400 dark:bg-cyan-400 dark:text-zinc-900 dark:hover:bg-transparent dark:border-cyan-400"
            >
              <Menu size={18} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="z-50 fixed inset-0 backdrop-blur-[2px] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
            <Dialog.Content className="z-50 fixed top-0 right-0 h-full inset-y-0 border-l sm:max-w-sm md:max-w-[615px] w-full overflow-y-auto dark:bg-zinc-800 bg-white shadow-lg data-[state=open]:animate-slideInRight ease-in data-[state=closed]:animate-slideOutRight select-none">
              <Dialog.Title asChild>
                <h2 className="text-lg font-semibold sticky top-0 z-[2] h-16 w-full bg-blue-700 dark:bg-zinc-900 md:flex md:items-center">
                  <Dialog.Close asChild>
                    <button
                      aria-label="Fechar o menu"
                      className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-300"
                    >
                      <CircleX size={28} />
                    </button>
                  </Dialog.Close>
                </h2>
              </Dialog.Title>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
