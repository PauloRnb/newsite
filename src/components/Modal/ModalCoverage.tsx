"use client";
import Image from "next/image";

import { CirclePlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ModalCoverage() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label="Abri modal"
            className="flex items-center justify-center gap-1 font-medium text-base text-white transition-opacity duration-200 opacity-100 hover:opacity-85 focus:outline-none focus-visible:opacity-85 dark:text-cyan-400 select-none"
          >
            <span>Áreas de Cobertura</span>
            <CirclePlus size={16} strokeWidth={2.2} />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle asChild>
              <h2 className="w-fit">
                <Image
                  src="/logoblue.svg"
                  alt="Logo Net Evolution"
                  width={170}
                  height={33}
                  priority
                  className="dark:hidden block"
                />
                <Image
                  src="/logowhite.svg"
                  alt="Logo Net Evolution"
                  width={170}
                  height={33}
                  priority
                  className="hidden dark:block"
                />
              </h2>
            </DialogTitle>
          </DialogHeader>
          <main className="flex flex-col items-start justify-between">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-gray-800 font-semibold text-lg dark:text-white">
                Áreas de Cobertura:
              </h3>
              <ul className="grid grid-cols-2 gap-y-2 list-disc  list-inside">
                <li className="text-sm font-medium text-gray-700 leading-5 dark:text-gray-300">
                  Cigana
                </li>
                <li className="text-sm font-medium text-gray-700 leading-5 dark:text-gray-300">
                  Vila Cazé
                </li>
                <li className="text-sm font-medium text-gray-700 leading-5 dark:text-gray-300">
                  Nova Cigana
                </li>
                <li className="text-sm font-medium text-gray-700 leading-5 dark:text-gray-300">
                  Paumirim
                </li>
                <li className="text-sm font-medium text-gray-700 leading-5 dark:text-gray-300">
                  Planalto Caucaia
                </li>
                <li className="text-sm font-medium text-gray-700 leading-5 dark:text-gray-300">
                  Padre J. Maria I e II
                </li>
              </ul>
            </div>
          </main>
          <DialogFooter>
            <p className="text-gray-700 text-xs dark:text-gray-200 font-medium tracking-[0.01rem]">
              <span className="text-sm text-orange-600 font-semibold">*</span>
              Consulte viabilidade para sua região.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
