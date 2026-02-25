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

function MedicalCornerArt({ accent = BRAND_GREEN }) {
  const red = BRAND_RED;
  const green = BRAND_GREEN;
  const gray = BRAND_GRAY;

  // ✅ Darker / more visible batch
  const LINE_OP = 0.78; // strokes more visible
  const FILL_OP = 0.34; // fills stronger
  const WASH_OP = 0.18; // corner wash stronger
  const DOT_OP = 0.55;  // dots more visible

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* TOP-RIGHT CLUSTER */}
      <svg
        className="absolute -top-10 -right-10 h-60 w-60 opacity-100"
        viewBox="0 0 240 240"
        fill="none"
      >
        {/* corner wash */}
        <circle cx="175" cy="70" r="92" fill={red} opacity={WASH_OP} />

        {/* medical cross */}
        <g transform="translate(150 28) rotate(12)">
          <rect x="0" y="18" width="42" height="12" rx="6" fill={accent} opacity={FILL_OP} />
          <rect x="15" y="0" width="12" height="48" rx="6" fill={accent} opacity={FILL_OP} />
          <rect x="-4" y="14" width="50" height="20" rx="10" stroke={gray} strokeWidth="4" opacity={0.28} />
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
        <circle cx="138" cy="150" r="16" fill={accent} opacity={0.70} />
        <circle cx="138" cy="150" r="9" fill="white" opacity={0.55} />

        {/* capsule pill */}
        <g transform="translate(52 82) rotate(-18)">
          <rect x="0" y="0" width="78" height="30" rx="15" fill={green} opacity={0.45} />
          <rect x="39" y="0" width="39" height="30" rx="15" fill={red} opacity={0.28} />
          <line x1="39" y1="5" x2="39" y2="25" stroke="white" opacity={0.45} />
          <rect x="0" y="0" width="78" height="30" rx="15" stroke={gray} strokeWidth="4" opacity={0.22} />
        </g>

        {/* extra dots */}
        <circle cx="92" cy="150" r="10" fill={accent} opacity={0.45} />
        <circle cx="74" cy="132" r="4.5" fill={gray} opacity={DOT_OP} />
        <circle cx="212" cy="110" r="4" fill={gray} opacity={DOT_OP} />
        <circle cx="196" cy="92" r="3.5" fill={gray} opacity={0.40} />
      </svg>

      {/* BOTTOM-LEFT CLUSTER */}
      <svg
        className="absolute -bottom-12 -left-12 h-64 w-64 opacity-100"
        viewBox="0 0 260 260"
        fill="none"
      >
        {/* corner wash */}
        <circle cx="85" cy="190" r="105" fill={green} opacity={WASH_OP} />

        {/* RX card */}
        <g transform="translate(24 154) rotate(10)">
          <rect x="0" y="0" width="98" height="66" rx="16" fill={gray} opacity={0.20} />
          <path
            d="M18 20 h54 M18 36 h66 M18 52 h40"
            stroke={gray}
            strokeWidth="7"
            strokeLinecap="round"
            opacity={0.42}
          />
          <text x="68" y="26" fontSize="20" fontWeight="800" fill={red} opacity={0.45}>
            Rx
          </text>
        </g>

        {/* syringe */}
        <g transform="translate(120 70) rotate(-28)">
          <rect x="0" y="52" width="96" height="28" rx="10" fill={accent} opacity={0.40} />
          <rect x="14" y="44" width="68" height="44" rx="12" fill="white" opacity={0.48} />
          <rect x="14" y="44" width="68" height="44" rx="12" stroke={gray} strokeWidth="4" opacity={0.26} />

          {/* plunger */}
          <rect x="-14" y="58" width="22" height="16" rx="8" fill={gray} opacity={0.45} />
          <rect x="-34" y="52" width="22" height="28" rx="8" fill={gray} opacity={0.32} />

          {/* needle */}
          <path d="M96 66 L132 66" stroke={gray} strokeWidth="6" strokeLinecap="round" opacity={0.58} />
          <path d="M132 66 L148 60" stroke={gray} strokeWidth="4" strokeLinecap="round" opacity={0.52} />

          {/* markings */}
          <path d="M30 52 v28 M46 52 v28 M62 52 v28" stroke={gray} strokeWidth="4" opacity={0.34} />
        </g>

        {/* extra pill */}
        <g transform="translate(44 112) rotate(18)">
          <rect x="0" y="0" width="66" height="26" rx="13" fill={red} opacity={0.30} />
          <rect x="33" y="0" width="33" height="26" rx="13" fill={green} opacity={0.38} />
          <line x1="33" y1="5" x2="33" y2="21" stroke="white" opacity={0.45} />
        </g>

        {/* plus icon */}
        <g transform="translate(36 70)">
          <rect x="0" y="12" width="36" height="10" rx="5" fill={accent} opacity={0.32} />
          <rect x="13" y="0" width="10" height="36" rx="5" fill={accent} opacity={0.32} />
        </g>

        {/* extra dots */}
        <circle cx="58" cy="210" r="4" fill={gray} opacity={0.45} />
        <circle cx="92" cy="226" r="3.5" fill={gray} opacity={0.40} />
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
        badge: "NEW",
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
        badge: null,
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
            <img src={logo} alt="Staywell" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          <div className="md:text-right">
            {/* Social Icons */}
            <div className="mb-2 flex justify-start md:justify-end">
              <div className="flex items-center gap-3">
                <a href="#" className="text-staywell-nav hover:opacity-80 transition" aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="text-staywell-nav hover:opacity-80 transition" aria-label="LinkedIn">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="text-staywell-nav hover:opacity-80 transition" aria-label="Facebook">
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
              Select your location to access trusted medical care, pharmacy services, and homecare supplies — all under one roof.
            </p>
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
                      <h2 className="text-2xl md:text-3xl font-extrabold">{loc.title}</h2>
                      <p className="mt-2 text-black/60">{loc.subtitle}</p>
                    </div>

                    {/* ✅ Badge: only render if exists */}
                    {loc.badge ? (
                      <div className="relative shrink-0">
                        <div
                          className="
        relative rounded-md
        px-3 py-1.5
        text-[11px] md:text-xs
        font-extrabold tracking-wide uppercase
        text-white
        shadow-[0_10px_22px_-14px_rgba(0,0,0,0.55)]
      "
                          style={{ backgroundColor: BRAND_RED }}
                        >
                          {loc.badge}

                          {/* notch */}
                          <span
                            className="absolute -left-2 top-1/2 -translate-y-1/2"
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: "10px solid transparent",
                              borderBottom: "10px solid transparent",
                              borderRight: `10px solid ${BRAND_RED}`,
                            }}
                          />
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-white/30" />
                      </div>
                    ) : null}
                  </div>

                  {/* Feature pills */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/2 px-3 py-2 text-sm text-black/75">
                      <MdLocalHospital /> Clinic
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/2 px-3 py-2 text-sm text-black/75">
                      <MdLocalPharmacy /> Pharmacy
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/2 px-3 py-2 text-sm text-black/75">
                      <FaBoxOpen /> Homecare
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mt-6 flex items-start gap-3 text-sm text-black/60">
                    <HiMapPin className="mt-0.5 shrink-0 text-staywell-gray" size={18} />
                    <div>{loc.address}</div>
                  </div>

                  {/* CTA */}
                  {/* CTA row */}
                  <div className="mt-8 flex flex-col md:flex-row md:justify-end gap-4">

                    {/* CTA button + microcopy */}
                    <div className="w-full md:w-auto md:text-right">
                      <div
                        className="
    relative w-full md:w-auto
    inline-flex items-center justify-center gap-2
    rounded-2xl
    px-6 py-3.5
    text-sm md:text-base
    font-semibold
    text-white
    transition duration-300
    hover:-translate-y-px
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  "
                        style={{
                          background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 55%, ${accent} 100%)`,
                          boxShadow: `0 14px 30px -18px ${accent}AA, 0 10px 28px -20px rgba(0,0,0,0.35)`,
                        }}
                      >
                        <span className="relative">{loc.cta}</span>

                        <span className="relative">
                          {loc.type === "external" ? (
                            <FaExternalLinkAlt className="opacity-95 transition-transform duration-300 group-hover:translate-x-0.5" />
                          ) : (
                            <FaArrowRight className="opacity-95 transition-transform duration-300 group-hover:translate-x-1" />
                          )}
                        </span>

                        {/* subtle highlight */}
                        <span
                          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.28)` }}
                        />
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
          Tip: Your selection is saved for next time. You can change it anytime from the homepage.
        </div>
      </div>

      {/* =========================================
          Designer Wave Footer
      ========================================= */}
      <footer className="relative mt-16">
        <div className="relative">
          <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-24" preserveAspectRatio="none">
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

        <div className="bg-[#DC2227] text-white text-center px-6 py-6">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:opacity-80 transition" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:opacity-80 transition" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:opacity-80 transition" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
          </div>

          <div className="text-sm md:text-base font-medium">
            © Staywell Healthcare 2026
          </div>
        </div>
      </footer>
    </main>
  );
}