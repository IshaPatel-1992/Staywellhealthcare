import React, { useEffect, useMemo, useState } from "react";
import bannerImg1 from "@/assets/Varsity/staywell-clinic-hero-1920x900.webp";
import bannerImg2 from "@/assets/Varsity/Welcoming1.png";
import bannerImg3 from "@/assets/Varsity/ExteriororInterior.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroClinic() {
  const slides = useMemo(
    () => [
      {
        src: bannerImg1,
        alt: "Healthcare office background",
        fit: "object-cover object-[50%_55%]",
        title: "Caring for You",
        subtitle: "A community clinic committed to your well-being.",
      },
      {
        src: bannerImg2,
        alt: "Clinic team and care background",
        fit: "object-cover object-[50%_42%] sm:object-[50%_46%] md:object-[50%_50%]",
        title: "Personalized Medical Care",
        subtitle: "Thoughtful support focused on every patient and every visit.",
      },
      {
        src: bannerImg3,
        alt: "Exterior or interior",
        fit: "object-cover object-[50%_42%] sm:object-[50%_46%] md:object-[50%_50%]",
        title: "Modern Care, Trusted Team",
        subtitle: "Welcoming spaces and dependable healthcare close to home.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, [index]);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section
  id="home"
  className={`group relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 h-[60vh] sm:h-[66vh] md:h-[72vh] lg:h-[70vh] ${slides[index].bg}`}
>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={[
            "absolute inset-0 h-full w-full transition-opacity duration-1000",
            s.fit,
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 `z-1` bg-black/18 sm:bg-black/12" />

      {/* arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-3 sm:px-4 lg:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/35 active:scale-95 md:h-12 md:w-12"
          aria-label="Previous Slide"
          type="button"
        >
          <FaChevronLeft className="text-base md:text-lg" />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/35 active:scale-95 md:h-12 md:w-12"
          aria-label="Next Slide"
          type="button"
        >
          <FaChevronRight className="text-base md:text-lg" />
        </button>
      </div>

      {/* content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <div
            className={[
              "relative w-full max-w-70 sm:max-w-lg lg:max-w-2xl text-left transition-all duration-700 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            ].join(" ")}
          >
            <div className="absolute -inset-x-3 -inset-y-4 sm:-inset-x-6 sm:-inset-y-6 lg:-inset-x-8 lg:-inset-y-8 rounded-4xl bg-white/45 blur-2xl pointer-events-none" />

            <h1 className="relative text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="font-(--font-heading) text-[#DC2227] drop-shadow-[0_4px_12px_rgba(0,0,0,0.20)]">
                {slides[index].title}
              </span>
            </h1>

            <p className="relative mt-2 text-sm font-medium leading-6 text-[#374151] sm:mt-4 sm:text-lg sm:leading-8 md:text-xl lg:text-2xl">
              {slides[index].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}