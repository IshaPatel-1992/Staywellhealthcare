// src/pages/varsity/ClinicHomePage.jsx
import React from "react";

import { useSeo } from "@/lib/useSeo";

import NavbarClinic from "@/components/varsityclinic/NavbarClinic";
import HeroClinic from "@/components/varsityclinic/HeroClinic";
import CTAClinic from "@/components/varsityclinic/CTAClinic";
import WelcomeClinic from "@/components/varsityclinic/WelcomeClinic";
import ClinicServices from "@/components/varsityclinic/ClinicServices";
import BookanAppointmentClinic from "@/components/varsityclinic/BookanAppointmentClinic";
import NewPatientClinic from "@/components/varsityclinic/NewPatientClinic";
import ClinicReviews from "@/components/varsityclinic/ClinicReviews";
import ClinicContactUs from "@/components/varsityclinic/ClinicContactUs";
import ClinicFeedback from "@/components/varsityclinic/ClinicFeedback";

export default function ClinicHomePage() {
  const canonical = "https://staywellhealthcare.ca/varsityclinic";

  useSeo({
    title: "Staywell Medical Clinic, Pharmacy & Homecare | Varsity Calgary NW",
    description:
      "Staywell Varsity offers trusted medical care, pharmacy services, and homecare & medical supplies — all under one roof in Calgary NW. Call 587-955-6207.",
    canonical,
    og: {
      title: "Staywell Medical Clinic, Pharmacy & Homecare | Varsity Calgary NW",
      description:
        "Trusted medical care, onsite pharmacy, prescription transfers, and homecare supplies in Varsity, Calgary NW.",
      url: canonical,
      type: "website",
      image: "https://staywellhealthcare.ca/images/og/varsity-clinic-pharmacy-medicalsupplies.jpg",
    },

    // ✅ NEW: unique per page
    jsonLdId: "varsity-clinic",

    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: "Staywell Medical Clinic, Pharmacy & Homecare (Varsity)",
      url: canonical,
      telephone: "+1-587-955-6207",
      faxNumber: "+1-587-955-6208",
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
      description:
        "Trusted medical care, pharmacy services, and homecare supplies — all under one roof.",
      department: [
        { "@type": "MedicalClinic", name: "Medical Clinic" },
        { "@type": "Pharmacy", name: "Pharmacy" },
        { "@type": "Store", name: "Homecare & Medical Supplies" },
      ],
      knowsAbout: [
        "Mental Health",
        "Periodic Health Exams",
        "Women's Health",
        "Work Injuries",
        "Minor Procedures",
        "Chronic Disease Management",
        "Botox",
        "Driver's Medical Exams",
        "Men's Health",
        "PrEP (HIV Prevention)",
        "Aesthetic Services",
        "Infusion Clinic",
        "Counselling Services",
      ],
    },


  });

  return (
    <main className="min-h-svh bg-white text-gray-900">
      <NavbarClinic />
      <HeroClinic />
      <CTAClinic />
      <WelcomeClinic />
      <ClinicServices />
      <BookanAppointmentClinic />
      <NewPatientClinic />
      <ClinicReviews />
      <ClinicContactUs />
      <ClinicFeedback />
    </main>
  );
}