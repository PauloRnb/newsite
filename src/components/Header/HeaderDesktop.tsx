"use client";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Separator } from "@radix-ui/react-separator";
import { ShieldCheck, ChevronDown, Download } from "lucide-react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { RiGooglePlayFill } from "react-icons/ri";

export default function HeaderDesktop() {
  return (
    <div className="h-full container flex items-center justify-between gap-2 px-6 32lg:px-0">
      <div className="h-full flex items-center justify-start gap-9">
        <Link href="/" className="select-none">
          LOGO
        </Link>
        {/* Menu DropDown Left */}
        <NavigationMenu.Root className="relative z-10 flex items-center justify-center">
          <NavigationMenu.List className="flex items-center gap-5 list-none">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group text-base font-medium text-zinc-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 data-[state=open]:focus-visible:text-blue-700 data-[state=open]:text-blue-700 dark:data-[state=open]:text-cyan-500 dark:data-[state=open]:focus-visible:text-cyan-500">
                <div className="flex items-center gap-0.5">
                  Internet Fibra
                  <span className="sr-only">
                    Ícone de seta apontada pra baixo
                  </span>
                  <ChevronDown
                    aria-hidden
                    size={20}
                    className="relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  />
                </div>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <main className="w-[33.125rem] h-[28.125rem] flex flex-col justify-between">
                  <div className="flex flex-col pt-5 pl-5 pb-0 pr-5 gap-5">
                    <div className="flex flex-col gap-1 w-fit mt-4">
                      <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                        ACESSE NOSSA ÁREA DO CLIENTE:
                      </h2>

                      <div className="flex flex-col relative">
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 w-10 h-[2px] bg-blue-700 rounded-full absolute z-[2] dark:bg-white"
                        />
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 w-full h-[1px] bg-zinc-300 z-[1] rounded-full absolute top-[1px] dark:bg-zinc-400"
                        />
                      </div>
                    </div>
                    <p className="w-[18rem] text-sm leading-4 text-zinc-400 dark:text-zinc-200">
                      Pelo nosso app você tem acesso ao seu consumo, acesso a
                      suas faturas e muito mais.
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                          Instale o App Meu Provedor
                        </h3>
                        <span className="sr-only">Ícone de download</span>
                        <Download
                          aria-hidden
                          size={12}
                          strokeWidth={3}
                          className="text-zinc-600 dark:text-white"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <a
                          href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-700 text-white font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-500 transition-colors duration-200 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 dark:text-zinc-800 h-11"
                        >
                          <span className="text-base">
                            Download Via Google Play
                          </span>
                          <span className="sr-only">
                            Ícone google play store
                          </span>
                          <RiGooglePlayFill aria-hidden size={16} />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-700 text-white font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-500 transition-colors duration-200 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 dark:text-zinc-800 h-11"
                        >
                          <span className="text-base">
                            Download Via App Store
                          </span>
                          <span className="sr-only">Ícone app store</span>
                          <IoLogoAppleAppstore aria-hidden size={16} />
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                          Acesse a Central do Assinante
                        </h3>
                      </div>
                      <a
                        href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent text-base border-2 border-blue-700 text-blue-700 font-semibold w-[13.5rem] px-2 py-2 rounded-md flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-200 dark:hover:bg-cyan-400 focus:outline-none focus-visible:bg-blue-700 focus-visible:text-white dark:focus-visible:bg-cyan-400 dark:text-cyan-400 dark:focus-visible:text-zinc-800 dark:hover:text-zinc-800 dark:border-cyan-400 h-11 dark:"
                      >
                        Central do Assinante
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-3 bg-blue-700 h-28 p-5 dark:bg-zinc-900">
                    <div className="flex flex-col gap-1 w-fit">
                      <h2 className="text-sm font-semibold text-white">
                        INTERNET FIBRA
                      </h2>
                      <div className="flex flex-col relative">
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 w-10 h-[2px] bg-white rounded-full absolute z-[2]"
                        />
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 w-full h-[1px] bg-zinc-300 z-[1] rounded-full absolute top-[1px] dark:bg-zinc-400"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-fit">
                      <a
                        href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium text-sm hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200 leading-[14px] dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                      >
                        Suporte 24H
                      </a>
                      <a
                        href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium text-sm hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200 leading-[14px] dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                      >
                        2ª Via da Fatura
                      </a>
                    </div>
                  </div>
                </main>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  prefetch
                  href="/Combos"
                  className="text-base font-medium text-zinc-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700"
                >
                  Nossos Combos
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group text-base font-medium text-zinc-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 flex items-center gap-0.5 data-[state=open]:focus-visible:text-blue-700 data-[state=open]:text-blue-700 dark:data-[state=open]:text-cyan-500 dark:data-[state=open]:focus-visible:text-cyan-500">
                Streaming
                <span className="sr-only">
                  Ícone de seta apontada pra baixo
                </span>
                <ChevronDown
                  aria-hidden
                  size={20}
                  className="relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <main className="w-[33.125rem] h-[28.125rem] flex flex-col justify-between">
                  <div className="flex flex-col pt-5 pl-5 pb-0 pr-5 gap-5">
                    <div className="flex flex-col gap-1 w-fit mt-4">
                      <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                        ACESSE NOSSA ÁREA DO CLIENTE:
                      </h2>
                      <div className="flex flex-col relative">
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 w-10 h-[2px] bg-blue-700 rounded-full absolute z-[2] dark:bg-white"
                        />
                        <Separator
                          orientation="horizontal"
                          className="shrink-0 w-full h-[1px] bg-zinc-300 z-[1] rounded-full absolute top-[1px] dark:bg-zinc-400"
                        />
                      </div>
                    </div>
                    <p className="w-[18rem] text-sm leading-4 text-zinc-400 dark:text-zinc-200">
                      Pelo nosso app você tem acesso ao seu consumo, acesso a
                      suas faturas e muito mais.
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                          Instale o App Meu Provedor
                        </h3>
                        <span className="sr-only">Ícone de download</span>
                        <Download
                          aria-hidden
                          size={12}
                          strokeWidth={3}
                          className="text-zinc-600 dark:text-white"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <a
                          href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-700 text-white font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-500 transition-colors duration-200 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 dark:text-zinc-800 h-11"
                        >
                          <span className="text-base">
                            Download Via Google Play
                          </span>
                          <span className="sr-only">
                            Ícone google play store
                          </span>
                          <RiGooglePlayFill aria-hidden size={16} />
                        </a>
                        <a
                          href="https://apps.apple.com/br/app/meuappprovedor/id1637448837"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-700 text-white font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-500 transition-colors duration-200 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 dark:text-zinc-800 h-11"
                        >
                          <span className="text-base">
                            Download Via Apple Store
                          </span>
                          <span className="sr-only">Ícone app store</span>
                          <IoLogoAppleAppstore aria-hidden size={16} />
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                          Acesse a Central do Assinante
                        </h3>
                      </div>
                      <a
                        href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent text-base border-2 border-blue-700 text-blue-700 font-semibold w-[13.5rem] px-2 py-2 rounded-md flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-200 dark:hover:bg-cyan-400 focus:outline-none focus-visible:bg-blue-700 focus-visible:text-white dark:focus-visible:bg-cyan-400 dark:text-cyan-400 dark:focus-visible:text-zinc-800 dark:hover:text-zinc-800 dark:border-cyan-400 h-11"
                      >
                        Central do Assinante
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-3 bg-blue-700 h-28 p-5 dark:bg-zinc-900">
                    <div className="flex flex-col gap-1 w-fit">
                      <h2 className="text-sm font-semibold text-white">
                        INTERNET FIBRA
                      </h2>
                      <div className="flex flex-col relative">
                        <Separator
                          aria-hidden
                          orientation="horizontal"
                          className="shrink-0 w-10 h-[2px] bg-white rounded-full absolute z-[2]"
                        />
                        <Separator
                          aria-hidden
                          orientation="horizontal"
                          className="shrink-0 w-full h-[1px] bg-zinc-300 z-[1] rounded-full absolute top-[1px] dark:bg-zinc-400"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-fit">
                      <a
                        href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium text-sm hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200 leading-[14px] dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                      >
                        Suporte 24H
                      </a>
                      <a
                        href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium text-sm hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200 leading-[14px] dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                      >
                        2ª Via da Fatura
                      </a>
                    </div>
                  </div>
                </main>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator className="top-[90%] z-[0] flex h-4 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
              <div className="relative top-full h-[24px] w-[24px] rotate-45 rounded-tl-sm bg-white shadow-md dark:bg-zinc-800" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div
            className="perspective-[2000px] absolute left-0
         top-full flex items-center justify-center"
          >
            <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white dark:bg-zinc-800 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
      </div>
      {/* Menu DropDown Right */}
      <NavigationMenu.Root className="relative z-10 flex items-center justify-center">
        <NavigationMenu.List className="flex items-center gap-5 list-none">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group text-base font-medium text-zinc-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700 flex items-center gap-0.5 data-[state=open]:focus-visible:text-blue-700 data-[state=open]:text-blue-700 dark:data-[state=open]:text-cyan-500 dark:data-[state=open]:focus-visible:text-cyan-500">
              Clientes
              <span className="sr-only">Ícone de seta apontada pra baixo</span>
              <ChevronDown
                aria-hidden
                size={20}
                className="relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
              <main className="w-[33.125rem] h-[28.125rem] flex flex-col justify-between">
                <div className="flex flex-col pt-5 pl-5 pb-0 pr-5 gap-5">
                  <div className="flex flex-col gap-1 w-fit mt-4">
                    <h2 className="text-balance font-semibold text-blue-700 dark:text-white">
                      ACESSE NOSSA ÁREA DO CLIENTE:
                    </h2>
                    <div className="flex flex-col relative">
                      <Separator
                        aria-hidden
                        orientation="horizontal"
                        className="shrink-0 w-10 h-[2px] bg-blue-700 rounded-full absolute z-[2] dark:bg-white"
                      />
                      <Separator
                        aria-hidden
                        orientation="horizontal"
                        className="shrink-0 w-full h-[1px] bg-zinc-300 z-[1] rounded-full absolute top-[1px] dark:bg-zinc-400"
                      />
                    </div>
                  </div>
                  <p className="w-[18rem] text-sm leading-4 text-zinc-400 dark:text-zinc-200">
                    Pelo nosso app você tem acesso ao seu consumo, acesso a suas
                    faturas e muito mais.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                        Instale o App Meu Provedor
                      </h3>
                      <span className="sr-only">Ícone de download</span>
                      <Download
                        aria-hidden
                        size={12}
                        strokeWidth={3}
                        className="text-zinc-600 dark:text-white"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 text-white font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-500 transition-colors duration-200 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 dark:text-zinc-800 h-11"
                      >
                        <span className="text-base">
                          Download Via Google Play
                        </span>
                        <span className="sr-only">Ícone google play store</span>
                        <RiGooglePlayFill aria-hidden size={16} />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor&hl=pt-Br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 text-white font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-500 transition-colors duration-200 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-cyan-500 dark:text-zinc-800 h-11"
                      >
                        <span className="text-base">
                          Download Via App Store
                        </span>
                        <span className="sr-only">Ícone app store</span>
                        <IoLogoAppleAppstore aria-hidden size={16} />
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm font-semibold text-zinc-600 dark:text-white">
                        Acesse a Central do Assinante
                      </h3>
                    </div>
                    <a
                      href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent text-base border-2 border-blue-700 text-blue-700 font-semibold w-[14.5rem] px-2 py-2 rounded-md flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-200 dark:hover:bg-cyan-400 focus:outline-none focus-visible:bg-blue-700 focus-visible:text-white dark:focus-visible:bg-cyan-400 dark:text-cyan-400 dark:focus-visible:text-zinc-800 dark:hover:text-zinc-800 dark:border-cyan-400 h-11 dark:"
                    >
                      Central do Assinante
                    </a>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3 bg-blue-700 h-28 p-5 dark:bg-zinc-900">
                  <div className="flex flex-col gap-1 w-fit">
                    <h2 className="text-sm font-semibold text-white">
                      INTERNET FIBRA
                    </h2>
                    <div className="flex flex-col relative">
                      <Separator
                        aria-hidden
                        orientation="horizontal"
                        className="shrink-0 w-10 h-[2px] bg-white rounded-full absolute z-[2]"
                      />
                      <Separator
                        aria-hidden
                        orientation="horizontal"
                        className="shrink-0 w-full h-[1px] bg-zinc-300 z-[1] rounded-full absolute top-[1px] dark:bg-zinc-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-fit">
                    <a
                      href="https://wa.me/5585997362750?text=Olá, estou precisando de um suporte."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200 leading-[14px] dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      Suporte 24H
                    </a>
                    <a
                      href="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-zinc-200 transition-colors duration-200 focus:outline-none focus-visible:text-zinc-200 leading-[14px] dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                    >
                      2ª Via da Fatura
                    </a>
                  </div>
                </div>
              </main>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                prefetch
                href="/Indicate"
                className="text-base font-medium text-zinc-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-500 focus:outline-none dark:focus-visible:text-cyan-500 transition-colors duration-200 select-none focus-visible:text-blue-700"
              >
                Indicação
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item aria-hidden>
            <Separator
              orientation="vertical"
              className="w-[1px] h-6 bg-gray-600 rounded-full dark:bg-white"
            />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              href="/Security"
              className="flex items-center justify-center gap-1 p-1.5 opacity-100 rounded-full focus:outline-none bg-blue-700 hover:bg-blue-500 w-[9.063rem] text-base py-[2px] text-blue-700 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500 group transition-colors duration-200 dark:focus-visible:bg-cyan-500 focus-visible:bg-blue-500 group"
            >
              <span className="text-white text-base dark:text-zinc-900 font-medium dark:font-semibold">
                Segurança
              </span>
              <span className="sr-only">Ícone de escudo</span>
              <ShieldCheck
                aria-hidden
                size={20}
                className="text-blue-700 fill-white dark:fill-zinc-900 dark:text-cyan-400 group-hover:text-blue-500 dark:group-hover:text-cyan-500 group-focus-visible:text-blue-500 dark:group-focus-visible:text-cyan-500"
              />
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="top-[90%] z-[0] flex h-4 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in">
            <div className="relative top-full h-[24px] w-[24px] rotate-45 rounded-tl-sm bg-white shadow-md dark:bg-zinc-800" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div
          className="perspective-[2000px] absolute right-0
         top-full flex items-center justify-center"
        >
          <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white dark:bg-zinc-800 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}
