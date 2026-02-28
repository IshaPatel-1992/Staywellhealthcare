
import React from "react";
import NavbarPharmacy from "@/components/varsitypharmacy/NavbarPharmacy";
import HeroPharmacy from "@/components/varsitypharmacy/HeroPharmacy";
import CTAPharmacy from "@/components/varsitypharmacy/CTAPharmacy";
import PharmacyServices from "@/components/varsitypharmacy/PharmacyServices";
import WelcomePharmacy from "@/components/varsitypharmacy/WelcomePharmacy";
//import PharmacyReviews from "../../components/varsitypharmacy/PharmacyReviews";
import PharmacyFAQ from "@/components/varsitypharmacy/PharmacyFAQ";
import FooterPharmacy from "@/components/varsitypharmacy/FooterPharmacy";




export default function PharmacyHomePage() {
  return (
    <main className="min-h-svh bg-white text-gray-900">
      <NavbarPharmacy />

      <HeroPharmacy />

      <CTAPharmacy />

      <PharmacyServices />

      <WelcomePharmacy />

      { /* <PharmacyReviews /> */ }

      <PharmacyFAQ /> 

       <FooterPharmacy /> 

      
    </main>
  );
}