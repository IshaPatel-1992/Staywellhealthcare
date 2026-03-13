import React, { useMemo, useState } from "react";
import { HiCheckCircle, HiPhone, HiMapPin } from "react-icons/hi2";
import PrescribingCard from "@/components/varsitypharmacy/PrescribingCard";
import NavbarPharmacy from "@/components/varsitypharmacy/NavbarPharmacy";
import FooterPharmacy from "@/components/varsitypharmacy/FooterPharmacy";
import WomensHealthImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/image34.jpg";
import SkinConditionsImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/image35.jpg";
import EarEyeMouthImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/image36.jpg";
import MensHealthImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/image31.jpg";
import StomachImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/image32.jpg";
import ChronicDiseaseImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/image08.jpg";
import PrescribingBannerImg from "@/assets/Varsity1/PharmacyServices/PrescribingPharmacist/shutterstock_2738941401.jpg";

// ✅ update to your real prescribing booking link (this is travel right now)
const BOOK_URL = "https://www.bookmypharmacy.com/travel/8254140721?noNav=true";
const PHONE = "tel:+14038748787";

export default function PrescribingPharmacist() {
    const [openIndex, setOpenIndex] = useState(0);

    const categories = useMemo(
        () => [
            {
                title: "Women's Health",
                image: WomensHealthImg,
                items: [
                    "Urinary Tract Infection",
                    "Menstrual (Period) Cramps",
                    "Nausea and Vomiting in Pregnancy",
                    "Vaginal Yeast Infection",
                    "Birth Control",
                    "Emergency Contraception (Morning-After Pill)",
                ],
            },
            {
                title: "Skin Conditions",
                image: SkinConditionsImg,
                items: ["Acne", "Eczema", "Fungal infections", "Insect bites", "Impetigo"],
            },
            {
                title: "Ear, Eye and Mouth",
                image: EarEyeMouthImg,
                items: ["Allergies", "Cold sores", "Pink eye", "Dry eye", "Sore throat"],
            },
            {
                title: "Men's Health",
                image: MensHealthImg,
                items: ["Erectile dysfunction", "Hair loss"],
            },
            {
                title: "Stomach",
                image: StomachImg,
                items: ["Heartburn", "Nausea", "Diarrhea", "Hemorrhoids"],
            },
            {
                title: "Chronic Disease Support",
                image: ChronicDiseaseImg,
                items: ["Diabetes support", "Hypertension support", "Smoking cessation", "Sleep support"],
            },
        ],
        []
    );

    // ✅ you removed filtered earlier, so keep it simple for now:
    const filtered = categories;

    return (
        <>
            {/* ✅ Force pharmacy navbar on this page */}
            <NavbarPharmacy />

            <main className="pt-42.5 sm:pt-45 md:pt-47.5">
                {/* ✅ HERO BANNER with readable overlay */}
                <section className="max-w-7xl mx-auto px-6 pt-6 pb-10">
                    <div className="relative overflow-hidden rounded-3xl border border-black/10 shadow-sm">
                        {/* Banner image */}
                        <div className="h-105 sm:h-105 md:h-115 w-full">
                            <img
                                src={PrescribingBannerImg}
                                alt="Prescribing Pharmacist"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* ✅ Overlay layers for readability (works on any photo) */}
                        {/* soft dark wash */}
                        <div className="absolute inset-0 bg-black/35" />
                        {/* subtle gradient from bottom (text area) */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-transparent" />

                        {/* Content overlay */}
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full p-6 sm:p-8 md:p-10">
                                <div className="max-w-3xl">
                                    {/* Title */}
                                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white drop-shadow">
                                        Prescribing Pharmacist (APA)
                                    </h1>

                                    {/* Subtext */}
                                    <p className="mt-3 text-[14px] sm:text-[15px] md:text-base leading-7 text-white/90">
                                        Our pharmacists are authorized to assess and prescribe treatment for select minor conditions to help you feel better sooner.
                                    </p>

                                    {/* CTA row */}
                                    <div className="mt-5 grid grid-cols-1 gap-3 sm:flex sm:flex-row">
                                        {/* Primary CTA (red/green theme) */}
                                        <a
                                            href={BOOK_URL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                inline-flex items-center justify-center
                rounded-2xl px-5 py-3
                font-semibold text-white
                bg-staywell-red hover:bg-staywell-green
                transition
                shadow-[0_12px_28px_rgba(0,0,0,0.25)]
              "
                                        >
                                            Book appointment
                                        </a>

                                        {/* Secondary CTA (glass button) */}
                                        <a
                                            href={PHONE}
                                            className="
                inline-flex items-center justify-center
                rounded-2xl px-5 py-3
                font-semibold text-white
                border border-white/30
                bg-white/10 hover:bg-white/15
                transition
                backdrop-blur-md
              "
                                        >
                                            <HiPhone className="mr-2" /> Call / Walk-in
                                        </a>

                                        {/* Secondary CTA */}
                                        <a
                                            href="#visit"
                                            className="
                inline-flex items-center justify-center
                rounded-2xl px-5 py-3
                font-semibold text-white
                border border-white/30
                bg-white/10 hover:bg-white/15
                transition
                backdrop-blur-md
              "
                                        >
                                            <HiMapPin className="mr-2" /> Directions
                                        </a>
                                    </div>                       
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONDITIONS */}
                <section className="max-w-7xl mx-auto px-6 pb-12">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-extrabold text-staywell-nav">
                            Common conditions our Pharmacy Team can assess / treat
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 leading-6">
                            Pharmacists can assess and prescribe for certain minor illnesses when appropriate.
                            Discover which conditions they can assist with. If you're still unsure about your symptoms,
                            call or walk-in at Staywell Pharmacy. Note not all assessments lead to prescriptions and our
                            pharmacy team may refer you to see another provider.
                        </p>
                    </div>

                    {/* ✅ Exact card layout */}
                    <div className="mt-8 grid md:grid-cols-3 gap-8">
                        {filtered.map((c, idx) => (
                            <PrescribingCard
                                key={c.title}
                                image={c.image}
                                title={c.title}
                                bookingUrl={BOOK_URL}
                                items={c.items}
                                open={openIndex === idx}
                                onToggle={() => setOpenIndex((v) => (v === idx ? -1 : idx))}
                            />
                        ))}
                    </div>
                </section>

                {/* VISIT anchor (for Directions button) */}
                <section id="visit" className="max-w-7xl mx-auto px-6 pb-10">
                    {/* You can replace this with your map/contact block */}
                </section>

                <FooterPharmacy />
            </main>
        </>
    );
}