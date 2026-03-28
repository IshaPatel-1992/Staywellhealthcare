// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useSeo } from "@/lib/useSeo";
import { useNavigate } from "react-router-dom";
import { MdLocalHospital, MdLocalPharmacy } from "react-icons/md";
import {
  FaBoxOpen,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiShieldCheck,
  HiHeart,
  HiClock,
  HiUsers,
} from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";

import SocialLinks from "@/components/common/SocialLinks";
import logo from "@/assets/logo/Staywell-Trans_Main.png";
import varsityBanner from "@/assets/Varsity1/staywellwebp/staywell-medical-clinic-pharmacy-varsity-calgary-exterior.webp";
import carringtonBanner from "@/assets/staywell-home-gallery-02.webp";

const STORAGE_KEY = "staywell:selectedLocation";

const BRAND_GREEN = "#79BD43";
const BRAND_RED = "#DC2227";

export default function Home() {
  const [saved, setSaved] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const canonical = "https://staywellhealthcare.ca/";

  useSeo({
    title:
      "Staywell Healthcare | Medical Clinic, Pharmacy & Homecare Supplies in Calgary",
    description:
      "Staywell Healthcare offers trusted medical clinic care, pharmacy services, and homecare & medical supplies in Calgary. Choose Varsity or Carrington and connect by phone or email.",
    canonical,
    og: {
      title:
        "Staywell Healthcare | Calgary Clinics, Pharmacy & Medical Supplies",
      description:
        "Choose your location (Varsity or Carrington) for medical clinic care, pharmacy services, and homecare & medical supplies in Calgary.",
      url: canonical,
      type: "website",
      image:
        "https://staywellhealthcare.ca/images/og/varsity-clinic-pharmacy-medicalsupplies.jpg",
    },
    jsonLdId: "staywell-home",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Staywell Healthcare",
      url: canonical,
      sameAs: [
        "https://www.instagram.com/staywellhealthcareservices/",
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
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" },
          ],
          knowsAbout: [
            "Family medicine",
            "Walk-in clinic",
            "Preventive care",
            "Chronic disease management",
          ],
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
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" },
          ],
          knowsAbout: [
            "Prescription refills",
            "Prescription transfers",
            "Vaccines",
            "Compounding",
            "Delivery",
          ],
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
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" },
          ],
          knowsAbout: [
            "Homecare supplies",
            "Medical equipment",
            "Compression stockings",
            "Mobility aids",
          ],
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
          knowsAbout: [
            "Family medicine",
            "Walk-in clinic",
            "Preventive care",
            "Chronic disease management",
          ],
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
          knowsAbout: [
            "Prescription refills",
            "Prescription transfers",
            "Vaccines",
            "Compounding",
            "Delivery",
          ],
        },
      ],
    },
  });

  const locations = useMemo(
    () => [
      {
        key: "varsity",
        accent: BRAND_GREEN,
        title: "Varsity Location",
        address: "4624 Varsity Drive NW Unit #10, Calgary, AB T3A 2L9",
        badge: "NEW",
        type: "internal",
        websiteHref: "https://staywellhealthcare.ca",
        banner: varsityBanner,
        imageClassName: "object-center",
        services: {
          clinic: {
            tel: "tel:+15879556207",
            to: "/varsityclinic",
          },
          pharmacy: {
            to: "/varsitypharmacy/pharmacy",
          },
          supplies: {
            href: "https://www.staywellmedicalsupplies.ca",
          },
        },
      },
      {
        key: "carrington",
        accent: BRAND_RED,
        title: "Carrington Location",
        address: "59 Carrington Plz #190, Calgary, AB T3P 1Y3",
        badge: null,
        type: "external",
        websiteHref: "https://staywellmedical.ca",
        banner: carringtonBanner,
        imageClassName: "object-[center_35%]",
        services: {
          clinic: {
            tel: "tel:+18254143933",
            href: "https://staywellmedical.ca",
          },
          pharmacy: {
            href: "https://staywellpharmacy.ca",
          },
        },
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        key: "clinic",
        title: "Medical Clinic",
        icon: MdLocalHospital,
        description:
          "Access trusted medical care, family practice support, walk-in care, and preventive services.",
        availability: "Available in Varsity & Carrington",
        accent: BRAND_GREEN,
        actions: [
          { label: "Varsity", type: "internal", to: "/varsityclinic" },
          {
            label: "Carrington",
            type: "external",
            href: "https://staywellmedical.ca",
          },
        ],
      },
      {
        key: "pharmacy",
        title: "Pharmacy",
        icon: MdLocalPharmacy,
        description:
          "Prescription refills, transfers, pharmacist support, and convenient pharmacy care close to home.",
        availability: "Available in Varsity & Carrington",
        accent: BRAND_RED,
        actions: [
          {
            label: "Varsity",
            type: "internal",
            to: "/varsitypharmacy/pharmacy",
          },
          {
            label: "Carrington",
            type: "external",
            href: "https://staywellpharmacy.ca",
          },
        ],
      },
      {
        key: "supplies",
        title: "Homecare & Medical Supplies",
        icon: FaBoxOpen,
        description:
          "Shop essential homecare products, mobility aids, compression wear, and medical supply solutions.",
        availability: "Available in Varsity",
        accent: BRAND_GREEN,
        actions: [
          {
            label: "Visit Supplies",
            type: "external",
            href: "https://www.staywellmedicalsupplies.ca",
          },
        ],
      },
    ],
    []
  );

  const trustPoints = useMemo(
    () => [
      {
        title: "Trusted Local Care",
        description:
          "Compassionate healthcare and pharmacy services designed for Calgary families.",
        icon: HiHeart,
        accent: BRAND_GREEN,
      },
      {
        title: "Convenient Access",
        description:
          "Clinic, pharmacy, and supplies connected in one simple patient experience.",
        icon: HiClock,
        accent: BRAND_RED,
      },
      {
        title: "Patient-Focused Support",
        description:
          "Helpful care teams focused on clear communication and everyday wellness needs.",
        icon: HiUsers,
        accent: BRAND_GREEN,
      },
      {
        title: "Reliable Service",
        description:
          "A dependable healthcare experience with quality support you can count on.",
        icon: HiShieldCheck,
        accent: BRAND_RED,
      },
    ],
    []
  );

  const quickLocations = useMemo(
    () => [
      {
        key: "varsity",
        title: "Varsity",
        accent: BRAND_GREEN,
        address: "4624 Varsity Drive NW Unit #10, Calgary, AB T3A 2L9",
        phone: "587-955-6207",
        tel: "tel:+15879556207",
        email: "varsity@staywellmedical.ca",
        website: "https://staywellhealthcare.ca",
        hours: [
          "Mon – Fri: 9:00 AM – 6:00 PM",
          "Saturday: 10:00 AM – 3:00 PM",
          "Sunday: Closed",
        ],
      },
      {
        key: "carrington",
        title: "Carrington",
        accent: BRAND_RED,
        address: "59 Carrington Plz #190, Calgary, AB T3P 1Y3",
        phone: "825-414-3933",
        tel: "tel:+18254143933",
        email: "info@staywellmedical.ca",
        website: "https://staywellmedical.ca",
        hours: [
          "Mon – Fri: 9:00 AM – 9:00 PM",
          "Saturday: 9:00 AM – 5:00 PM",
          "Sunday: 10:00 AM – 2:00 PM",
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) setSaved(existing);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % locations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [locations.length]);

  const selectLocation = (location) => {
    localStorage.setItem(STORAGE_KEY, location);
    setSaved(location);
  };

  const goBanner = (loc) => {
    selectLocation(loc.key);

    if (loc.type === "internal") {
      navigate(loc.services?.clinic?.to || "/");
    } else {
      window.open(loc.websiteHref, "_blank", "noopener,noreferrer");
    }
  };

  const goAction = (action) => {
    if (action.type === "internal") {
      navigate(action.to);
    } else {
      window.open(action.href, "_blank", "noopener,noreferrer");
    }
  };

  const goPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const goNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % locations.length);
  };

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#f6faf5] text-gray-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, rgba(121,189,67,0.14) 0%, transparent 24%),
              radial-gradient(circle at 100% 0%, rgba(220,34,39,0.12) 0%, transparent 24%),
              radial-gradient(circle at 0% 100%, rgba(121,189,67,0.08) 0%, transparent 22%),
              radial-gradient(circle at 100% 100%, rgba(220,34,39,0.08) 0%, transparent 22%),
              radial-gradient(circle at 50% 16%, rgba(255,255,255,0.9) 0%, transparent 28%)
            `,
          }}
        />

        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#79BD43]/16 blur-[140px]" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#DC2227]/14 blur-[140px]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#79BD43]/10 blur-[140px]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#DC2227]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(125deg, transparent 0%, rgba(255,255,255,0.55) 38%, transparent 68%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.5) 0.6px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-6 md:py-8">
        <header className="flex items-center justify-between gap-4">
          <img
            src={logo}
            alt="Staywell Healthcare logo"
            className="h-16 w-auto shrink-0 object-contain md:h-20"
          />

          <SocialLinks
            size={18}
            className="shrink-0 text-staywell-nav"
            iconClassName="text-staywell-nav transition hover:opacity-80"
          />
        </header>

        <div className="relative mt-4 overflow-hidden rounded-4xl border border-white/70 bg-white/55 px-4 py-6 shadow-[0_20px_50px_-26px_rgba(0,0,0,0.18)] backdrop-blur-md md:mt-5 md:px-6 md:py-7">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-16 -top-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: `${BRAND_GREEN}24` }}
            />
            <div
              className="absolute -right-16 -top-12 h-44 w-44 rounded-full blur-3xl"
              style={{ backgroundColor: `${BRAND_RED}20` }}
            />
            <div
              className="absolute inset-0 opacity-75"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.18) 48%, transparent 100%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/95 to-transparent" />
          </div>

          <div className="relative md:flex md:items-start md:justify-between md:gap-10">

            {/* BACKGROUND CURVES */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <svg
                className="absolute inset-0 h-full w-full opacity-[0.12]"
                viewBox="0 0 1200 320"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Smooth wave 1 */}
                <path
                  d="M0 180 C 200 120, 400 120, 600 180 S 1000 240, 1200 140"
                  stroke={BRAND_GREEN}
                  strokeWidth="2"
                />

                {/* Smooth wave 2 */}
                <path
                  d="M0 220 C 240 160, 420 170, 640 220 S 1020 260, 1200 180"
                  stroke={BRAND_RED}
                  strokeWidth="1.6"
                />
              </svg>
            </div>

            {/* CONTENT */}
            <div className="relative md:max-w-2xl">
              <h1 className="text-2xl font-extrabold tracking-tight text-staywell-nav md:text-3xl">
                Welcome to Staywell Healthcare
              </h1>

              <div className="mt-2 flex h-1.5 w-24 overflow-hidden rounded-full">
                <div className="w-2/3" style={{ backgroundColor: BRAND_RED }} />
                <div className="w-1/3" style={{ backgroundColor: BRAND_GREEN }} />
              </div>

              <p className="mt-3 max-w-2xl text-base font-bold leading-relaxed text-[#515D72] md:text-lg">
                Select your location to access trusted medical care, pharmacy
                services, and homecare supplies — all under one roof.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-black/10" />

        <section className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_22px_60px_-28px_rgba(0,0,0,0.38)] sm:rounded-4xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {locations.map((loc) => (
                <div
                  key={loc.key}
                  className="relative h-110 min-w-full cursor-pointer sm:h-140 lg:h-160"
                  onClick={() => goBanner(loc)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") goBanner(loc);
                  }}
                >
                  <img
                    src={loc.banner}
                    alt={`${loc.title} banner`}
                    className={`absolute inset-0 h-full w-full object-cover ${loc.imageClassName} scale-[1.02]`}
                    style={{
                      filter: "contrast(1.05) saturate(1.06) brightness(0.95)",
                    }}
                  />

                  <div className="absolute inset-0 bg-linear-to-r from-black/72 via-black/34 to-black/10 sm:from-black/62 sm:via-black/28 sm:to-black/08" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent sm:from-black/38 sm:via-transparent sm:to-transparent" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${loc.accent}18 0%, transparent 50%, transparent 100%)`,
                    }}
                  />

                  <div className="relative z-10 flex h-full items-end">
                    <div className="w-full p-4 sm:p-7 lg:p-10">
                      <div className="max-w-full sm:max-w-190">
                        <div className="w-full rounded-3xl border border-white/14 bg-black/48 p-4 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.58)] backdrop-blur-[6px] sm:max-w-155 sm:rounded-[28px] sm:p-6 lg:max-w-150 lg:p-7">
                          <div
                            className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white sm:text-[11px]"
                            style={{
                              backgroundColor: `${loc.accent}E6`,
                              boxShadow: `0 10px 30px -16px ${loc.accent}`,
                            }}
                          >
                            {loc.badge || "Location"}
                          </div>

                          <h2
                            className="mt-3 text-[26px] font-extrabold leading-[1.08] text-white sm:mt-4 sm:text-3xl lg:text-5xl"
                            style={{
                              textShadow: "0 3px 14px rgba(0,0,0,0.32)",
                            }}
                          >
                            {loc.title}
                          </h2>

                          <div
                            className="mt-4 flex max-w-full items-start gap-2 text-[13px] leading-5 text-white/92 sm:max-w-140 sm:text-base sm:leading-6"
                            style={{
                              textShadow: "0 2px 10px rgba(0,0,0,0.28)",
                            }}
                          >
                            <HiMapPin className="mt-0.5 shrink-0" size={17} />
                            <span>{loc.address}</span>
                          </div>

                          <div className="mt-5 flex items-center gap-3 sm:mt-6">
                            <a
                              href={loc.services?.clinic?.tel}
                              onClick={(e) => e.stopPropagation()}
                              className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition hover:scale-105 active:scale-95"
                              style={{
                                background: `linear-gradient(135deg, ${loc.accent}, ${loc.accent}CC)`,
                                boxShadow: `0 10px 24px -12px ${loc.accent}AA`,
                              }}
                              aria-label="Call"
                            >
                              <FiPhoneCall size={18} />
                            </a>

                            {loc.services?.clinic?.to || loc.services?.clinic?.href ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  loc.services.clinic.to
                                    ? navigate(loc.services.clinic.to)
                                    : window.open(
                                      loc.services.clinic.href,
                                      "_blank",
                                      "noopener,noreferrer"
                                    );
                                }}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 active:scale-95"
                                aria-label="Clinic"
                              >
                                <MdLocalHospital size={18} />
                              </button>
                            ) : null}

                            {loc.services?.pharmacy && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  loc.services.pharmacy.to
                                    ? navigate(loc.services.pharmacy.to)
                                    : window.open(
                                      loc.services.pharmacy.href,
                                      "_blank",
                                      "noopener,noreferrer"
                                    );
                                }}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 active:scale-95"
                                aria-label="Pharmacy"
                              >
                                <MdLocalPharmacy size={18} />
                              </button>
                            )}

                            {loc.services?.supplies && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(
                                    loc.services.supplies.href,
                                    "_blank",
                                    "noopener,noreferrer"
                                  );
                                }}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/25 active:scale-95"
                                aria-label="Supplies"
                              >
                                <FaBoxOpen size={17} />
                              </button>
                            )}
                          </div>

                          {saved === loc.key ? (
                            <div className="mt-4 text-xs font-semibold text-white/88 sm:text-sm">
                              Selected for next time
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrevSlide}
              className="absolute left-2 top-1/2 z-20 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 p-2.5 text-white shadow-[0_10px_24px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md transition hover:scale-105 hover:bg-black/45 active:scale-95 sm:left-3 sm:p-3"
            >
              <FaChevronLeft size={14} className="sm:hidden" />
              <FaChevronLeft size={16} className="hidden sm:block" />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={goNextSlide}
              className="absolute right-2 top-1/2 z-20 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 p-2.5 text-white shadow-[0_10px_24px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md transition hover:scale-105 hover:bg-black/45 active:scale-95 sm:right-3 sm:p-3"
            >
              <FaChevronRight size={14} className="sm:hidden" />
              <FaChevronRight size={16} className="hidden sm:block" />
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-black/28 px-3 py-2 backdrop-blur-md sm:bottom-4">
              {locations.map((loc, index) => {
                const isActive = activeSlide === index;

                return (
                  <button
                    key={loc.key}
                    type="button"
                    aria-label={`Go to ${loc.title}`}
                    onClick={() => setActiveSlide(index)}
                    className="h-2.5 rounded-full transition-all duration-300 sm:h-3"
                    style={{
                      width: isActive ? "24px" : "9px",
                      backgroundColor: isActive
                        ? loc.accent
                        : "rgba(255,255,255,0.68)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-staywell-red">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-staywell-nav md:text-4xl">
              Care and support designed around everyday health needs
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#515D72] md:text-lg">
              Explore Staywell services and quickly choose the location that
              works best for you.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.key}
                  className="group relative overflow-hidden rounded-3xl border border-black/8 bg-white/88 p-6 shadow-[0_16px_34px_-22px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_-24px_rgba(0,0,0,0.26)]"
                  style={{ outline: `1px solid ${service.accent}20` }}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="absolute -left-10 -top-10 h-28 w-28 rounded-full blur-3xl"
                      style={{ backgroundColor: `${service.accent}18` }}
                    />
                    <div
                      className="absolute bottom-0 right-0 h-24 w-24 rounded-full blur-3xl"
                      style={{ backgroundColor: `${service.accent}10` }}
                    />
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/95 to-transparent" />
                    <div
                      className="absolute inset-0 opacity-70"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.14) 42%, transparent 100%)",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                      style={{
                        backgroundColor: `${service.accent}16`,
                        color: service.accent,
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold text-staywell-nav">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-black/65">
                      {service.description}
                    </p>

                    <div
                      className="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: `${service.accent}12`,
                        color: service.accent,
                      }}
                    >
                      {service.availability}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.actions.map((action) => (
                        <button
                          key={action.label}
                          type="button"
                          onClick={() => goAction(action)}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold transition duration-300 hover:-translate-y-px"
                          style={{
                            backgroundColor: `${service.accent}10`,
                            color: service.accent,
                            border: `1px solid ${service.accent}33`,
                          }}
                        >
                          {action.label}
                          {action.type === "external" ? (
                            <FaExternalLinkAlt className="opacity-70" />
                          ) : null}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-14 rounded-4xl border border-white/60 bg-white/68 px-6 py-10 backdrop-blur-sm md:px-8 md:py-12">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-staywell-red">
              Why Staywell Healthcare
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-staywell-nav md:text-4xl">
              A supportive healthcare experience for patients and families
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-black/8 bg-white/88 p-6 shadow-[0_16px_34px_-22px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_-24px_rgba(0,0,0,0.26)]"
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl"
                      style={{ backgroundColor: `${item.accent}16` }}
                    />
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/95 to-transparent" />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.12) 45%, transparent 100%)",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm"
                      style={{
                        backgroundColor: `${item.accent}16`,
                        color: item.accent,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 text-lg font-extrabold text-staywell-nav">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-black/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-14">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-staywell-red">
              Quick Contact / Visit Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-staywell-nav md:text-4xl">
              Find the location that works best for you
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {quickLocations.map((loc) => (
              <div
                key={loc.key}
                className="relative overflow-hidden rounded-3xl border border-black/8 bg-white/90 p-6 shadow-[0_16px_34px_-22px_rgba(0,0,0,0.22)] backdrop-blur-md"
                style={{ outline: `1px solid ${loc.accent}20` }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="absolute -left-12 -top-12 h-32 w-32 rounded-full blur-3xl"
                    style={{ backgroundColor: `${loc.accent}16` }}
                  />
                  <div
                    className="absolute bottom-0 right-0 h-24 w-24 rounded-full blur-3xl"
                    style={{ backgroundColor: `${loc.accent}10` }}
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/95 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.10) 45%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-staywell-nav">
                        {loc.title}
                      </h3>
                      <div
                        className="mt-2 h-1.5 w-16 rounded-full"
                        style={{ backgroundColor: loc.accent }}
                      />
                    </div>

                    {loc.key !== "varsity" && (
                      <a
                        href={loc.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold"
                        style={{
                          backgroundColor: `${loc.accent}10`,
                          color: loc.accent,
                          border: `1px solid ${loc.accent}33`,
                        }}
                      >
                        Website
                        <FaExternalLinkAlt className="opacity-70" />
                      </a>
                    )}
                  </div>

                  <div className="mt-5 space-y-3 text-black/65">
                    <div className="flex items-start gap-3">
                      <HiMapPin className="mt-0.5 shrink-0" size={18} />
                      <span>{loc.address}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <HiPhone className="mt-0.5 shrink-0" size={18} />
                      <a href={loc.tel} className="hover:underline">
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <HiEnvelope className="mt-0.5 shrink-0" size={18} />
                      <a
                        href={`mailto:${loc.email}`}
                        className="break-all hover:underline"
                      >
                        {loc.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-black/5 bg-white/72 p-4 backdrop-blur-sm">
                    <div className="text-sm font-extrabold uppercase tracking-wide text-staywell-nav">
                      Hours
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-black/65">
                      {loc.hours.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 text-center text-sm text-black/50 md:text-base">
          Tip: Your selection is saved for next time. You can change it anytime
          from the homepage.
        </div>
      </div>

      <footer className="relative mt-16">
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            className="h-20 w-full md:h-24"
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

        <div className="bg-[#DC2227] px-6 py-6 text-center text-white">
          <SocialLinks
            size={18}
            className="justify-center"
            iconClassName="transition hover:opacity-80"
          />
          <div className="text-sm font-medium md:text-base">
            © Staywell Healthcare 2026
          </div>
        </div>
      </footer>
    </main>
  );
}