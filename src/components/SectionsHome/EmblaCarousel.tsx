"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CirclePause, CirclePlay } from "lucide-react";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export function EmblaCarousel() {
  const autoplayDelay = 3000;
  const autoplayRef = useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ]);

  const [progressKey, setProgressKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current.play();
    setIsPlaying(true);

    const onSlideChange = () => {
      setProgressKey((prev) => prev + 1);
    };
    emblaApi.on("select", onSlideChange);

    return () => {
      autoplayRef.current.stop();
      setIsPlaying(false);
      emblaApi.off("select", onSlideChange);
    };
  }, [emblaApi]);

  // Para parar autoplay ao clicar/toque no slide
  const onPointerDown = useCallback(() => {
    if (!emblaApi) return;
    if (isPlaying) {
      autoplayRef.current.stop();
      setIsPlaying(false);
      setProgressKey(0);
    }
  }, [emblaApi, isPlaying]);

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;

    if (isPlaying) {
      autoplayRef.current.stop();
      setIsPlaying(false);
      setProgressKey(0);
    } else {
      autoplayRef.current.play();
      setIsPlaying(true);
      setProgressKey((prev) => prev + 1);
    }
  }, [emblaApi, isPlaying]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-full mx-auto">
      {/* Adicione onPointerDown aqui */}
      <div
        className="embla__viewport overflow-hidden"
        ref={emblaRef}
        onPointerDown={onPointerDown}
      >
        <div className="embla__container flex">
          {/* Slide 1 */}
          <div
            className="embla__slide flex-shrink-0 bg-blue-700 w-full h-[495px] flex flex-col items-center justify-center bg-cover bg-center xl:rounded-lg"
            style={{ backgroundImage: "url('/background1.jpg')" }}
          >
            <img
              src="/image1.png"
              alt="Imagem Slide 1"
              className="mb-4 max-w-xs"
            />
            <h2 className="text-white text-center text-3xl font-bold">
              Título do Slide 1
            </h2>
            <p className="text-white text-center max-w-md mt-2">
              Texto do slide 1, editável em HTML.
            </p>
          </div>

          {/* Slide 2 */}
          <div
            className="embla__slide flex-shrink-0 bg-blue-800 w-full h-[495px] flex flex-col items-center justify-center bg-cover bg-center xl:rounded-lg"
            style={{ backgroundImage: "url('/background2.jpg')" }}
          >
            <img
              src="/image2.png"
              alt="Imagem Slide 2"
              className="mb-4 max-w-xs"
            />
            <h2 className="text-white text-center text-3xl font-bold">
              Título do Slide 2
            </h2>
            <p className="text-white text-center max-w-md mt-2">
              Texto do slide 2, editável em HTML.
            </p>
          </div>

          {/* Slide 3 */}
          <div
            className="embla__slide flex-shrink-0 bg-blue-900 w-full h-[495px] flex flex-col items-center justify-center bg-cover bg-center xl:rounded-lg"
            style={{ backgroundImage: "url('/background3.jpg')" }}
          >
            <img
              src="/image3.png"
              alt="Imagem Slide 3"
              className="mb-4 max-w-xs"
            />
            <h2 className="text-white text-center text-3xl font-bold">
              Título do Slide 3
            </h2>
            <p className="text-white text-center max-w-md mt-2">
              Texto do slide 3, editável em HTML.
            </p>
          </div>

          {/* Adicione mais slides aqui seguindo esse padrão */}
        </div>
      </div>

      <div className="embla__controls flex items-center justify-between mt-4 px-5 xl:px-0">
        <div className="embla__buttons flex gap-2">
          <button
            className="embla__button embla__button--prev text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200 focus:outline-none dark:focus-visible:text-zinc-300 focus-visible:text-blue-500"
            onClick={scrollPrev}
            type="button"
            aria-label="Previous slide"
          >
            <IoIosArrowDropleft size={32} className="md:size-9" />
          </button>
          <button
            className="embla__button embla__button--next text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200 focus:outline-none dark:focus-visible:text-zinc-300 focus-visible:text-blue-500"
            onClick={scrollNext}
            type="button"
            aria-label="Next slide"
          >
            <IoIosArrowDropright size={32} className="md:size-9" />
          </button>
        </div>

        {isPlaying && (
          <div className="embla__progress relative w-36 h-2 bg-transparent border dark:border-zinc-600 border-zinc-400 rounded overflow-hidden">
            <div
              key={progressKey}
              className="embla__progress__bar absolute top-0 left-0 h-full dark:bg-white bg-blue-700"
              style={{
                animationDuration: `${autoplayDelay}ms`,
              }}
            />
          </div>
        )}

        <button
          type="button"
          className={`embla__play dark:text-white text-blue-700 hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200 focus:outline-none dark:focus-visible:text-zinc-300 focus-visible:text-blue-500`}
          onClick={toggleAutoplay}
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? (
            <CirclePause size={32} strokeWidth={1.4} className="md:size-9" />
          ) : (
            <CirclePlay size={32} strokeWidth={1.4} className="md:size-9" />
          )}
        </button>
      </div>
    </div>
  );
}
