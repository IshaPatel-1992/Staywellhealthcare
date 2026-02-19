// src/pages/varsity/Clinic.jsx
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import bannerImg1 from "../../assets/staywell-home-hero-02.webp";
import bannerImg2 from "../../assets/staywell-home-hero-3.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Clinic() {
  const tabs = useMemo(
    () => [
      { key: "clinic", label: "Staywell Medical Clinic", to: "/varsity/clinic" },
      { key: "pharmacy", label: "Staywell Pharmacy", to: "/varsity/pharmacy" },
      { key: "supplies", label: "Staywell Homecare", to: "/varsity/supplies" },
    ],
    []
  );

  const slides = useMemo(
    () => [
      { src: bannerImg1, alt: "Healthcare office background" },
      { src: bannerImg2, alt: "Clinic team and care background" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // ✅ Slide rotation
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  // ✅ Fade-up animation (re-trigger on every slide change)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };


  return (
    <main className="min-h-svh bg-white text-gray-900">
      {/* HERO */}
      <section
  id="home"
  className="group relative h-[92vh] md:h-[96vh] pt-24 md:pt-28 overflow-hidden"
>
        {/* Background images (crossfade) */}
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

        {/* Arrow Controls (Red ring style) */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none">
          {/* LEFT */}
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

          {/* RIGHT */}
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



        {/* Optional soft left gradient (helps readability) 
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" /> */}

        {/* Content wrapper (keeps text on top + aligned like staywell) */}
        <div className="relative z-10 h-full">
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
            {/* ✅ Text Overlay (with soft white blur glow, not a box) */}
            <div
              className={[
                "relative w-full max-w-xl text-left transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              {/* Soft blur glow behind text (no visible box edges) */}
              <div className="absolute -inset-x-10 -inset-y-12 bg-white/55 blur-2xl rounded-[999px] pointer-events-none" />

              <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-[#DC2227] drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                  Caring for you
                </span>
              </h1>

              <h3 className="relative mt-4 text-lg md:text-2xl text-[#515D72] font-medium">
                A community clinic committed to your well-being
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* BELOW HERO CTA BUTTONS (Staywell style) */}
      <section className="bg-[#DC2227]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tabs.map((t) => (
              <NavLink
                key={t.key}
                to={t.to}
                className={({ isActive }) =>
                  [
                    // shape + sizing
                    "rounded-2xl text-center",
                    "px-8 py-6",                 // ✅ consistent padding
                    "min-h-21 flex items-center justify-center", // ✅ same height
                    // typography
                    "text-xl md:text-2xl font-extrabold tracking-tight",
                    "transition-all duration-300",
                    // borders
                    "border-2 border-white/25",
                    // colors (your spec)
                    isActive
                      ? "bg-white text-[#DC2227]"
                      : "bg-[#79BD43] text-white hover:bg-white hover:text-[#DC2227]",
                    // subtle polish
                    "shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                  ].join(" ")
                }
              >
                {t.label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
