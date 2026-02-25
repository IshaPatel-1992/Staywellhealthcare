import React, { useEffect, useMemo, useState } from "react";
import bannerImg1 from "@/assets/staywell-home-hero-02.webp";
import bannerImg2 from "@/assets/staywell-home-hero-3.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroClinic() {
  const slides = useMemo(
    () => [
      { src: bannerImg1, alt: "Healthcare office background" },
      { src: bannerImg2, alt: "Clinic team and care background" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, [index]);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section
      id="home"
      className="group relative h-[92vh] md:h-[96vh] pt-24 md:pt-28 overflow-hidden"
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={[
            "absolute inset-0 w-full h-full object-cover object-[50%_15%] transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="
            pointer-events-auto
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-transparent
            border-2 border-white/80
            text-[#DC2227]
            flex items-center justify-center
            backdrop-blur-sm
            transition-all duration-300
            hover:bg-white/20 hover:border-white hover:scale-110
            opacity-100 md:opacity-0 md:group-hover:opacity-100
          "
          aria-label="Previous Slide"
          type="button"
        >
          <FaChevronLeft className="text-base md:text-lg" />
        </button>

        <button
          onClick={nextSlide}
          className="
            pointer-events-auto
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-transparent
            border-2 border-white/80
            text-[#DC2227]
            flex items-center justify-center
            backdrop-blur-sm
            transition-all duration-300
            hover:bg-white/20 hover:border-white hover:scale-110
            opacity-100 md:opacity-0 md:group-hover:opacity-100
          "
          aria-label="Next Slide"
          type="button"
        >
          <FaChevronRight className="text-base md:text-lg" />
        </button>
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
          <div
            className={[
              "relative w-full max-w-xl text-left transition-all duration-700 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <div className="absolute -inset-x-10 -inset-y-12 bg-white/55 blur-2xl rounded-[999px] pointer-events-none" />

            <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227] drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                Caring for You
              </span>
            </h1>

            <p className="relative mt-4 text-[#515D72] font-normal text-2xl leading-[2.09rem]">
              A Community Clinic Committed to Your Well-Being
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}