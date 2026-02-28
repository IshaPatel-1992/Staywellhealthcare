// src/components/varsitypharmacy/FooterPharmacy.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from "react-icons/fa";
import { FaEnvelope as FaMail, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// ✅ Replace with your real assets
import footerBg from "@/assets/staywell-home-hero-02.webp"; // background image for top strip
import logo from "@/assets/logo/LogoStaywellPharmacy.png";

const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";

export default function FooterPharmacy() {
    const hours = [
        { day: "Monday", time: "9:00 AM - 9:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 9:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 9:00 PM" },
        { day: "Thursday", time: "9:00 AM - 9:00 PM" },
        { day: "Friday", time: "9:00 AM - 9:00 PM" },
        { day: "Saturday", time: "9:00 AM - 5:00 PM" },
        { day: "Sunday", time: "10:00 AM - 3:00 PM" },
    ];

    // ✅ Update these details
    const contact = {
        address: "159 Carrington Plz, Calgary, AB T3P 1Y3",
        phone: "825-414-0721",
        fax: "825-414-0722",
        email: "info@staywellpharmacy.ca",
        pharmacyLicenseHref: "#", // add actual link (pdf/page)
    };

    // ✅ Google map embed (replace src with your real one if needed)
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5011.618259895248!2d-114.15658152318905!3d51.09352994085315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f22fdff8325%3A0x2a98586fbc6664aa!2s4624%20Varsity%20Dr%20NW%2C%20Calgary%2C%20AB%20T3A%202V7!5e0!3m2!1sen!2sca!4v1772309560967!5m2!1sen!2sca";

    return (
        <footer className="bg-white">
            {/* ================= TOP BACKGROUND + MAP STRIP ================= */}
<section className="relative w-full">
  <div className="relative h-65 sm:h-75 md:h-90 overflow-hidden">
    <img
      src={footerBg}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* white overlay like screenshot */}
    <div className="absolute inset-0 bg-white/70" />

    {/* ✅ LEFT LOGO (bigger) */}
    <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2">
      <img
        src={logo}
        alt="Staywell Pharmacy"
        className="h-18 sm:h-22 md:h-26 w-auto object-contain drop-shadow-sm"
        loading="lazy"
      />
    </div>

    {/* Map overlay (UNCHANGED) */}
    <div className="absolute right-6 md:right-10 top-10 md:top-12 w-90 sm:w-105 md:w-130 h-50 sm:h-55 md:h-65 rounded-xl overflow-hidden shadow-md border border-black/10 bg-white">
      <iframe
        title="Staywell Pharmacy Map"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

            {/* ================= FOOTER CONTENT ================= */}
            <div className="border-t border-black/10">
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                    <div className="grid gap-10 md:gap-12 lg:grid-cols-3 items-start">
                        {/* ================= LEFT: OPEN HOURS ================= */}
                        <div>
                            <h3
                                className="text-sm font-extrabold tracking-wide uppercase"
                                style={{ color: BRAND_GRAY, fontFamily: "var(--font-heading)" }}
                            >
                                OPEN HOURS
                            </h3>

                            <ul className="mt-5 space-y-3 text-[15px]" style={{ color: BRAND_GRAY }}>
                                {hours.map((h) => (
                                    <li key={h.day} className="flex gap-3">
                                        <span className="mt-1.75 inline-block w-1.5 h-1.5 rounded-full bg-black/50" />
                                        <span>
                                            <span className="font-medium">{h.day}:</span> {h.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ================= MIDDLE: ADDRESS/PHONE/FAX + LICENSE TEXT ================= */}
                        <div className="space-y-7">
                            {/* Address */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-sm" style={{ color: BRAND_RED }} />
                                    <div
                                        className="text-[13px] font-extrabold tracking-wide uppercase"
                                        style={{ color: BRAND_GRAY }}
                                    >
                                        ADDRESS
                                    </div>
                                </div>
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 inline-block text-[15px] underline decoration-black/20 hover:decoration-black/50 transition"
                                    style={{ color: BRAND_GRAY }}
                                >
                                    {contact.address}
                                </a>
                            </div>

                            {/* Phone */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-sm" style={{ color: BRAND_RED }} />
                                    <div
                                        className="text-[13px] font-extrabold tracking-wide uppercase"
                                        style={{ color: BRAND_GRAY }}
                                    >
                                        PHONE
                                    </div>
                                </div>
                                <a
                                    href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                                    className="mt-2 inline-block text-[15px] underline decoration-black/20 hover:decoration-black/50 transition"
                                    style={{ color: BRAND_GRAY }}
                                >
                                    {contact.phone}
                                </a>
                            </div>

                            {/* Fax */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaFax className="text-sm" style={{ color: BRAND_RED }} />
                                    <div
                                        className="text-[13px] font-extrabold tracking-wide uppercase"
                                        style={{ color: BRAND_GRAY }}
                                    >
                                        FAX
                                    </div>
                                </div>
                                <div className="mt-2 text-[15px]" style={{ color: BRAND_GRAY }}>
                                    {contact.fax}
                                </div>
                            </div>

                            {/* License link + required text */}
                            <div className="pt-2">
                                <a
                                    href={contact.pharmacyLicenseHref}
                                    className="inline-block text-[15px] underline decoration-black/20 hover:decoration-black/50 transition"
                                    style={{ color: BRAND_GRAY }}
                                >
                                    Pharmacy license
                                </a>

                                <p className="mt-3 text-[13px] leading-6 text-black/60 max-w-md">
                                    The licensee is required to provide, on the request of a patient, the name and
                                    practice permit number of any regulated member who provides a pharmacy service
                                    to the patient or who engages in the practice of pharmacy with respect to a patient.
                                </p>
                            </div>
                        </div>

                        {/* ================= RIGHT: LOGO + EMAIL + SOCIAL ================= */}
                        <div className="lg:text-center">
                            <div className="flex justify-start lg:justify-center">
                                <img
                                    src={logo}
                                    alt="Staywell Pharmacy"
                                    className="h-14 w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>

                            {/* Email */}
                            <div className="mt-6">
                                <div className="flex items-center gap-2 lg:justify-center">
                                    <FaEnvelope className="text-sm" style={{ color: BRAND_RED }} />
                                    <div
                                        className="text-[13px] font-extrabold tracking-wide uppercase"
                                        style={{ color: BRAND_GRAY }}
                                    >
                                        EMAIL
                                    </div>
                                </div>

                                <a
                                    href={`mailto:${contact.email}`}
                                    className="mt-2 inline-block text-[15px] underline decoration-black/20 hover:decoration-black/50 transition"
                                    style={{ color: BRAND_GRAY }}
                                >
                                    {contact.email}
                                </a>
                            </div>

                            {/* Social */}
                            <div className="mt-8">
                                <div
                                    className="text-[13px] font-extrabold tracking-wide uppercase"
                                    style={{ color: BRAND_GRAY }}
                                >
                                    GET IN TOUCH
                                </div>

                                <div className="mt-4 flex items-center gap-4 lg:justify-center">
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="w-11 h-11 rounded-full border border-black/10 shadow-sm flex items-center justify-center hover:opacity-90 transition"
                                        style={{ backgroundColor: BRAND_RED }}
                                        aria-label="Email"
                                    >
                                        <FaMail className="text-white" />
                                    </a>

                                    <a
                                        href="#"
                                        className="w-11 h-11 rounded-full border border-black/10 shadow-sm flex items-center justify-center hover:opacity-90 transition"
                                        style={{ backgroundColor: BRAND_RED }}
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF className="text-white" />
                                    </a>

                                    <a
                                        href="#"
                                        className="w-11 h-11 rounded-full border border-black/10 shadow-sm flex items-center justify-center hover:opacity-90 transition"
                                        style={{ backgroundColor: BRAND_RED }}
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram className="text-white" />
                                    </a>

                                    <a
                                        href="#"
                                        className="w-11 h-11 rounded-full border border-black/10 shadow-sm flex items-center justify-center hover:opacity-90 transition"
                                        style={{ backgroundColor: BRAND_RED }}
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-6 border-t border-black/10 text-xs text-center" style={{ color: BRAND_GRAY }}>
                        © {new Date().getFullYear()} Staywell Pharmacy. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}