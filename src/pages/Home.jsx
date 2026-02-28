// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocalHospital, MdLocalPharmacy } from "react-icons/md";
import { FaBoxOpen, FaExternalLinkAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiMapPin, HiPhone, HiEnvelope, HiGlobeAlt } from "react-icons/hi2";
import logo from "../assets/logo/Staywell-Trans_Main.png";

const STORAGE_KEY = "staywell:selectedLocation"; // "varsity" | "carrington"

// Brand colors
const BRAND_GREEN = "#79BD43";
const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";

function MedicalCornerArt({ accent = BRAND_GREEN }) {
  const red = BRAND_RED;
  const green = BRAND_GREEN;
  const gray = BRAND_GRAY;

  const LINE_OP = 0.78;
  const FILL_OP = 0.34;
  const WASH_OP = 0.18;
  const DOT_OP = 0.55;

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* TOP-RIGHT CLUSTER */}
      <svg className="absolute -top-10 -right-10 h-60 w-60 opacity-100" viewBox="0 0 240 240" fill="none">
        <circle cx="175" cy="70" r="92" fill={red} opacity={WASH_OP} />

        <g transform="translate(150 28) rotate(12)">
          <rect x="0" y="18" width="42" height="12" rx="6" fill={accent} opacity={FILL_OP} />
          <rect x="15" y="0" width="12" height="48" rx="6" fill={accent} opacity={FILL_OP} />
          <rect x="-4" y="14" width="50" height="20" rx="10" stroke={gray} strokeWidth="4" opacity={0.28} />
        </g>

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

        <g transform="translate(52 82) rotate(-18)">
          <rect x="0" y="0" width="78" height="30" rx="15" fill={green} opacity={0.45} />
          <rect x="39" y="0" width="39" height="30" rx="15" fill={red} opacity={0.28} />
          <line x1="39" y1="5" x2="39" y2="25" stroke="white" opacity={0.45} />
          <rect x="0" y="0" width="78" height="30" rx="15" stroke={gray} strokeWidth="4" opacity={0.22} />
        </g>

        <circle cx="92" cy="150" r="10" fill={accent} opacity={0.45} />
        <circle cx="74" cy="132" r="4.5" fill={gray} opacity={DOT_OP} />
        <circle cx="212" cy="110" r="4" fill={gray} opacity={DOT_OP} />
        <circle cx="196" cy="92" r="3.5" fill={gray} opacity={0.40} />
      </svg>

      {/* BOTTOM-LEFT CLUSTER */}
      <svg className="absolute -bottom-12 -left-12 h-64 w-64 opacity-100" viewBox="0 0 260 260" fill="none">
        <circle cx="85" cy="190" r="105" fill={green} opacity={WASH_OP} />

        <g transform="translate(24 154) rotate(10)">
          <rect x="0" y="0" width="98" height="66" rx="16" fill={BRAND_GRAY} opacity={0.20} />
          <path
            d="M18 20 h54 M18 36 h66 M18 52 h40"
            stroke={BRAND_GRAY}
            strokeWidth="7"
            strokeLinecap="round"
            opacity={0.42}
          />
          <text x="68" y="26" fontSize="20" fontWeight="800" fill={BRAND_RED} opacity={0.45}>
            Rx
          </text>
        </g>

        <g transform="translate(120 70) rotate(-28)">
          <rect x="0" y="52" width="96" height="28" rx="10" fill={accent} opacity={0.40} />
          <rect x="14" y="44" width="68" height="44" rx="12" fill="white" opacity={0.48} />
          <rect x="14" y="44" width="68" height="44" rx="12" stroke={BRAND_GRAY} strokeWidth="4" opacity={0.26} />
          <rect x="-14" y="58" width="22" height="16" rx="8" fill={BRAND_GRAY} opacity={0.45} />
          <rect x="-34" y="52" width="22" height="28" rx="8" fill={BRAND_GRAY} opacity={0.32} />
          <path d="M96 66 L132 66" stroke={BRAND_GRAY} strokeWidth="6" strokeLinecap="round" opacity={0.58} />
          <path d="M132 66 L148 60" stroke={BRAND_GRAY} strokeWidth="4" strokeLinecap="round" opacity={0.52} />
          <path d="M30 52 v28 M46 52 v28 M62 52 v28" stroke={BRAND_GRAY} strokeWidth="4" opacity={0.34} />
        </g>

        <g transform="translate(44 112) rotate(18)">
          <rect x="0" y="0" width="66" height="26" rx="13" fill={BRAND_RED} opacity={0.30} />
          <rect x="33" y="0" width="33" height="26" rx="13" fill={BRAND_GREEN} opacity={0.38} />
          <line x1="33" y1="5" x2="33" y2="21" stroke="white" opacity={0.45} />
        </g>

        <g transform="translate(36 70)">
          <rect x="0" y="12" width="36" height="10" rx="5" fill={accent} opacity={0.32} />
          <rect x="13" y="0" width="10" height="36" rx="5" fill={accent} opacity={0.32} />
        </g>

        <circle cx="58" cy="210" r="4" fill={BRAND_GRAY} opacity={0.45} />
        <circle cx="92" cy="226" r="3.5" fill={BRAND_GRAY} opacity={0.40} />
      </svg>
    </div>
  );
}

export default function Home() {
  const [saved, setSaved] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) setSaved(existing);
  }, []);

  const selectLocation = (location) => {
    localStorage.setItem(STORAGE_KEY, location);
    setSaved(location);
  };

  const locations = useMemo(
    () => [
      {
        key: "varsity",
        accent: "green",
        title: "Varsity Location",
        address: "4624 Varsity Drive NW Unit #10, Calgary, AB T3A 2L9",
        badge: "NEW",
        type: "internal",

        websiteLabel: "StaywellHealthcare (new site)",
        websiteHref: "https://staywellhealthcare.ca",

        services: {
          clinic: { phone: "587-955-6207", tel: "tel:+15879556207", email: "varsity@staywellmedical.ca", to: "/varsityclinic" },
          pharmacy: { phone: "403-874-8787", tel: "tel:+14038748787", email: "varsity@staywellpharmacy.ca", to: "/varsitypharmacy/pharmacy" },
          supplies: { phone: "403-874-8787", tel: "tel:+14038748787", email: "varsity@staywellpharmacy.ca", to: "/varsitysupplies/supplies" },
        },
      },
      {
        key: "carrington",
        accent: "red",
        title: "Carrington Location",
        address: "59 Carrigton Plz #190, Calgary, AB T3P 1Y3",
        badge: null,
        type: "external",

        websiteLabel: "StaywellMedical.ca",
        websiteHref: "https://staywellmedical.ca",

        services: {
          clinic: { phone: "825-414-3933", tel: "tel:+18254143933", email: "info@staywellmedical.ca", href: "https://staywellmedical.ca" },
          pharmacy: { phone: "825-414-0722", tel: "tel:+18254140722", email: "info@staywellpharmacy.ca", href: "https://staywellpharmacy.ca" },
          supplies: { phone: "403-874-8787", tel: "tel:+14038748787", email: "info@staywellmedicalsupplies.ca", href: "https://www.staywellmedicalsupplies.ca/" },
        },
      },
    ],
    []
  );

  const serviceCards = [
    { key: "clinic", label: "Medical Clinic", icon: MdLocalHospital },
    { key: "pharmacy", label: "Pharmacy", icon: MdLocalPharmacy },
    { key: "supplies", label: "Homecare & Medical Supplies", icon: FaBoxOpen },
  ];

  return (
    <main className="relative min-h-svh bg-white text-gray-900 overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-6 md:py-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <img src={logo} alt="Staywell" className="h-16 md:h-20 w-auto object-contain shrink-0" />

          {/* Social Icons: always right */}
          <div className="flex items-center gap-3 text-staywell-nav shrink-0">
            <a href="#" className="hover:opacity-80 transition" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
          </div>
        </header>

        {/* Title + description row */}
        <div className="mt-4 md:mt-5 md:flex md:items-start md:justify-between md:gap-10">
          <div className="md:max-w-2xl">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-staywell-nav">
              Welcome to Staywell Healthcare
            </h1>

            <div className="mt-2 flex h-1 w-20 overflow-hidden rounded-full">
              <div className="w-2/3" style={{ backgroundColor: BRAND_RED }} />
              <div className="w-1/3" style={{ backgroundColor: BRAND_GREEN }} />
            </div>

            <p className="mt-2 text-[#515D72] font-bold text-sm md:text-base leading-relaxed">
              Select your location to access trusted medical care, pharmacy services, and homecare supplies — all under one roof.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-black/10" />

        {/* Cards */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => {
            const accent = loc.accent === "green" ? BRAND_GREEN : BRAND_RED;

            const serviceBoxClass =
              "relative w-full rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm px-4 py-4 transition duration-300 hover:-translate-y-px";
            const serviceBoxStyle = { outline: `1px solid ${accent}33` };

            const goCard = () => {
              selectLocation(loc.key);
              if (loc.type === "internal") {
                navigate(loc.services?.clinic?.to || "/");
              } else {
                window.open(loc.websiteHref, "_blank", "noopener,noreferrer");
              }
            };

            const goService = (serviceKey) => {
              selectLocation(loc.key);
              const data = loc.services?.[serviceKey];
              if (!data) return;

              if (loc.type === "internal") {
                navigate(data.to || "/");
              } else {
                window.open(data.href || loc.websiteHref, "_blank", "noopener,noreferrer");
              }
            };

            return (
              <div
                key={loc.key}
                role="link"
                tabIndex={0}
                onClick={goCard}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") goCard();
                }}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-staywell-red rounded-3xl"
              >
                <div
                  className="group relative overflow-hidden rounded-3xl bg-white p-7 md:p-9 border border-black/10
          shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]
          transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-22px_rgba(0,0,0,0.45)]"
                  style={{ outline: `1px solid ${accent}55`, outlineOffset: "0px" }}
                >
                  <MedicalCornerArt accent={accent} />

                  <div className="relative z-10">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold">{loc.title}</h2>
                      </div>

                      {loc.badge ? (
                        <div className="relative shrink-0">
                          <div
                            className="relative rounded-md px-3 py-1.5 text-[11px] md:text-xs font-extrabold tracking-wide uppercase text-white shadow-[0_10px_22px_-14px_rgba(0,0,0,0.55)]"
                            style={{ backgroundColor: BRAND_RED }}
                          >
                            {loc.badge}
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

                    {/* Common Location */}
                    <div className="mt-5 flex items-start gap-3 text-sm text-black/60">
                      <HiMapPin className="mt-0.5 shrink-0 text-staywell-gray" size={18} />
                      <div>{loc.address}</div>
                    </div>

                    {/* 3 Service Options (clickable divs - NOT links) */}
                    <div className="mt-6 grid gap-3">
                      {serviceCards.map((s) => {
                        const Icon = s.icon;
                        const data = loc.services?.[s.key];

                        return (
                          <div
                            key={s.key}
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              goService(s.key);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.stopPropagation();
                                goService(s.key);
                              }
                            }}
                            className="block cursor-pointer"
                          >
                            <div className={serviceBoxClass} style={serviceBoxStyle}>
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2 font-semibold text-black/80">
                                  <span
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                                    style={{ backgroundColor: `${accent}14`, color: accent }}
                                  >
                                    <Icon />
                                  </span>
                                  <span>{s.label}</span>
                                </div>

                                {loc.type === "external" ? (
                                  <FaExternalLinkAlt className="mt-1 opacity-60" />
                                ) : null}
                              </div>

                              {/* Phone + Email: mobile stacked, desktop side-by-side */}
                              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-black/60">
                                <a
                                  href={data?.tel}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 hover:underline min-w-0"
                                >
                                  <HiPhone className="shrink-0 opacity-80" />
                                  <span className="truncate">{data?.phone}</span>
                                </a>

                                <a
                                  href={`mailto:${data?.email}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 hover:underline min-w-0 sm:justify-self-end"
                                >
                                  <HiEnvelope className="shrink-0 opacity-80" />
                                  <span className="truncate">{data?.email}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Call + Website buttons (these are links, so stop propagation) */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={loc.services?.clinic?.tel}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-px w-full"
                        style={{
                          background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 55%, ${accent} 100%)`,
                          boxShadow: `0 14px 30px -18px ${accent}AA`,
                        }}
                      >
                        <HiPhone className="opacity-95" />
                        Call Now
                      </a>

                      <a
                        href={loc.websiteHref}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-px w-full"
                        style={{
                          border: `1px solid ${accent}55`,
                          backgroundColor: `${accent}10`,
                          color: accent,
                        }}
                      >
                        <HiGlobeAlt className="opacity-80" />
                        Website
                        <FaExternalLinkAlt className="opacity-70" />
                      </a>
                    </div>

                    <div className="mt-2 text-xs md:text-sm text-black/50">
                      Opens {loc.websiteLabel}
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
                </div>
              </div>
            );
          })}
        </section>

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

          <div className="text-sm md:text-base font-medium">© Staywell Healthcare 2026</div>
        </div>
      </footer>
    </main>
  );
}