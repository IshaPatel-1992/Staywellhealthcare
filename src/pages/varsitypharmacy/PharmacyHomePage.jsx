
import React from "react";
import NavbarPharmacy from "@/components/varsitypharmacy/NavbarPharmacy";
import HeroPharmacy from "@/components/varsitypharmacy/HeroPharmacy";
import CTAPharmacy from "@/components/varsitypharmacy/CTAPharmacy";
import PharmacyServices from "@/components/varsitypharmacy/PharmacyServices";



export default function PharmacyHomePage() {
  return (
    <main className="min-h-svh bg-white text-gray-900">
      <NavbarPharmacy />

      <HeroPharmacy />

      <CTAPharmacy />

      <PharmacyServices />
    </main>
  );
}