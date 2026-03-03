// src/pages/varsity/PharmacyHomePage.jsx
import React from "react";

import { useSeo } from "@/lib/useSeo";

import NavbarPharmacy from "@/components/varsitypharmacy/NavbarPharmacy";
import HeroPharmacy from "@/components/varsitypharmacy/HeroPharmacy";
import CTAPharmacy from "@/components/varsitypharmacy/CTAPharmacy";
import PharmacyServices from "@/components/varsitypharmacy/PharmacyServices";
import WelcomePharmacy from "@/components/varsitypharmacy/WelcomePharmacy";
import PharmacyFAQ from "@/components/varsitypharmacy/PharmacyFAQ";
import FooterPharmacy from "@/components/varsitypharmacy/FooterPharmacy";

export default function PharmacyHomePage() {
  const canonical = "https://staywellhealthcare.ca/varsitypharmacy/pharmacy";
  const phone = "+1-403-874-8787";
  const email = "varsity@staywellpharmacy.ca";

  useSeo({
    title: "Staywell Pharmacy (Varsity) | Prescribing Pharmacists, Refills & Transfers Calgary",
    description:
      "Staywell Pharmacy in Varsity, Calgary offers prescription transfers, refills, prescribing pharmacist walk-in services, travel health, compounding, immunizations, injections, compliance packaging, free local delivery, and OAT services. Call 403-874-8787.",
    canonical,
    og: {
      title: "Staywell Pharmacy (Varsity) | Calgary NW",
      description:
        "Prescription transfers, refills, prescribing pharmacists walk-in service, travel health, compounding, immunizations, and free local delivery in Varsity, Calgary NW.",
      url: canonical,
      type: "website",
      image: "https://staywellhealthcare.ca/images/og/varsity-pharmacy-1200x630.jpg",
    },

    // ✅ IMPORTANT: unique schema id for this page
    jsonLdId: "varsity-pharmacy",

    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      name: "Staywell Pharmacy - Varsity",
      url: canonical,
      telephone: phone,
      faxNumber: "+1-587-350-8585", // ✅ see note below
      email,
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
      description:
        "Pharmacy services including prescription transfers, refills, prescribing pharmacists walk-in care, travel health, compounding, immunizations, injections, compliance packaging, free local delivery, and OAT services.",
      knowsAbout: [
        "Prescription transfers",
        "Prescription refills",
        "Prescribing pharmacists walk-in service",
        "Travel health consultations",
        "Compounding pharmacy",
        "Immunizations and vaccines",
        "Injection services",
        "Medication reviews",
        "Compliance packaging",
        "Free local delivery",
        "Opioid Agonist Therapy (OAT): Methadone, Suboxone, Sublocade",
        "PrEP services",
        "Men's health",
        "Women's health",
        "Minor injuries",
        "Chronic disease support",
      ],
    },
  });

  return (
    <main className="min-h-svh bg-white text-gray-900">
      <NavbarPharmacy />
      <HeroPharmacy />
      <CTAPharmacy />
      <PharmacyServices />
      <WelcomePharmacy />
      <PharmacyFAQ />
      <FooterPharmacy />
    </main>
  );
}