import Link from "next/link";

import { CircleArrowRight } from "lucide-react";
import { EmblaCarousel } from "./EmblaCarousel";

export function SectionHome() {
  return (
    <section id="home-section" className="bg-white dark:bg-zinc-900">
      <div className="pb-24 md:py-24 flex flex-col container gap-16">
        <EmblaCarousel />
        <div className="flex flex-col items-center justify-cente gap-5 px-5 xl:px-0">
          <h1
            className="text-2xl sm:text-4xl
             lg:text-5xl font-semibold text-blue-700 dark:text-zinc-100 text-center"
          >
            Não basta estar online, é preciso evoluir. Escolha quem leva
            internet a sério.
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-zinc-500 leading-4 text-center dark:text-zinc-200 md:w-[39.75rem] lg:w-[58.125rem]">
            Na Net Evolution, a tecnologia está sempre à frente. Oferecemos
            internet de alta velocidade com estabilidade e desempenho que
            acompanham sua rotina, seja para estudar, trabalhar ou se divertir.
            Evolua sua conexão com a gente.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais informações para assinar o plano de internet."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 w-36 md:w-44 flex items-center justify-center gap-1 h-8 rounded-full hover:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 transform-colors duration-200 focus:outline-none focus-visible:scale-105"
            >
              <span className="text-white text-sm font-medium dark:text-zinc-800">
                ASSINE AGORA
              </span>
              <CircleArrowRight
                size={14}
                strokeWidth={2.2}
                className="md:size-4 text-white dark:text-zinc-800 dark:group-hover:text-cyan-500 group-hover:text-blue-700 transform-colors duration-200"
              />
            </a>
            <Link
              href="/Plans"
              className="group border border-zinc-500 w-40 md:w-48 hover:border-blue-700 dark:border-white dark:hover:border-cyan-500 flex items-center justify-center gap-1 h-8 rounded-full transform-colors duration-200 focus:outline-none focus-visible:scale-105"
            >
              <span className="text-zinc-500 text-sm font-medium group-hover:text-blue-700 dark:text-white dark:group-hover:text-cyan-500 md:text-base transform-colors duration-200">
                NOSSOS PLANOS
              </span>
              <CircleArrowRight
                size={14}
                strokeWidth={2.2}
                className="md:size-4 text-zinc-500 dark:text-white dark:group-hover:text-cyan-500 group-hover:text-blue-700 transform-colors duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
