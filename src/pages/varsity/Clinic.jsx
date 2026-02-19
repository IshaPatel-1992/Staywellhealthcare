// src/pages/varsity/Clinic.jsx
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import bannerImg1 from "../../assets/staywell-home-hero-02.webp";
import bannerImg2 from "../../assets/staywell-home-hero-3.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Clinic() {
  const tabs = useMemo(
    () => [
      { key: "clinic", label: "Clinic", to: "/varsity/clinic" },
      { key: "pharmacy", label: "Pharmacy", to: "/varsity/pharmacy" },
      { key: "supplies", label: "Homecare Supplies", to: "/varsity/supplies" },
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
        className="relative h-[92vh] md:h-[96vh] pt-24 md:pt-28 overflow-hidden"
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

        {/* LEFT Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20
             w-12 h-12 rounded-full
             bg-[#DC2227]/90 text-white
             flex items-center justify-center
             shadow-xl backdrop-blur-md
             hover:bg-[#DC2227] hover:scale-110
             transition duration-300"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-lg" />
        </button>

        {/* RIGHT Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20
             w-12 h-12 rounded-full
             bg-[#DC2227]/90 text-white
             flex items-center justify-center
             shadow-xl backdrop-blur-md
             hover:bg-[#DC2227] hover:scale-110
             transition duration-300"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-lg" />
        </button>


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

              <p className="relative mt-4 text-lg md:text-2xl text-[#515D72] font-medium">
                A community clinic committed to your well-being
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs (optional) */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2">
          {tabs.map((t) => (
            <NavLink
              key={t.key}
              to={t.to}
              className={({ isActive }) =>
                [
                  "px-4 py-2 rounded-full text-sm font-semibold transition",
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200",
                ].join(" ")
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
      </section>
    </main>
  );
}
