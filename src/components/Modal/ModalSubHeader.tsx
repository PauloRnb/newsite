"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CirclePlus, CircleX } from "lucide-react";

export default function ModalSubHeader() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            aria-label="Abri modal"
            className="flex items-center justify-center gap-1 font-medium text-base text-white transition-opacity duration-200 opacity-100 hover:opacity-85 focus:outline-none focus-visible:opacity-85 dark:text-cyan-400 select-none"
          >
            <span>Áreas de Cobertura</span>
            <CirclePlus size={16} strokeWidth={2.2} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-overlayShow data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="z-50 fixed left-1/2 top-1/2 grid max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border dark:border-zinc-700 bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg h-[18.6875rem] w-[20.9375rem] p-6 dark:bg-zinc-900 md:h-[21.125rem] md:w-[34.875rem] select-none">
            <main className="flex flex-col items-start justify-between">
              <Dialog.Title className="w-fit text-4xl text-blue-700 font-bold dark:text-white">
                Logo
              </Dialog.Title>
              <div className="w-full flex flex-col gap-4">
                <h3 className="text-gray-800 font-semibold text-lg dark:text-white">
                  Áreas de Cobertura:
                </h3>
                <ul className="grid grid-cols-2 gap-y-2 list-disc  list-inside">
                  <li className="text-sm font-medium text-gray-700 left-5 ml-2 dark:text-gray-300">
                    Cigana
                  </li>
                  <li className="text-sm font-medium text-gray-700 left-5 ml-2 dark:text-gray-300">
                    Cigana
                  </li>
                  <li className="text-sm font-medium text-gray-700 left-5 ml-2 dark:text-gray-300">
                    Cigana
                  </li>
                  <li className="text-sm font-medium text-gray-700 left-5 ml-2 dark:text-gray-300">
                    Cigana
                  </li>
                  <li className="text-sm font-medium text-gray-700 left-5 ml-2 dark:text-gray-300">
                    Cigana
                  </li>
                  <li className="text-sm font-medium text-gray-700 left-5 ml-2 dark:text-gray-300">
                    Cigana
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 text-xs dark:text-gray-200 font-medium tracking-[0.01rem]">
                <span className="text-sm text-orange-600 font-semibold">*</span>
                Consulte viabilidade para sua região.
              </p>
            </main>
            <Dialog.Close asChild>
              <button
                aria-label="Fecha Modal"
                tabIndex={1}
                type="button"
                className="absolute right-5 top-5 text-gray-500 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 hover:text-zinc-700 focus:outline-none focus-visible:text-zinc-700 dark:focus-visible:text-white"
              >
                <span className="sr-only">Ícone de X</span>
                <CircleX size={28} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
