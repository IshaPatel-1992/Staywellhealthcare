import React from "react";
import bgImg from "@/assets/Clinic/Carrington/staywell-home-cta-parallax.webp";

export default function BookanAppointmentClinic() {
  // TOP: bowl (white comes DOWN into the section)
  const topBowl = "M0,60 Q720,120 1440,60 L1440,0 L0,0 Z";

  // BOTTOM: reverse bowl (white comes UP into the section)
  const bottomBowl = "M0,60 Q720,5 1440,60 L1440,120 L0,120 Z";

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="relative overflow-hidden bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Optional subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/5" />

        {/* TOP ARC (bowl) */}
        <div className="pointer-events-none absolute top-0 left-0 w-full">
          <svg
            className="block w-full h-20 sm:h-24 md:h-28"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={topBowl} fill="white" />
          </svg>
        </div>

        {/* BOTTOM ARC (reverse bowl) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <svg
            className="block w-full h-20 sm:h-24 md:h-28"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={bottomBowl} fill="white" />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-24 md:py-28">
          <div className="max-w-xl">
            <h2 className="relative text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227]">
                Book An Appointment
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-black/80">

            </p>
            <p className="relative mt-4 text-[#000000] font-normal text-xl leading-[2.09rem]">
              Your health matters—call us today to take charge of your well-being!
            </p>

            <div className="pt-5 mx-10.25 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:18254143933"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold bg-red-600 text-white shadow-md hover:bg-red-700 transition"
              >
                (825) 414-3933
              </a>

              <a
                href="varsityclinic/become-a-patient"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold bg-white text-red-600 shadow-md hover:bg-gray-100 transition"
              >
                Become a Patient
              </a>
            </div>
          </div>
        </div>

        {/* Padding so bottom curve doesn’t overlap content */}
        <div className="h-10 sm:h-12 md:h-16" />
      </div>
    </section>
  );
}