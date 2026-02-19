// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocalHospital, MdLocalPharmacy } from "react-icons/md";
import { FaBoxOpen, FaArrowRight } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import logo from "../assets/logo/Staywell-favicon-01.webp";

const STORAGE_KEY = "staywell:selectedLocation"; // "varsity" | "carrington"


export default function Home() {
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) setSaved(existing);
  }, []);

  const selectLocation = (location) => {
    localStorage.setItem(STORAGE_KEY, location);
    setSaved(location);
  };

  const clearSelection = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSaved(null);
  };

  const locations = useMemo(
    () => [
      {
        key: "varsity",
        accent: "green",
        title: "Varsity",
        subtitle: "Clinic • Pharmacy • Homecare Supplies",
        address: "4624 Varsity Drive NW Unit #10, Calgary, AB T3A 2L9",
        badge: "New",
        badgeTone: "bg-staywell-green text-white",
        cta: "Continue to Varsity",
        to: "/varsity/clinic",
        type: "internal",
        chips: ["Clinic", "Pharmacy", "Homecare Supplies"],
      },
      {
        key: "carrington",
        accent: "red",
        title: "Carrington",
        subtitle: "Clinic • Pharmacy • Homecare Supplies",
        address: "59 Carrigton Plz #190, Calgary, AB T3P 1Y3",
        badge: "Current",
        badgeTone: "bg-black/5 text-black/70 border border-black/10",
        cta: "Continue to Carrington",
        href: "https://staywellmedical.ca",
        type: "external",
        chips: ["Clinic", "Pharmacy", "Homecare Supplies"],
      },
    ],
    []
  );

  return (
    <main className="min-h-svh bg-white text-gray-900">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
        {/* Header (logo left) */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Logo + brand */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Staywell"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Right: Title + description */}
          <div className="md:text-right">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-staywell-nav">
              Welcome to Staywell Healthcare
            </h1>

            {/* Dual brand divider */}
            <div className="mt-2 md:ml-auto flex h-1 w-24 overflow-hidden rounded-full">
              <div className="w-2/3" style={{ backgroundColor: "#D81820" }} />
              <div className="w-1/3" style={{ backgroundColor: "#78B840" }} />
            </div>



            <p className="mt-3 max-w-xl md:ml-auto text-sm md:text-base text-black/60">
              Choose your preferred Staywell location to access clinic, pharmacy & homecare supplies.
            </p>

            {/* Saved selection banner */}
            {saved && (
              <div className="mt-5 inline-flex flex-wrap items-center justify-center md:justify-end gap-3 rounded-xl border border-black/10 bg-black/2 px-4 py-2">
                <span className="text-sm text-black/70">
                  Saved selection:
                  <span className="ml-1 font-semibold text-staywell-nav">
                    {saved === "varsity" ? "Varsity" : "Carrington"}
                  </span>
                </span>

                <button
                  onClick={clearSelection}
                  className="text-sm font-semibold text-staywell-red hover:opacity-80 transition"
                >
                  Change
                </button>
              </div>
            )}
          </div>

        </header>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-black/10" />
        <div className="fixed bottom-4 left-4 `z-[9999]` h-10 w-10 bg-staywell-red" />
<div className="fixed bottom-4 left-20 `z-[9999]` h-10 w-10 text-staywell-nav">
  TEST
</div>

        {/* Cards */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => {
const CardInner = (() => {
  const isGreen = loc.accent === "green";
  const accent = isGreen ? "#78B840" : "#D81820";

  return (


    <div
      className="group relative rounded-3xl bg-white p-7 md:p-9 border border-black/10
      shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]
      transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-22px_rgba(0,0,0,0.45)]"
      style={{
        boxShadow: `0 10px 30px -18px rgba(0,0,0,0.35)`,
        outline: `1px solid ${accent}55`, // subtle colored ring
        outlineOffset: "0px",
      }}
    >


      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold">{loc.title}</h2>
          <p className="mt-2 text-black/60">{loc.subtitle}</p>
        </div>

        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${loc.badgeTone}`}>
          {loc.badge}
        </span>
      </div>

      {/* Feature pills */}
      <div className="mt-6 flex flex-wrap gap-3">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/2 px-3 py-2 text-sm text-black/75">
          <MdLocalHospital />
          Clinic
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/2 px-3 py-2 text-sm text-black/75">
          <MdLocalPharmacy />
          Pharmacy
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/2 px-3 py-2 text-sm text-black/75">
          <FaBoxOpen />
          Homecare
        </div>
      </div>

      {/* Address */}
      <div className="mt-6 flex items-start gap-3 text-sm text-black/60">
        <HiMapPin className="mt-0.5 shrink-0 text-staywell-gray" size={18} />
        <div>{loc.address}</div>
      </div>

      {/* Chips */}
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        {loc.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-black/10 bg-black/2 px-3 py-1 text-black/70"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* CTA row */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {/* progress */}
        <div className="h-2 w-24 rounded-full bg-black/5 overflow-hidden">
          <div style={{ backgroundColor: accent }} className="h-full w-2/3" />
        </div>

        {/* CTA button */}
        <div
          className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 font-semibold transition"
          style={{
            borderColor: `${accent}33`,
            backgroundColor: `${accent}0D`,
            color: accent,
          }}
        >
          {loc.cta}
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* corner ring */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
    </div>
  );
})();



            if (loc.type === "internal") {
              return (
                <Link
                  key={loc.key}
                  to={loc.to}
                  onClick={() => selectLocation(loc.key)}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-staywell-red rounded-3xl"
                >
                  {CardInner}
                </Link>
              );
            }

            return (
              <a
                key={loc.key}
                href={loc.href}
                onClick={() => selectLocation(loc.key)}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-staywell-red rounded-3xl"
                rel="noreferrer"
              >
                {CardInner}
              </a>
            );
          })}
        </section>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs md:text-sm text-black/50">
          Tip: Your selection is saved for next time. You can change it anytime
          from the homepage.
        </div>
      </div>
    </main>
  );
}
