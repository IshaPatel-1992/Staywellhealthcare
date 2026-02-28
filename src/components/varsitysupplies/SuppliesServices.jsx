// src/components/varsitypharmacy/PharmacyServices.jsx
import React from "react";
import { HiPhone } from "react-icons/hi2";

// Images (replace with your actual imports)
import TravelHealthImg from "@/assets/Pharmacy/Services/image24.jpg";
import WalkinImg from "@/assets/Pharmacy/Services/image38.jpg";
import CompoundingImg from "@/assets/Pharmacy/Services/image39.jpg";
import MensImg from "@/assets/Pharmacy/Services/image40.jpg";
import WomensImg from "@/assets/Pharmacy/Services/image41.jpg";
import PrepImg from "@/assets/Pharmacy/Services/image16.jpg";
import ChronicImg from "@/assets/Pharmacy/Services/image44.jpg";
import ImmunizationsImg from "@/assets/Pharmacy/Services/image46.jpg";
import InjectionsImg from "@/assets/Pharmacy/Services/image47.jpg";
import MinorInjuriesImg from "@/assets/Pharmacy/Services/image19.jpg";
import DeliveryImg from "@/assets/Pharmacy/Services/image29.jpg";
import WellnessImg from "@/assets/Pharmacy/Services/image45.jpg";
import OatImg from "@/assets/Pharmacy/Services/image21.jpg";
import ComplianceImg from "@/assets/Pharmacy/Services/image30.jpg";
import HomecareImg from "@/assets/Pharmacy/Services/image27.jpg";
import RentalsImg from "@/assets/Pharmacy/Services/image28.jpg";
import BreastPumpImg from "@/assets/Pharmacy/Services/image06.jpg";

const BRAND_GREEN = "#79BD43";
const BRAND_RED = "#DC2227";
const TEXT_GRAY = "#5C5656";

// ✅ Sample data (edit as needed)
// ✅ Updated services (based on StaywellPharmacy.ca "Our Services")
const services = [
  {
    title: "Travel Health",
    image: TravelHealthImg,
    blurb:
      "Plan your next trip with confidence. Get a preconsultation for personalized advice and vaccinations tailored to your travel needs.",
    links: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/travel/8254140721?noNav=true" }],
  },

  {
    title: "Walk-in Prescribing Pharmacists",
    image: WalkinImg,
    blurb: "No appointment? No problem. Visit us for quick and convenient access to prescriptions.",
    links: [{ label: "+ Explore our Pharmacist Led Walk-in Service", href: "https://staywellpharmacy.ca/#prescribing-pharmacists" }],
    orText: "Or",
    secondaryLinks: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "Compounding",
    image: CompoundingImg, // ✅ FIXED (was mage)
    blurb: "We provided compounding services for a variety of conditions such as:",
    bullets: ["HRT formulations", "Veterinary compounding", "Pain creams", "Cosmetics", "and more..."],
    call: { label: "Call: 403-874-8787", tel: "tel:+14038748787" },
  },

  {
    title: "Men’s Health",
    image: MensImg,
    blurb: "Specialized services to address men’s unique health concerns like ED.",
    links: [{ label: "+ Explore our Pharmacist Led Walk-in Service", href: "https://staywellpharmacy.ca/#prescribing-pharmacists" }],
    orText: "Or",
    secondaryLinks: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "Women’s Health",
    image: WomensImg,
    blurb: "Empowering women’s health with expert guidance and care tailored to your needs.",
    links: [{ label: "+ Explore our Pharmacist Led Walk-in Service", href: "https://staywellpharmacy.ca/#prescribing-pharmacists" }],
    orText: "Or",
    secondaryLinks: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  // ✅ Additional cards shown on StaywellPharmacy.ca
  {
    title: "PreP and LGBTQIA2S+",
    image: PrepImg, // add image import if you have one
    blurb: "Inclusive, compassionate care for all. Our services are designed to support the needs of the LGBTQIA2S+ community.",
    links: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
    orText: "Or",
    call: { label: "Call: 403-874-8787", tel: "tel:+14038748787" },
  },

  {
    title: "Chronic diseases",
    image: ChronicImg,
    blurb: "Comprehensive management and support for chronic conditions, helping you live well.",
    links: [{ label: "+ Explore our Pharmacist Led Walk-in Service", href: "https://staywellpharmacy.ca/#prescribing-pharmacists" }],
    orText: "Or",
    secondaryLinks: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "Immunizations",
    image: ImmunizationsImg,
    blurb: "Protect yourself and your loved ones. We offer a full range of vaccines for all ages.",
    bullets: ["Flu/COVID/RSV", "Yellow Fever", "TDAP/HPV/Shingles", "PNEUMONIA", "and more..."],
    links: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "Injections",
    image: InjectionsImg,
    blurb: "Convenient injection services to ensure your treatment plan stays on track.",
    bullets: ["B12", "Mental Health Medications", "Diabetes Medications", "Allergy Serums", "and more..."],
    links: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "Minor Injuries",
    image: MinorInjuriesImg,
    blurb: "Quick and effective treatment for minor injuries. We're here to help you heal faster.",
    links: [{ label: "+ Explore our Pharmacist Led Walk-in Service", href: "https://staywellpharmacy.ca/#prescribing-pharmacists" }],
    orText: "Or",
    secondaryLinks: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "Free local delivery",
    image: DeliveryImg,
    blurb: "Can’t make it to us? We’ll bring your medications to you with our free local delivery service.",
    call: { label: "Call: 403-874-8787", tel: "tel:+14038748787" },
  },

  {
    title: "Wellness",
    image: WellnessImg,
    blurb: "Stay on top of your health with our wellness services, from screenings to personalized advice.",
    links: [{ label: "+ Explore our Pharmacist Led Walk-in Service", href: "https://staywellpharmacy.ca/#prescribing-pharmacists" }],
    orText: "Or",
    secondaryLinks: [{ label: "+ Book Now", href: "https://www.bookmypharmacy.com/?noNav=true" }],
  },

  {
    title: "OAT Services",
    image: OatImg,
    blurb: "We offer Opioid Agonist Treatment services such as:",
    bullets: ["Methadone", "Suboxone", "Sublocade Administration"],
    call: { label: "Call to inquire: 403-874-8787", tel: "tel:+14038748787" },
  },

  {
    title: "Compliance Packaging",
    image: ComplianceImg,
    blurb: "Simplify your medication routine with our easy-to-use compliance packaging.",
    call: { label: "Call: 403-874-8787", tel: "tel:+14038748787" },
  },

  {
    title: "Homecare",
    image: HomecareImg,
    blurb: "We carry a variety of home care products.",
    links: [{ label: "+ Visit our Home Care Site", href: "https://www.staywellmedicalsupplies.ca/" }],
  },

  {
    title: "Rentals",
    image: RentalsImg,
    blurb: "Need medical equipment? We offer rentals to make your recovery smoother.",
    links: [{ label: "+ Visit our Home Care Site", href: "https://www.staywellmedicalsupplies.ca/" }],
  },

  {
    title: "Breast Pump Rentals",
    image: BreastPumpImg,
    blurb: "We carry the Medela breast pump system for Rental, along with a variety of accessories",
    call: { label: "Call now: 403-874-8787", tel: "tel:+14038748787" },
  },
];

function ServiceCard({ service }) {
  return (
    <article
      className="
        group relative
        rounded-2xl bg-white
        border shadow-sm
        transition duration-300
        hover:shadow-lg
        pt-20
        h-full flex flex-col
      "
      style={{ borderColor: `${BRAND_GREEN}80` }}
    >
      {/* Floating image */}
      <div className="absolute -top-10 left-6 right-6">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src={service.image}
            alt={service.title}
            className="h-40 w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-7 flex flex-col flex-1">
          {/* ✅ Title clearly below image */}
          <h3 className="mt-10 text-[22px] leading-snug font-extrabold text-black">
            {service.title}
          </h3>

        {/* ✅ Blurb with + icon (ONLY ONCE, here) */}
        {service.blurb ? (
          <div
            className="mt-3 flex gap-2 text-[15px] leading-7"
            style={{ color: TEXT_GRAY, fontFamily: "var(--font-body)" }}
          >
            <span className="font-extrabold">+</span>
            <p className="m-0">{service.blurb}</p>
          </div>
        ) : null}

        {/* Bullets */}
        {service.bullets?.length ? (
          <ul className="mt-3 space-y-2 text-[15px]" style={{ color: TEXT_GRAY }}>
            {service.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5">–</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* ✅ Bottom actions pinned to bottom */}
        <div className="mt-auto pt-5">
          {/* Links (primary) */}
          {service.links?.length ? (
            <div className="space-y-3">
              {service.links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target={l.target || "_blank"}
                  rel="noreferrer"
                  className="block font-extrabold underline underline-offset-4 hover:opacity-80"
                  style={{ color: BRAND_RED }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}

          {/* Or */}
          {service.orText ? (
            <div className="mt-4 text-[15px] italic" style={{ color: TEXT_GRAY }}>
              {service.orText}
            </div>
          ) : null}

          {/* Secondary links */}
          {service.secondaryLinks?.length ? (
            <div className="mt-3 space-y-3">
              {service.secondaryLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target={l.target || "_blank"}
                  rel="noreferrer"
                  className="block font-extrabold underline underline-offset-4 hover:opacity-80"
                  style={{ color: BRAND_RED }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}

          {/* Call row */}
          {service.call?.tel ? (
            <a
              href={service.call.tel}
              className="mt-5 inline-flex items-center gap-2 font-extrabold underline underline-offset-4 hover:opacity-80"
              style={{ color: BRAND_RED }}
            >
              <HiPhone className="opacity-90" />
              {service.call.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function PharmacyServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
            <span className="text-[#DC2227]" style={{ fontFamily: "var(--font-heading)" }}>
              Our Services
            </span>
          </h2>

          <p
            className="mt-4 text-lg leading-[2.1rem]"
            style={{ color: TEXT_GRAY, fontFamily: "var(--font-body)" }}
          >
            Explore our wide range of services designed to keep you and your family healthy —
            we’re not just your pharmacy, we’re your health partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}