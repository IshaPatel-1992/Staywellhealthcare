// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocalHospital, MdLocalPharmacy } from "react-icons/md";
import { FaBoxOpen, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import logo from "../assets/logo/Staywell-favicon-01.webp";

const STORAGE_KEY = "staywell:selectedLocation"; // "varsity" | "carrington"

// Brand colors
const BRAND_GREEN = "#79BD43";
const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";

function MedicalCornerArt({ accent = "#79BD43" }) {
  const red = "#DC2227";
  const green = "#79BD43";
  const gray = "#515D72";

  // Stronger visibility controls
  const LINE_OP = 0.55;   // stroke visibility
  const FILL_OP = 0.22;   // shape fill visibility
  const WASH_OP = 0.12;   // soft corner wash

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* TOP-RIGHT CLUSTER */}
      <svg
        className="absolute -top-8 -right-8 h-52 w-52 opacity-90"
        viewBox="0 0 240 240"
        fill="none"
      >
        {/* corner wash */}
        <circle cx="175" cy="70" r="85" fill={red} opacity={WASH_OP} />

        {/* medical cross */}
        <g transform="translate(150 28) rotate(12)">
          <rect x="0" y="18" width="42" height="12" rx="6" fill={accent} opacity={FILL_OP} />
          <rect x="15" y="0" width="12" height="48" rx="6" fill={accent} opacity={FILL_OP} />
          <rect x="-4" y="14" width="50" height="20" rx="10" stroke={gray} strokeWidth="4" opacity={0.25} />
        </g>

        {/* stethoscope */}
        <path
          d="M150 75 C150 105, 190 105, 190 138 C190 170, 150 176, 138 150"
          stroke={gray}
          strokeWidth="10"
          strokeLinecap="round"
          opacity={LINE_OP}
        />
        <path
          d="M150 75 C135 52, 112 48, 98 62"
          stroke={gray}
          strokeWidth="10"
          strokeLinecap="round"
          opacity={LINE_OP}
        />
        <path
          d="M150 75 C165 52, 188 48, 202 62"
          stroke={gray}
          strokeWidth="10"
          strokeLinecap="round"
          opacity={LINE_OP}
        />
        <circle cx="138" cy="150" r="16" fill={accent} opacity={0.55} />
        <circle cx="138" cy="150" r="9" fill="white" opacity={0.55} />

        {/* capsule pill */}
        <g transform="translate(58 78) rotate(-18)">
          <rect x="0" y="0" width="74" height="28" rx="14" fill={green} opacity={0.35} />
          <rect x="37" y="0" width="37" height="28" rx="14" fill={red} opacity={0.20} />
          <line x1="37" y1="4" x2="37" y2="24" stroke="white" opacity="0.35" />
          <rect x="0" y="0" width="74" height="28" rx="14" stroke={gray} strokeWidth="4" opacity={0.18} />
        </g>

        {/* small tablet + sparkle dots */}
        <circle cx="95" cy="145" r="10" fill={accent} opacity={0.35} />
        <circle cx="78" cy="130" r="4" fill={gray} opacity={0.35} />
        <circle cx="210" cy="110" r="3.5" fill={gray} opacity={0.35} />
      </svg>

      {/* BOTTOM-LEFT CLUSTER */}
      <svg
        className="absolute -bottom-10 -left-10 h-56 w-56 opacity-90"
        viewBox="0 0 260 260"
        fill="none"
      >
        {/* corner wash */}
        <circle cx="85" cy="190" r="95" fill={green} opacity={WASH_OP} />

        {/* RX card */}
        <g transform="translate(26 150) rotate(10)">
          <rect x="0" y="0" width="92" height="62" rx="14" fill={gray} opacity={0.16} />
          <path
            d="M18 18 h50 M18 32 h60 M18 46 h38"
            stroke={gray}
            strokeWidth="7"
            strokeLinecap="round"
            opacity={0.35}
          />
          <text
            x="64"
            y="24"
            fontSize="20"
            fontWeight="800"
            fill={red}
            opacity={0.35}
          >
            Rx
          </text>
        </g>

        {/* syringe */}
        <g transform="translate(120 70) rotate(-28)">
          {/* body */}
          <rect x="0" y="52" width="96" height="28" rx="10" fill={accent} opacity={0.30} />
          <rect x="14" y="44" width="68" height="44" rx="12" fill="white" opacity={0.40} />
          <rect x="14" y="44" width="68" height="44" rx="12" stroke={gray} strokeWidth="4" opacity={0.22} />

          {/* plunger */}
          <rect x="-14" y="58" width="22" height="16" rx="8" fill={gray} opacity={0.35} />
          <rect x="-34" y="52" width="22" height="28" rx="8" fill={gray} opacity={0.25} />

          {/* needle */}
          <path d="M96 66 L132 66" stroke={gray} strokeWidth="6" strokeLinecap="round" opacity={0.45} />
          <path d="M132 66 L148 60" stroke={gray} strokeWidth="4" strokeLinecap="round" opacity={0.4} />

          {/* markings */}
          <path d="M30 52 v28 M46 52 v28 M62 52 v28" stroke={gray} strokeWidth="4" opacity={0.25} />
        </g>

        {/* extra pill + plus icon near bottom-left */}
        <g transform="translate(44 110) rotate(18)">
          <rect x="0" y="0" width="62" height="24" rx="12" fill={red} opacity={0.20} />
          <rect x="31" y="0" width="31" height="24" rx="12" fill={green} opacity={0.28} />
          <line x1="31" y1="4" x2="31" y2="20" stroke="white" opacity="0.35" />
        </g>

        <g transform="translate(38 70)">
          <rect x="0" y="12" width="34" height="10" rx="5" fill={accent} opacity={0.22} />
          <rect x="12" y="0" width="10" height="34" rx="5" fill={accent} opacity={0.22} />
        </g>
      </svg>
    </div>
  );
}

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
        cta: "Enter Varsity Location",
        to: "/varsityclinic",
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
        cta: "Enter Carrington",
        href: "https://staywellmedical.ca",
        type: "external",
        chips: ["Clinic", "Pharmacy", "Homecare Supplies"],
      },
    ],
    []
  );

  return (
    <main className="relative min-h-svh bg-white text-gray-900 overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-6 md:py-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Staywell"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          <div className="md:text-right">
            {/* Social Icons */}
            <div className="mb-2 flex justify-start md:justify-end">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-staywell-nav hover:opacity-80 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="text-staywell-nav hover:opacity-80 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="#"
                  className="text-staywell-nav hover:opacity-80 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
              </div>
            </div>

            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-staywell-nav">
              Welcome to Staywell Healthcare
            </h1>

            <div className="mt-2 md:ml-auto flex h-1 w-20 overflow-hidden rounded-full">
              <div className="w-2/3" style={{ backgroundColor: BRAND_RED }} />
              <div className="w-1/3" style={{ backgroundColor: BRAND_GREEN }} />
            </div>

            <p className="mt-2 text-[#515D72] font-normal text-sm md:text-base leading-relaxed">
              Select your location to access trusted medical care, pharmacy
              services, and homecare supplies — all under one roof.
            </p>

            {/* Saved selection banner (optional)
            {saved && (
              <div className="mt-3 inline-flex flex-wrap items-center justify-center md:justify-end gap-3 rounded-xl border border-black/10 bg-white/70 px-3 py-2">
                <span className="text-xs md:text-sm text-black/70">
                  Saved selection:
                  <span className="ml-1 font-semibold text-staywell-nav">
                    {saved === "varsity" ? "Varsity" : "Carrington"}
                  </span>
                </span>

                <button
                  onClick={clearSelection}
                  className="text-xs md:text-sm font-semibold text-staywell-red hover:opacity-80 transition"
                >
                  Change
                </button>
              </div>
            )} */}
          </div>
        </header>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-black/10" />

        {/* Cards */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => {
            const isGreen = loc.accent === "green";
            const accent = isGreen ? BRAND_GREEN : BRAND_RED;

            const CardInner = (
              <div
                className="group relative overflow-hidden rounded-3xl bg-white p-7 md:p-9 border border-black/10
                shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]
                transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-22px_rgba(0,0,0,0.45)]"
                style={{
                  outline: `1px solid ${accent}55`,
                  outlineOffset: "0px",
                }}
              >
              <MedicalCornerArt accent={accent} />
                {/* Content must stay above decorative shapes */}
                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold">
                        {loc.title}
                      </h2>
                      <p className="mt-2 text-black/60">{loc.subtitle}</p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${loc.badgeTone}`}
                    >
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
                    <HiMapPin
                      className="mt-0.5 shrink-0 text-staywell-gray"
                      size={18}
                    />
                    <div>{loc.address}</div>
                  </div>

                  {/* CTA row */}
                  <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* progress */}
                    <div className="h-2 w-24 rounded-full bg-black/5 overflow-hidden">
                      <div
                        style={{ backgroundColor: accent }}
                        className="h-full w-2/3"
                      />
                    </div>

                    {/* CTA button + microcopy */}
                    <div className="w-full md:w-auto">
                      <div
                        className="
                          relative w-full md:w-auto
                          inline-flex items-center justify-center gap-2
                          rounded-2xl border
                          px-5 py-3 md:py-3.5
                          text-sm md:text-base
                          font-semibold
                          transition duration-300
                          hover:-translate-y-px
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                        "
                        style={{
                          borderColor: `${accent}33`,
                          backgroundColor: `${accent}0D`,
                          color: accent,
                          boxShadow: "0 10px 30px -24px rgba(0,0,0,0.35)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 18px 46px -28px ${accent}99, 0 10px 30px -24px rgba(0,0,0,0.35)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 10px 30px -24px rgba(0,0,0,0.35)";
                        }}
                      >
                        <span
                          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ boxShadow: `0 0 0 6px ${accent}12` }}
                        />

                        <span className="relative">{loc.cta}</span>

                        <span className="relative">
                          {loc.type === "external" ? (
                            <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-0.5" />
                          ) : (
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                          )}
                        </span>
                      </div>

                      <div className="mt-2 text-xs md:text-sm text-black/50">
                        {loc.key === "varsity"
                          ? "Opens StaywellHealthcare (new site)"
                          : "Opens StaywellMedical.ca"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* corner ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
              </div>
            );

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
      {/* =========================================
    Designer Wave Footer
========================================= */}
<footer className="relative mt-20">
  {/* Wave Shape */}
  <div className="relative">
    <svg
      viewBox="0 0 1440 120"
      className="w-full h-20 md:h-24"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 
           C120,80 240,0 360,40 
           C480,80 600,0 720,40 
           C840,80 960,0 1080,40 
           C1200,80 1320,0 1440,40 
           L1440,120 L0,120 Z"
        fill={BRAND_RED}
      />
    </svg>
  </div>

  {/* Footer Content */}
  <div className="bg-[#DC2227] text-white text-center px-6 py-6">
    
    {/* Social Icons */}
    <div className="flex justify-center gap-6 mb-4">
      <a href="#" className="hover:opacity-80 transition">
        <FaInstagram size={18} />
      </a>
      <a href="#" className="hover:opacity-80 transition">
        <FaLinkedinIn size={18} />
      </a>
      <a href="#" className="hover:opacity-80 transition">
        <FaFacebookF size={18} />
      </a>
    </div>

    {/* Copyright */}
    <div className="text-sm md:text-base font-medium">
      © Staywell healthcare 2026
    </div>
  </div>
</footer>
    </main>
  );
}