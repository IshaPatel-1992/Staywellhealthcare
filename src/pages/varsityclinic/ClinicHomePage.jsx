// src/pages/varsity/ClinicHomePage.jsx
import React from "react";
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