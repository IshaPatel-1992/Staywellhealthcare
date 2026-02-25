import React, { useEffect, useMemo, useState } from "react";

// Right-side images
import right1 from "@/assets/staywell-home-about.webp";
import right2 from "@/assets/staywell-home-about-01.webp";
import right3 from "@/assets/staywell-home-about-02.webp";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function NewPatientClinic() {
  const rightImages = useMemo(
    () => [
      { src: right1, alt: "Clinic interior1" },
      { src: right2, alt: "Clinic interior2" },
      { src: right3, alt: "Clinic interior3" },
    ],
    []
  );

  const [rightIdx, setRightIdx] = useState(0);

  // Auto-slide (ONLY here, not in child)
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
            <h2 className="relative text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227]">
                Join the Staywell Family
              </span>
            </h2>

            <p className="relative mt-4 text-[#515D72] font-extrabold text-lg leading-7 text-justify">
              We Are Accepting New Patients!
            </p>

            <p className="relative mt-4 text-[#515D72] font-normal text-lg leading-7 text-justify">
              At Staywell, we believe everyone deserves quality healthcare. We’re
              currently accepting new patients and invite you to join our
              community! Our experienced team offers comprehensive care for you
              and your family. Contact us today to book your appointment and
              experience patient-centered care!
            </p>

            <div className="mt-6">
              <a
                href="/varsityclinic/become-a-patient"
                className="
      inline-flex items-center justify-center
      font-(--font-button)
      text-base
      px-8 py-3
      rounded-xl
      bg-[#78BD43] text-white
      transition-all duration-300
      hover:bg-[#DC2227] hover:text-white
      shadow-md hover:shadow-lg
    "
              >
                New Patient Form
              </a>
            </div>

            {/* Mobile: slider below content */}
            <div className="mt-6 lg:hidden">
              <RightImageSlider
                rightImages={rightImages}
                rightIdx={rightIdx}
                setRightIdx={setRightIdx}
              />
            </div>
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

function RightImageSlider({
  rightImages,
  rightIdx,
  setRightIdx,
  fillHeight = false,
}) {
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