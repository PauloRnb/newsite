"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { ButtonThemeToggle } from "../ButtonThemeToggle/ButtonThemeToggle";
import { ModalCoverage } from "../Modal/ModalCoverage";

export default function SubHeaderDesktop() {
  return (
    <div className="container flex items-center justify-between py-4 gap-5 px-6 32lg:px-0">
      <ModalCoverage />
      <ul className="flex items-center justify-end gap-5">
        <li>
          <a
            href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-base hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200"
          >
            Suporte 24H
          </a>
        </li>
        <li>
          <a
            href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-base hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200"
          >
            2ª Via da Fatura
          </a>
        </li>
        <li>
          <Link
            prefetch
            href="/Acessibility"
            className="text-white font-medium text-base hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200"
          >
            Acessibilidade
          </Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="w-[1px] h-6 bg-white" />
        </li>
        <li>
          <ButtonThemeToggle className="flex items-center justify-center p-1.5 gap-1 font-semibold rounded-full focus:outline-none bg-white w-[9.063rem] text-base py-[2px] text-blue-700 dark:bg-cyan-400 dark:text-zinc-800 group transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500 focus-visible:bg-zinc-200 group" />
        </li>
      </ul>
    </div>
  );
}
