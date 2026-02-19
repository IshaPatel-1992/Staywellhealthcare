// src/pages/varsity/Clinic.jsx
import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import logo from "../../assets/logo/Staywell-favicon-01.webp";

// ✅ Replace with your actual banner image
import bannerImg from "../../assets/staywell-home-hero-02.webp";

export default function Clinic() {
  const tabs = useMemo(
    () => [
      { key: "clinic", label: "Clinic", to: "/varsity/clinic" },
      { key: "pharmacy", label: "Pharmacy", to: "/varsity/pharmacy" },
      { key: "supplies", label: "Homecare Supplies", to: "/varsity/supplies" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("clinic");

  return (
    <main className="min-h-svh bg-white text-gray-900">
      {/* HERO / BANNER */}
      <section
      id="home"
      className="relative min-h-100svh pt-24 md:pt-28 flex items-center justify-center text-white px-4 scroll-mt-24 overflow-hidden"
    >
      {/* Image Background */}
      <img
        src={bannerImg}
        alt="Healthcare office background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      

    </section>      
    </main>
  );
}
