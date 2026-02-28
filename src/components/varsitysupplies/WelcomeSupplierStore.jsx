// src/components/varsitypharmacy/WelcomePharmacy.jsx
import React from "react";

// Replace these with your real assets
import heroBuilding from "@/assets/Pharmacy/image10.jpg"; // middle image
import managerImg from "@/assets/Pharmacy/Services/image11.jpg"; // right card image (replace)

const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";
const BRAND_GREEN = "#79BD43";

export default function WelcomePharmacy() {
  const hours = [
    { day: "Monday", time: "9 a.m. – 9 p.m." },
    { day: "Tuesday", time: "9 a.m. – 9 p.m." },
    { day: "Wednesday", time: "9 a.m. – 9 p.m." },
    { day: "Thursday", time: "9 a.m. – 9 p.m." },
    { day: "Friday", time: "9 a.m. – 9 p.m." },
    { day: "Saturday", time: "9 a.m. – 5 p.m." },
    { day: "Sunday", time: "10 a.m. – 3 p.m." },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 3 columns on desktop */}
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1.2fr_0.95fr] items-start">
          {/* ================= LEFT ================= */}
          <div className="pt-2">
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight"
              style={{ color: BRAND_RED, fontFamily: "var(--font-heading)" }}
            >
              Welcome to
              <br />
              Staywell Pharmacy
            </h1>

            <div className="mt-10">
              <h3
                className="text-3xl font-extrabold"
                style={{ color: BRAND_GRAY, fontFamily: "var(--font-heading)" }}
              >
                Hours:
              </h3>

              <div className="mt-6 max-w-md">
                <div className="divide-y divide-black/10">
                  {hours.map((h) => (
                    <div key={h.day} className="grid grid-cols-2 py-3 text-[15px]">
                      <div className="font-medium" style={{ color: BRAND_GRAY }}>
                        {h.day}
                      </div>
                      <div className="text-right" style={{ color: BRAND_GRAY }}>
                        {h.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
<div className="mt-10 flex flex-col sm:flex-row gap-4">
  {/* Book Appointment */}
  <a
    href="https://www.bookmypharmacy.com/?noNav=true"
    className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-90 transition w-full sm:w-auto"
    style={{ backgroundColor: BRAND_RED }}
  >
    Book Appointment
  </a>

  {/* Leave Review */}
  <a
    href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold text-white text-sm tracking-wide transition hover:opacity-90 w-full sm:w-auto"
    style={{ backgroundColor: BRAND_GREEN }}
  >
    Leave a Review
  </a>
</div>
            </div>
          </div>

          {/* ================= MIDDLE IMAGE ================= */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-md border border-black/10">
              <img
                src={heroBuilding}
                alt="Staywell Pharmacy building"
                className="w-full h-65 sm:h-80 md:h-95 lg:h-105 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= RIGHT MANAGER CARD ================= */}
          <aside className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-white">
              <div className="p-2">
                <div className="rounded-xl overflow-hidden border border-black/10">
                  <img
                    src={managerImg}
                    alt="Pharmacy Manager"
                    className="w-full h-75 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="px-6 pb-7 pt-4 text-center">
                <div
                  className="text-xl font-extrabold leading-snug"
                  style={{ color: BRAND_GRAY, fontFamily: "var(--font-heading)" }}
                >
                  Pharmacy Manager:
                  <br />
                  Sandip Dave
                </div>

                <p className="mt-4 text-[15px] leading-7 text-left" style={{ color: BRAND_GRAY }}>
                  Sandip is a Prescribing Pharmacist (APA) and certified Diabetes Educator (CDE)
                  and has expertise in compounding, Travel Health, Mental Health, and is a
                  certified PreP prescriber.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}