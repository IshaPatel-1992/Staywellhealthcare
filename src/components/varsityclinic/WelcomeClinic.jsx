import React, { useEffect, useMemo, useState } from "react";


// Staff images (add these files to your src/assets/staff folder)
import drLinda from "@/assets/staywell-home-doc-placeholder-femal.webp";
import drAlex from "@/assets/staywell-home-doc-placeholder-man.webp"; // add if you have it
import rphMaimoona from "@/assets/staywell-home-doc-placeholder-femal.webp";
import msRima from "@/assets/staywell-home-doc-placeholder-femal.webp";
import rphSandip from "@/assets/Pharmacy/Services/image11.jpg";

// Right-side images
import right1 from "@/assets/SelectedPhotos/IMG_20260305_132651.jpg";
import right2 from "@/assets/SelectedPhotos/DSC_0295 copy.jpg";
import right3 from "@/assets/SelectedPhotos/DSC_0309 copy.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function WelcomeClinic() {
  const CLINIC_PHONE = "tel:+15879556207";
  const CLINIC_FAX = "fax:+15879556208"; // optional use
  const PHARM_PHONE = "tel:+14038748787";
  const PHARM_FAX = "fax:+15873508585";
  const PHARM_EMAIL = "mailto:varsity@staywellpharmacy.ca";
  const SUPPLIES_EMAIL = "mailto:varsity@staywellpharmacy.ca";



  const team = useMemo(
    () => [
      {
        name: "Dr. Linda Ukey-Jarrett",
        role: "Family Physician",
        credentials: "MBBS, LMCC, CCFP",
        img: drLinda,
        cta: "call",
        ctaHref: CLINIC_PHONE,
        ctaLabel: "Call Now",
        metaLine: "CPSA ID 029854 • PRAC ID 6171-91308",
        actions: [
          {
            label: "Book Now",
            href: "https://patient.medeohealth.com/booking/staywell-medical-clinic-varsity",
            type: "external"
          },
          {
            label: "Call Now",
            href: CLINIC_PHONE,
            type: "phone"
          }
        ],
        bio: `Dr. Linda Ukey-Jarrett is a dedicated Family Physician committed to providing compassionate, patient-centered care to individuals and families. She completed her medical training with an MBBS degree and is certified by the College of Family Physicians of Canada (CCFP). Dr. Ukey-Jarrett is also a Licentiate of the Medical Council of Canada (LMCC).
Her practice focuses on preventive medicine, chronic disease management, and supporting patients in maintaining long-term health and wellness. She believes in building strong relationships with her patients and providing clear guidance to help them make informed decisions about their health.
Dr. Ukey-Jarrett is committed to creating a welcoming and respectful environment where patients feel heard, supported, and confident in their care.`

      },
      {
        name: "Dr. Alexander Arthur",
        role: "Family & Addiction Medicine Physician Medical Director",
        credentials: "CCFP, cCSAM, ISAM",
        img: drAlex,
        cta: "call",
        ctaHref: CLINIC_PHONE,
        ctaLabel: "Call Now",
        metaLine: "CPSA ID 038597 • PRAC ID 5379-73308",
        actions: [
          {
            label: "Book Now",
            href: "https://patient.medeohealth.com/booking/staywell-medical-clinic-varsity",
            type: "external"
          },
          {
            label: "Call Now",
            href: CLINIC_PHONE,
            type: "phone"
          }
        ],
        bio: `Dr. Alexander Arthur is a Family and Addiction Medicine Physician and serves as the Medical Director of the clinic. He is certified by the College of Family Physicians of Canada (CCFP) and holds additional certification in addiction medicine through the Canadian Society of Addiction Medicine (cCSAM) and the International Society of Addiction Medicine (ISAM).
Dr. Arthur has extensive experience supporting patients with both general family medicine needs and complex health conditions. His practice focuses on preventive care, chronic disease management, and evidence-based treatment for substance use disorders.
He is committed to providing compassionate, respectful, and non-judgmental care while helping patients build healthier and more stable lives. As Medical Director, Dr. Arthur also works closely with the healthcare team to ensure high standards of patient care and coordinated treatment across services.`
      },
      {
        name: "RPh Maimoona Nirmal",
        role: "Clinical Pharmacist",
        credentials: "BSc Pharm, MSc Infectious Diseases, APA",
        img: rphMaimoona,
        cta: "call",
        ctaHref: PHARM_PHONE,
        ctaLabel: "Call Now",
        metaLine: "Pharmacy Licence No 4704",
        bio: `RPh Maimoona Nirmal is a Clinical Pharmacist with a Bachelor of Science in Pharmacy and a Master’s degree in Infectious Diseases. She is an Additional Prescribing Authorization (APA) pharmacist, allowing her to assess certain health conditions, manage medications, and provide prescribing services when appropriate.
Maimoona is passionate about supporting patients through medication management, prescription reviews, and personalized care plans. She works closely with physicians and healthcare professionals to ensure safe, effective, and coordinated treatment for patients.
Her focus is on helping patients better understand their medications, improving health outcomes, and providing accessible pharmacy care within the community.`
      },
      {
        name: "RPh Sandip Dave",
        role: "Pharmacist",
        credentials: "BSc Pharm, APA, CDE",
        img: rphSandip, // add image in assets similar to others
        cta: "call",
        ctaHref: PHARM_PHONE,
        ctaLabel: "Call Now",
        metaLine: "Staywell Pharmacy (Varsity)",
        bio: `RPh Sandip Dave is a Prescribing Pharmacist with Additional Prescribing Authorization (APA) and a Certified Diabetes Educator (CDE). He provides patient-focused pharmacy care with expertise in medication management, diabetes education, and preventative health services.
Sandip has extensive experience in compounding, travel health consultations, mental health medication support, and HIV prevention services. As a certified PrEP prescriber, he works closely with patients to provide safe, confidential, and evidence-based care.
He is committed to helping patients better understand their medications and supporting improved health outcomes through accessible pharmacy services and collaborative care with the healthcare team.`
      },
      {
        name: "Ms. Rima Dave",
        role: "MOA • Sales Representative",
        credentials: "Certified Compression Stocking Fitter & Sales Representative",
        img: msRima,
        cta: "call",
        ctaHref: PHARM_PHONE, // or separate supplies number if different
        ctaLabel: "Call Now",
        metaLine: "Homecare & Medical Supplies",
        bio: `Ms. Rima Dave supports patients and families as a Medical Office Assistant and Sales Representative at Staywell. She assists with clinic coordination, patient services, and guidance on homecare and medical supply products.
As a Certified Compression Stocking Fitter, she helps patients find the appropriate compression solutions and other medical supplies to support their health and daily comfort. Rima is dedicated to providing friendly, knowledgeable assistance and ensuring that every patient experience is welcoming, efficient, and supportive.`
      },
    ],
    []
  );

  const rightImages = useMemo(
    () => [
      { src: right1, alt: "Clinic interior1" },
      { src: right2, alt: "Clinic interior2" },
      { src: right3, alt: "Clinic interior3" },
    ],
    []
  );

  const [rightIdx, setRightIdx] = useState(0);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setRightIdx((p) => (p + 1) % rightImages.length);
    }, 4200);
    return () => clearInterval(id);
  }, [rightImages.length]);

  return (
    <section className="py-14 md:py-18 lg:py-20 bg-linear-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-stretch">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">

            <h1 className="relative text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
              <span className="font-(--font-heading) text-[#DC2227]">
                Welcome to Our Clinic
              </span>
            </h1>


            <p className="relative mt-4 text-[#515D72] font-normal text-lg leading-7 text-justify">
              Welcome to Staywell, where your health and happiness come first. Our clinic provides a safe, inviting space for individuals and families seeking comprehensive care.
            </p>

            <p className="relative mt-4 text-[#515D72] font-normal text-lg leading-7 text-justify">
              With a dedicated team, we offer preventive services and chronic disease management to support your long-term wellness.
            </p>

            {/* Mobile: show image BEFORE staff */}
            <div className="mt-6 lg:hidden">
              <RightImageSlider
                rightImages={rightImages}
                rightIdx={rightIdx}
                setRightIdx={setRightIdx}
              />
            </div>

            {/* ✅ 3-up staff carousel (no dots) */}
            <h4 className="relative text-2xl md:text-2xl font-bold leading-tight tracking-tight mt-8">
              <span className="font-(--font-heading) text-[#DC2227] drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                Meet Our Team
              </span>
            </h4>

            <StaffCarousel3Up
              items={team}
              bookTo="/varsityclinic/book"
              callTo={CLINIC_PHONE}
              onSelectStaff={setSelectedStaff}
            />

            <div className="flex-1" />
          </div>

          {/* Desktop right image */}
          <div className="hidden lg:flex h-full">
            <RightImageSlider
              rightImages={rightImages}
              rightIdx={rightIdx}
              setRightIdx={setRightIdx}
              fillHeight
            />
          </div>
        </div>
      </div>
      <StaffPopup
        staff={selectedStaff}
        onClose={() => setSelectedStaff(null)}
      />
    </section>
  );
}

function RightImageSlider({ rightImages, rightIdx, setRightIdx, fillHeight = false }) {
  useEffect(() => {
    const id = setInterval(() => {
      setRightIdx((p) => (p + 1) % rightImages.length);
    }, 4200);
    return () => clearInterval(id);
  }, [rightImages.length, setRightIdx]);

  const prev = () =>
    setRightIdx((p) => (p - 1 + rightImages.length) % rightImages.length);

  const next = () => setRightIdx((p) => (p + 1) % rightImages.length);

  return (
    <div className={["relative w-full", fillHeight ? "h-full" : ""].join(" ")}>
      <div className="absolute -inset-4 bg-emerald-200/30 blur-2xl rounded-3xl" />

      <div
        className={[
          "relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white",
          fillHeight ? "h-full" : "h-64 sm:h-72 md:h-80 lg:h-115 xl:h-140",
        ].join(" ")}
      >
        {rightImages.map((img, i) => (
          <img
            key={img.alt + i}
            src={img.src}
            alt={img.alt}
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              i === rightIdx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className={[
            "absolute left-4 top-1/2 -translate-y-1/2 z-10",
            "h-11 w-11 rounded-full bg-white/95 shadow-lg",
            "flex items-center justify-center",
            "hover:bg-white transition",
          ].join(" ")}
        >
          <FaChevronLeft className="text-[#DC2227] text-lg" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className={[
            "absolute right-4 top-1/2 -translate-y-1/2 z-10",
            "h-11 w-11 rounded-full bg-white/95 shadow-lg",
            "flex items-center justify-center",
            "hover:bg-white transition",
          ].join(" ")}
        >
          <FaChevronRight className="text-[#DC2227] text-lg" />
        </button>
      </div>
    </div>
  );
}

function StaffCarousel3Up({ items, bookTo, callTo, onSelectStaff }) {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 1024) return 2;
      return 3;
    };

    const onResize = () => setVisibleCount(compute());
    setVisibleCount(compute());

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((p) => (p + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  const visible = useMemo(() => {
    const out = [];
    for (let k = 0; k < visibleCount; k++) {
      out.push({ ...items[(start + k) % items.length], _k: k });
    }
    return out;
  }, [items, start, visibleCount]);

  return (
    <div className="mt-6">
      <div className="grid gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((m) => {
          const href = m.ctaHref || (m.cta === "call" ? callTo : bookTo);
          const label = m.ctaLabel || (m.cta === "call" ? "Call Now" : "Book Now");

          return (
            <div
              key={`${m.name}-${m._k}`}
              onClick={() => onSelectStaff(m)}
              className="
                cursor-pointer
                rounded-2xl overflow-hidden bg-white
                border border-gray-300
                hover:border-[#DC2227]
                shadow-sm hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="relative">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-60 sm:h-64 lg:h-72 object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />
              </div>

              <div className="px-6 pt-5 pb-6">
                <div className="font-extrabold text-[#DC2227] text-lg sm:text-lg text-center leading-snug">
                  {m.name}
                </div>

                <div className="mt-4 flex justify-center gap-4">
                  {m.actions?.map((a, i) => (
                    <a
                      key={i}
                      href={a.href}
                      target={a.type === "external" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
        text-sm font-bold
        text-[#79BD43]
        underline underline-offset-4
        hover:text-[#DC2227]
        transition
      "
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StaffPopup({ staff, onClose }) {
  useEffect(() => {
    if (!staff) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [staff, onClose]);

  if (!staff) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-3xl
          rounded-4xl bg-white
          shadow-[0_20px_70px_rgba(0,0,0,0.28)]
          px-8 py-10 sm:px-10 sm:py-12
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-xl leading-none"
        >
          ×
        </button>

        <h3 className="text-3xl font-extrabold leading-tight">
          <span className="font-(--font-heading) text-[#DC2227]">
            {staff.name}
          </span>
          <div className="mt-2 text-[#515D72] font-medium text-base">
            {staff.role}
          </div>
          <div className="mt-1 text-gray-500 font-medium text-base">
            {staff.credentials}
          </div>

        </h3>

        <div className="mt-3 text-[#515D72] text-lg leading-9 whitespace-pre-line">
          {staff.bio}
        </div>
      </div>
    </div>
  );
}