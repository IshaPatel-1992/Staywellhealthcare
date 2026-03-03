// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useSeo } from "@/lib/useSeo";
import { useNavigate } from "react-router-dom";
import { MdLocalHospital, MdLocalPharmacy } from "react-icons/md";
import { FaBoxOpen, FaExternalLinkAlt, FaFax } from "react-icons/fa";
import SocialLinks from "@/components/common/SocialLinks";
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
      <svg
        className="absolute -top-10 -right-10 h-60 w-60 opacity-100"
        viewBox="0 0 240 240"
        fill="none"
      >
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
      <svg
        className="absolute -bottom-12 -left-12 h-64 w-64 opacity-100"
        viewBox="0 0 260 260"
        fill="none"
      >
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
  const canonical = "https://staywellhealthcare.ca/";

  useSeo({
    title: "Staywell Healthcare | Medical Clinic, Pharmacy & Homecare Supplies in Calgary",
    description:
      "Staywell Healthcare offers trusted medical clinic care, pharmacy services, and homecare & medical supplies in Calgary. Choose Varsity or Carrington and connect by phone or email.",
    canonical,
    og: {
      title: "Staywell Healthcare | Calgary Clinics, Pharmacy & Medical Supplies",
      description:
        "Choose your location (Varsity or Carrington) for medical clinic care, pharmacy services, and homecare & medical supplies in Calgary.",
      url: canonical,
      type: "website",
      image: "https://staywellhealthcare.ca/images/og/varsity-clinic-pharmacy-medicalsupplies.jpg",
    },
    jsonLdId: "staywell-home",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Staywell Healthcare",
      url: canonical,
      sameAs: [
        "https://www.instagram.com/staywell.healthcare/",
        "https://www.linkedin.com/company/staywell-pharmacy-medical-clinic/?originalSubdomain=ca",
        "https://www.facebook.com/people/Staywell-Healthcare/61570180690301/",
      ],
      description:
        "Staywell Healthcare provides medical clinic care, pharmacy services, and homecare & medical supplies in Calgary, Alberta.",
      department: [
        {
          "@type": "MedicalClinic",
          name: "Staywell Medical Clinic - Varsity",
          telephone: "+1-587-955-6207",
          email: "varsity@staywellmedical.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4624 Varsity Drive NW Unit #10",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3A 2L9",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
          ],
          knowsAbout: ["Family medicine", "Walk-in clinic", "Preventive care", "Chronic disease management"],
        },
        {
          "@type": "Pharmacy",
          name: "Staywell Pharmacy - Varsity",
          telephone: "+1-403-874-8787",
          faxNumber: "+1-825-414-0722",
          email: "varsity@staywellpharmacy.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4624 Varsity Drive NW Unit #10",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3A 2L9",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
          ],
          knowsAbout: ["Prescription refills", "Prescription transfers", "Vaccines", "Compounding", "Delivery"],
        },
        {
          "@type": "Store",
          name: "Staywell Homecare & Medical Supplies - Varsity",
          telephone: "+1-403-874-8787",
          email: "varsity@staywellpharmacy.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4624 Varsity Drive NW Unit #10",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3A 2L9",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
          ],
          knowsAbout: ["Homecare supplies", "Medical equipment", "Compression stockings", "Mobility aids"],
        },
        {
          "@type": "MedicalClinic",
          name: "Staywell Medical Clinic - Carrington",
          telephone: "+1-825-414-3933",
          email: "info@staywellmedical.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "59 Carrington Plz #190",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3P 1Y3",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
          ],
          knowsAbout: ["Family medicine", "Walk-in clinic", "Preventive care", "Chronic disease management"],
        },
        {
          "@type": "Pharmacy",
          name: "Staywell Pharmacy - Carrington",
          telephone: "+1-825-414-0721",
          faxNumber: "+1-825-414-0722",
          email: "info@staywellpharmacy.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "59 Carrington Plz #190",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3P 1Y3",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
          ],
          knowsAbout: ["Prescription refills", "Prescription transfers", "Vaccines", "Compounding", "Delivery"],
        },
      ],
    },
  });

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
          clinic: {
            phone: "587-955-6207",
            tel: "tel:+15879556207",
            fax: "587-955-6208",
            faxTel: "tel:+15879556208",
            email: "varsity@staywellmedical.ca",
            to: "/varsityclinic",
          },
          pharmacy: {
            phone: "403-874-8787",
            tel: "tel:+14038748787",
            fax: "587-350-8585",
            faxTel: "tel:+15873508585",
            email: "varsity@staywellpharmacy.ca",
            to: "/varsitypharmacy/pharmacy",
          },
          supplies: {
            phone: "403-874-8787",
            tel: "tel:+14038748787",
            fax: "587-350-8585",
            faxTel: "tel:+15873508585",
            email: "info@staywellmedicalsupplies.ca",
            href: "https://www.staywellmedicalsupplies.ca",
          },
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
          clinic: {
            phone: "825-414-3933",
            tel: "tel:+18254143933",
            email: "info@staywellmedical.ca",
            href: "https://staywellmedical.ca",
          },
          pharmacy: {
            phone: "825-414-0721",
            tel: "tel:+18254140721",
            fax: "825-414-0722",
            faxTel: "tel:+18254140722",
            email: "info@staywellpharmacy.ca",
            href: "https://staywellpharmacy.ca",
          },
        },
      },
    ],
    []
  );

  const serviceCardsByLocation = (loc) => {
    const base = [
      { key: "clinic", label: "Medical Clinic", icon: MdLocalHospital },
      { key: "pharmacy", label: "Pharmacy", icon: MdLocalPharmacy },
    ];
    if (loc.key === "varsity") {
      base.push({ key: "supplies", label: "Homecare & Medical Supplies", icon: FaBoxOpen });
    }
    return base;
  };

  return (
    <main className="relative min-h-svh bg-white text-gray-900 overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-6 md:py-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <img src={logo} alt="Staywell Healthcare logo" className="h-16 md:h-20 w-auto object-contain shrink-0" />

          {/* Social Icons: always right */}
         <SocialLinks
  size={18}
  className="text-staywell-nav shrink-0"
  iconClassName="text-staywell-nav hover:opacity-80 transition"
/>
        </header>

        {/* Title + description row */}
        <div className="mt-4 md:mt-5 md:flex md:items-start md:justify-between md:gap-10">
          <div className="md:max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-staywell-nav">
              Welcome to Staywell Healthcare
            </h1>

            <div className="mt-2 flex h-1.5 w-24 overflow-hidden rounded-full">
              <div className="w-2/3" style={{ backgroundColor: BRAND_RED }} />
              <div className="w-1/3" style={{ backgroundColor: BRAND_GREEN }} />
            </div>

            <p className="mt-3 text-[#515D72] font-bold text-base md:text-lg leading-relaxed">
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
              "relative w-full rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm px-5 py-5 transition duration-300 hover:-translate-y-px sm:min-h-[148px]";
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

              // Supplies should open external site even though Varsity is "internal"
              if (serviceKey === "supplies" && data?.href) {
                window.open(data.href, "_blank", "noopener,noreferrer");
                return;
              }

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

                  {/* ✅ make both cards equal height + push buttons to bottom */}
                  <div className="relative z-10 flex min-h-150 flex-col">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">{loc.title}</h2>
                      </div>

                      {loc.badge ? (
                        <div className="relative shrink-0">
                          <div
                            className="relative rounded-md px-3 py-1.5 text-xs md:text-sm font-extrabold tracking-wide uppercase text-white shadow-[0_10px_22px_-14px_rgba(0,0,0,0.55)]"
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
                    <div className="mt-5 flex items-start gap-3 text-base text-black/60">
                      <HiMapPin className="mt-0.5 shrink-0 text-staywell-gray" size={20} />
                      <div>{loc.address}</div>
                    </div>

                    {/* Services */}
                    <div className="mt-6 grid gap-3">
                      {serviceCardsByLocation(loc).map((s) => {
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
                                <div className="flex items-center gap-3 font-extrabold text-black/85 text-lg md:text-xl">
                                  <span
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                                    style={{ backgroundColor: `${accent}14`, color: accent }}
                                  >
                                    <Icon size={18} />
                                  </span>
                                  <span>{s.label}</span>
                                </div>

                                {loc.type === "external" ? <FaExternalLinkAlt className="mt-1 opacity-60" /> : null}
                              </div>

                              {/* ✅ Phone + Fax together, Email goes down */}
                              <div className="mt-4 text-[15px] md:text-base text-black/60">
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                  <a
                                    href={data?.tel}
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 hover:underline"
                                  >
                                    <HiPhone className="shrink-0 opacity-80" size={18} />
                                    <span className="font-semibold">{data?.phone}</span>
                                  </a>

                                  {data?.fax ? (
                                    <a
                                      href={data?.faxTel || "#"}
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center gap-2 hover:underline"
                                      aria-label="Fax"
                                    >
                                      <FaFax className="shrink-0 opacity-80" />
                                      <span className="font-semibold">{data?.fax}</span>
                                    </a>
                                  ) : null}
                                </div>

                                <a
                                  href={`mailto:${data?.email}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="mt-2 inline-flex items-center gap-2 hover:underline min-w-0"
                                >
                                  <HiEnvelope className="shrink-0 opacity-80" size={18} />
                                  <span className="truncate max-w-85 md:max-w-95 font-medium">
                                    {data?.email}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Buttons pushed to bottom */}
                    <div className="mt-auto pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={loc.services?.clinic?.tel}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-px w-full"
                        style={{
                          background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 55%, ${accent} 100%)`,
                          boxShadow: `0 14px 30px -18px ${accent}AA`,
                        }}
                      >
                        <HiPhone className="opacity-95" size={18} />
                        Call Now
                      </a>

                      <a
                        href={loc.websiteHref}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-extrabold transition duration-300 hover:-translate-y-px w-full"
                        style={{
                          border: `1px solid ${accent}55`,
                          backgroundColor: `${accent}10`,
                          color: accent,
                        }}
                      >
                        <HiGlobeAlt className="opacity-80" size={18} />
                        Website
                        <FaExternalLinkAlt className="opacity-70" />
                      </a>
                    </div>

                    <div className="mt-2 text-sm text-black/50">Opens {loc.websiteLabel}</div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
                </div>
              </div>
            );
          })}
        </section>

        <div className="mt-10 text-center text-sm md:text-base text-black/50">
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
          <SocialLinks size={18} className="justify-center" iconClassName="hover:opacity-80 transition" />

          <div className="text-sm md:text-base font-medium">© Staywell Healthcare 2026</div>
        </div>
      </footer>
    </main>
  );
}