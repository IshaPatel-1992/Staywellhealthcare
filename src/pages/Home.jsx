// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useSeo } from "@/lib/useSeo";
import { useNavigate } from "react-router-dom";
import { MdLocalHospital, MdLocalPharmacy } from "react-icons/md";
import { FaBoxOpen, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiGlobeAlt,
  HiShieldCheck,
  HiHeart,
  HiClock,
  HiUsers,
} from "react-icons/hi2";

import SocialLinks from "@/components/common/SocialLinks";
import logo from "@/assets/logo/Staywell-Trans_Main.png";
import varsityBanner from "@/assets/SelectedPhotos/DSC_0280 copy.jpg";
import carringtonBanner from "@/assets/staywell-home-hero-02.webp";

const STORAGE_KEY = "staywell:selectedLocation";

// Brand colors
const BRAND_GREEN = "#79BD43";
const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";

export default function Home() {
  const [saved, setSaved] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

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
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Monday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Wednesday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Thursday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "15:00",
            },
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
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Monday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Wednesday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Thursday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "15:00",
            },
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
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Monday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Wednesday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Thursday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "15:00",
            },
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
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Monday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Wednesday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Thursday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "10:00",
              closes: "14:00",
            },
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
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Monday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Tuesday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Wednesday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Thursday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "10:00",
              closes: "14:00",
            },
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
        websiteLabel: "StaywellHealthcare.ca",
        websiteHref: "https://staywellhealthcare.ca",
        banner: varsityBanner,
        bannerText:
          "Medical clinic, pharmacy, and homecare supplies — all under one roof in Varsity.",
        imageClassName: "object-center",
        services: {
          clinic: {
            phone: "587-955-6207",
            tel: "tel:+15879556207",
            email: "varsity@staywellmedical.ca",
            to: "/varsityclinic",
          },
          pharmacy: {
            phone: "403-874-8787",
            tel: "tel:+14038748787",
            email: "varsity@staywellpharmacy.ca",
            to: "/varsitypharmacy/pharmacy",
          },
          supplies: {
            phone: "403-874-8787",
            tel: "tel:+14038748787",
            email: "info@staywellmedicalsupplies.ca",
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
        websiteLabel: "StaywellMedical.ca",
        websiteHref: "https://staywellmedical.ca",
        banner: carringtonBanner,
        bannerText:
          "Trusted clinic and pharmacy services for individuals and families in Carrington.",
        imageClassName: "object-[center_35%]",
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
            email: "info@staywellpharmacy.ca",
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
        websiteLabel: "StaywellHealthcare.ca",
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
        websiteLabel: "StaywellMedical.ca",
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
    <main className="relative min-h-svh overflow-hidden bg-white text-gray-900">
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

        <div className="mt-4 md:mt-5 md:flex md:items-start md:justify-between md:gap-10">
          <div className="md:max-w-2xl">
            <h1 className="text-2xl font-extrabold tracking-tight text-staywell-nav md:text-3xl">
              Welcome to Staywell Healthcare
            </h1>

            <div className="mt-2 flex h-1.5 w-24 overflow-hidden rounded-full">
              <div className="w-2/3" style={{ backgroundColor: BRAND_RED }} />
              <div className="w-1/3" style={{ backgroundColor: BRAND_GREEN }} />
            </div>

            <p className="mt-3 text-base font-bold leading-relaxed text-[#515D72] md:text-lg">
              Select your location to access trusted medical care, pharmacy
              services, and homecare supplies — all under one roof.
            </p>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-black/10" />

        {/* Section 1: Hero Slider */}
        <section className="mt-8">
          <div className="relative overflow-hidden rounded-4xl border border-black/10 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {locations.map((loc) => (
                <div
                  key={loc.key}
                  className="relative min-w-full cursor-pointer h-90 sm:h-107.5 lg:h-130"
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
                    className={`absolute inset-0 h-full w-full object-cover ${loc.imageClassName}`}
                  />

                  <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${loc.accent}22 0%, transparent 55%, transparent 100%)`,
                    }}
                  />

                  <div className="relative z-10 flex h-full items-end">
                    <div className="w-full p-5 sm:p-7 lg:p-10">
                      <div className="max-w-190">
                        <div
                          className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white sm:text-xs"
                          style={{
                            backgroundColor: `${loc.accent}E6`,
                            boxShadow: `0 10px 30px -16px ${loc.accent}`,
                          }}
                        >
                          {loc.badge || "Location"}
                        </div>

                        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-5xl">
                          {loc.title}
                        </h2>

                        <p className="mt-3 max-w-160 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                          {loc.bannerText}
                        </p>

                        <div className="mt-4 flex max-w-175 items-start gap-2 text-sm text-white/90 sm:text-base">
                          <HiMapPin className="mt-0.5 shrink-0" size={18} />
                          <span>{loc.address}</span>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <a
                            href={loc.services?.clinic?.tel}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-px sm:px-5 sm:text-base"
                            style={{
                              background: `linear-gradient(135deg, ${loc.accent} 0%, ${loc.accent}CC 55%, ${loc.accent} 100%)`,
                              boxShadow: `0 14px 30px -18px ${loc.accent}AA`,
                            }}
                          >
                            <HiPhone size={18} />
                            Call Now
                          </a>

                          <a
                            href={loc.websiteHref}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-px sm:px-5 sm:text-base"
                            style={{
                              border: "1px solid rgba(255,255,255,0.35)",
                              backgroundColor: "rgba(255,255,255,0.14)",
                              backdropFilter: "blur(6px)",
                            }}
                          >
                            <HiGlobeAlt size={18} />
                            Visit Website
                            <FaExternalLinkAlt className="opacity-80" />
                          </a>
                        </div>

                        {saved === loc.key ? (
                          <div className="mt-4 text-sm font-semibold text-white/90">
                            Selected for next time
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrevSlide}
              className="absolute left-3 top-1/2 z-20 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 p-3 text-white backdrop-blur-md transition hover:bg-black/40 hover:scale-105 active:scale-95 not-first-of-type:md:inline-flex"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={goNextSlide}
              className="absolute right-3 top-1/2 z-20 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 p-3 text-white backdrop-blur-md transition hover:bg-black/40 hover:scale-105 active:scale-95 md:inline-flex"
            >
              <FaChevronRight size={16} />
            </button>
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/15 px-3 py-2 backdrop-blur-md">
              {locations.map((loc, index) => {
                const isActive = activeSlide === index;

                return (
                  <button
                    key={loc.key}
                    type="button"
                    aria-label={`Go to ${loc.title}`}
                    onClick={() => setActiveSlide(index)}
                    className="h-3 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "28px" : "10px",
                      backgroundColor: isActive
                        ? loc.accent
                        : "rgba(255,255,255,0.65)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Our Services */}
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
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1"
                  style={{ outline: `1px solid ${service.accent}22` }}
                >
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${service.accent}14`,
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
              );
            })}
          </div>
        </section>

        {/* Section 3: Why Staywell Healthcare */}
        <section className="mt-14 rounded-4xl bg-[#F8FAFB] px-6 py-10 md:px-8 md:py-12">
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
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_24px_-18px_rgba(0,0,0,0.22)]"
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${item.accent}14`,
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
              );
            })}
          </div>
        </section>

        {/* Section 4: Quick Contact / Visit Us */}
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
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.25)]"
                style={{ outline: `1px solid ${loc.accent}22` }}
              >
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
                    <a href={`mailto:${loc.email}`} className="break-all hover:underline">
                      {loc.email}
                    </a>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#F8FAFB] p-4">
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
            ))}
          </div>
        </section>

        <div className="mt-10 text-center text-sm text-black/50 md:text-base">
          Tip: Your selection is saved for next time. You can change it anytime
          from the homepage.
        </div>
      </div>

      {/* Section 5: Footer */}
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