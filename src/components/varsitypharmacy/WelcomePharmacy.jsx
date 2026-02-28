import React, { useEffect, useMemo, useState } from "react";

// Staff placeholders
import staff1 from "@/assets/staywell-home-doc-placeholder-man.webp";
import staff2 from "@/assets/staywell-home-doc-placeholder-femal.webp";

// Right-side images
import right1 from "@/assets/staywell-home-about.webp";
import right2 from "@/assets/staywell-home-about-01.webp";
import right3 from "@/assets/staywell-home-about-02.webp";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function WelcomeClinic() {
  const bookTo = "/varsityclinic/book";
  const callTo = "tel:+14031234567";

  // ✅ Add per-staff CTA condition here:
  // cta: "book" | "call"
  const team = useMemo(
    () => [
      { name: "Dr. Aisha Khan", img: staff1, cta: "book" },
      { name: "Dr. Michael Chen", img: staff2, cta: "call" },
      { name: "Sarah Patel, RPh", img: staff1, cta: "book" },
      { name: "Dr. Neha Sharma", img: staff2, cta: "call" },
    ],
    []
  );

  const rightImages = useMemo(
    () => [
      { src: right1, alt: "Clinic interior1" },
      { src: right2, alt: "Clinic interior2" },
      { src: right3, alt: "Clinic interior3" },
    ],
    []
  );

  const [rightIdx, setRightIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRightIdx((p) => (p + 1) % rightImages.length);
    }, 4200);
    return () => clearInterval(id);
  }, [rightImages.length]);

  return (
    <section className="py-14 md:py-18 lg:py-20 bg-linear-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-stretch">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">

            <h1 className="relative text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227]">
                Welcome to Staywell Pharmacy
              </span>
            </h1>


            <p className="relative mt-4 text-[#515D72] font-normal text-lg leading-7 text-justify">
              Welcome to Staywell, where your health and happiness come first. Our clinic provides a safe, inviting space for individuals and families seeking comprehensive care.
            </p>

            <p className="relative mt-4 text-[#515D72] font-normal text-lg leading-7 text-justify">
              With a dedicated team, we offer preventive services and chronic disease management to support your long-term wellness.
            </p>

            {/* Mobile: show image BEFORE staff */}
            <div className="mt-6 lg:hidden">
              <RightImageSlider
                rightImages={rightImages}
                rightIdx={rightIdx}
                setRightIdx={setRightIdx}
              />
            </div>

            {/* ✅ 3-up staff carousel (no dots) */}
            <h4 className="relative text-2xl md:text-2xl font-bold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227] drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
              <StaffCarousel3Up items={team} bookTo={bookTo} callTo={callTo} />
              </span>
            </h4>

            <div className="flex-1" />
          </div>

          {/* Desktop right image */}
          <div className="hidden lg:flex h-full">
            <RightImageSlider
              rightImages={rightImages}
              rightIdx={rightIdx}
              setRightIdx={setRightIdx}
              fillHeight
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RightImageSlider({ rightImages, rightIdx, setRightIdx, fillHeight = false }) {
  useEffect(() => {
    const id = setInterval(() => {
      setRightIdx((p) => (p + 1) % rightImages.length);
    }, 4200);
    return () => clearInterval(id);
  }, [rightImages.length, setRightIdx]);

  const prev = () =>
    setRightIdx((p) => (p - 1 + rightImages.length) % rightImages.length);

  const next = () => setRightIdx((p) => (p + 1) % rightImages.length);

  return (
    <div className={["relative w-full", fillHeight ? "h-full" : ""].join(" ")}>
      <div className="absolute -inset-4 bg-emerald-200/30 blur-2xl rounded-3xl" />

      <div
        className={[
          "relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white",
          fillHeight ? "h-full" : "h-64 sm:h-72 md:h-80 lg:h-115 xl:h-140",
        ].join(" ")}
      >
        {rightImages.map((img, i) => (
          <img
            key={img.alt + i}
            src={img.src}
            alt={img.alt}
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              i === rightIdx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className={[
            "absolute left-4 top-1/2 -translate-y-1/2 z-10",
            "h-11 w-11 rounded-full bg-white/95 shadow-lg",
            "flex items-center justify-center",
            "hover:bg-white transition",
          ].join(" ")}
        >
          <FaChevronLeft className="text-[#DC2227] text-lg" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className={[
            "absolute right-4 top-1/2 -translate-y-1/2 z-10",
            "h-11 w-11 rounded-full bg-white/95 shadow-lg",
            "flex items-center justify-center",
            "hover:bg-white transition",
          ].join(" ")}
        >
          <FaChevronRight className="text-[#DC2227] text-lg" />
        </button>
      </div>
    </div>
  );
}

function StaffCarousel3Up({ items, bookTo, callTo }) {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible cards
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 1024) return 2;
      return 3;
    };

    const onResize = () => setVisibleCount(compute());
    setVisibleCount(compute());

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto rotate
  useEffect(() => {
    const id = setInterval(() => {
      setStart((p) => (p + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  const visible = useMemo(() => {
    const out = [];
    for (let k = 0; k < visibleCount; k++) {
      out.push({ ...items[(start + k) % items.length], _k: k });
    }
    return out;
  }, [items, start, visibleCount]);

  return (
    <div className="mt-6">
      <div className="grid gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((m) => {
          const isCall = m.cta === "call";
          const href = isCall ? callTo : bookTo;
          const label = isCall ? "Call Now" : "Book Now";

          return (
            <div
              key={`${m.name}-${m._k}`}
              className="
                rounded-2xl overflow-hidden bg-white
                border border-gray-300
                hover:border-[#DC2227]
                shadow-sm hover:shadow-lg
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-60 sm:h-64 lg:h-72 object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />
              </div>

              {/* Content */}
              <div className="px-6 pt-5 pb-6">
                {/* Bigger Name */}
                <div className="font-extrabold text-[#DC2227] text-lg sm:text-lg text-center leading-snug">
                  {m.name}
                </div>

                {/* ✅ Single Link (NOT button) */}
                <div className="mt-4 flex justify-center">
                  <a
                    href={href}
                    className="
      text-base font-bold
      text-[#79BD43]
      underline underline-offset-4
      hover:text-[#DC2227]
      transition
    "
                  >
                    {label}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}