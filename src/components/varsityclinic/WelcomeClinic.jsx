import React, { useEffect, useMemo, useState } from "react";


// Staff images (add these files to your src/assets/staff folder)
import drLinda from "@/assets/Varsity1/staff/webp/linda-ukey-jarrett-family-physician-varsity-staywell.webp";
import drAlex from "@/assets/staywell-home-doc-placeholder-man.webp"; // add if you have it
import rphMaimoona from "@/assets/Varsity1/staff/webp/maimoona-nirmal-clinical-pharmacist-varsity-staywell.webp";
import msRima from "@/assets/Varsity1/staff/webp/rima-dave-homecare-medical-supplies-manager-varsity-staywell.webp";
import rphSandip from "@/assets/Varsity1/staff/webp/sandip-dave-prescribing-pharmacist-varsity-staywell.webp";
import rphParamdeep from "@/assets/Varsity1/staff/webp/paramdeep-pharmacy-manager-varsity-staywell.webp";

// Right-side images
import right1 from "@/assets/Varsity1/staywellwebp/staywell-clinic-personalised-unit1.webp";
import right2 from "@/assets/Varsity1/staywellwebp/staywell-clinic-personalised-unit2.webp";
import right3 from "@/assets/Varsity1/staywellwebp/staywell-exterior-pickup-clinic.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function WelcomeClinic() {
  const CLINIC_PHONE = "tel:+15879556207";
  const CLINIC_FAX = "fax:+15879556208"; // optional use
  const PHARM_PHONE = "tel:+14038748787";
  const PHARM_FAX = "fax:+15873508585";
  const PHARM_EMAIL = "mailto:varsity@staywellpharmacy.ca";
  const SUPPLIES_PHONE = "tel:+14038748787";
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
        bio: `Dr. Linda Ukey-Jarrett is a Family Physician in Calgary with over 15 years of experience providing comprehensive, patient-centered care. She earned her MBBS from the University of Benin (Nigeria) and holds CCFP and LMCC certifications in Canada. She is also CanREACH certified and completed a Compact Fellowship in Psychiatry through the University of Alberta.

Dr. Ukey-Jarrett has a strong focus on mental health and addiction care, working in a collaborative shared-care model with psychiatrists. Her practice also includes full-scope family medicine, with special interests in women’s health, preventative care, and long-term wellness.

Known for her compassionate and approachable nature, she builds strong, trusting relationships with patients of all ages. Outside of her practice, she enjoys traveling, interior decorating, and spending time with her family as a proud wife and mother of three.`

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
        bio: `Dr. Alexander Arthur is a Family and Addiction Medicine Physician in Calgary and serves as the Medical Director at Staywell Healthcare. He earned his medical degree from Kwame Nkrumah University of Science and Technology in Ghana and has extensive international experience across Ghana, the United Kingdom, and Canada.

Dr. Arthur has practiced comprehensive family medicine in diverse settings, including emergency care, hospital medicine, outpatient clinics, and mental health services. In Canada, he provided longitudinal care in Saskatchewan, with a strong focus on mental health and addiction medicine.

He has extensive experience in opioid agonist therapy (OAT), detox and treatment centers, and was a pioneer physician with the Virtual Access to Addiction Medicine (VAAM) program. He is passionate about improving access to care through telemedicine, especially for patients in rural and underserved communities.

Dr. Arthur holds certifications in addiction medicine from the International Society of Addiction Medicine (ISAM), Canadian Society of Addiction Medicine (cCSAM), and the American Board of Preventive Medicine, along with certification from the College of Family Physicians of Canada (CCFP).

He is currently based in Alberta, providing patient-centered care in Calgary with a focus on family medicine, addiction treatment, mental health, and virtual care. Outside of work, he enjoys spending time with his family, listening to jazz music, and travelling.`
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
        actions: [
          {
            label: "Call Now",
            href: PHARM_PHONE,
            type: "phone"
          }
        ],
        bio: `RPh Maimoona Nirmal is a Clinical Pharmacist with a Bachelor of Science in Pharmacy and a Master’s degree in Infectious Diseases. She is an Additional Prescribing Authorization (APA) pharmacist, allowing her to assess certain health conditions, manage medications, and provide prescribing services when appropriate.
Maimoona is passionate about supporting patients through medication management, prescription reviews, and personalized care plans. She works closely with physicians and healthcare professionals to ensure safe, effective, and coordinated treatment for patients.
Her focus is on helping patients better understand their medications, improving health outcomes, and providing accessible pharmacy care within the community.`
      },
      {
        name: "RPh Sandip Dave",
        role: "Pharmacy Manager",
        credentials: "BSc Pharm, APA, CDE",
        img: rphSandip, // add image in assets similar to others
        cta: "call",
        ctaHref: PHARM_PHONE,
        ctaLabel: "Call Now",
        metaLine: "Staywell Pharmacy (Varsity)",
        actions: [
          {
            label: "Call Now",
            href: PHARM_PHONE,
            type: "phone"
          }
        ],
        bio: `RPh Sandip Dave is a Prescribing Pharmacist with Additional Prescribing Authorization (APA) and a Certified Diabetes Educator (CDE). He provides patient-focused pharmacy care with expertise in medication management, diabetes education, and preventative health services.
Sandip has extensive experience in compounding, travel health consultations, mental health medication support, and HIV prevention services. As a certified PrEP prescriber, he works closely with patients to provide safe, confidential, and evidence-based care.
He is committed to helping patients better understand their medications and supporting improved health outcomes through accessible pharmacy services and collaborative care with the healthcare team.`
      },
      {
        name: "RPh Paramdeep",
        role: "Pharmacy Manager",
        credentials: "",
        img: rphParamdeep, // add image in assets similar to others
        cta: "call",
        ctaHref: PHARM_PHONE,
        ctaLabel: "Call Now",
        metaLine: "Staywell Pharmacy (Varsity)",
        actions: [
          {
            label: "Call Now",
            href: PHARM_PHONE,
            type: "phone"
          }
        ],
        bio: `RPh Paramdeep is a dedicated Pharmacy Manager at Staywell Pharmacy, committed to delivering safe, accurate, and patient-centered care. With a strong focus on medication management and patient education, Paramdeep ensures every patient receives personalized guidance and support for their health needs. Known for a compassionate approach and attention to detail, Paramdeep works closely with patients and healthcare providers to optimize treatment outcomes.`
      },
      {
        name: "Ms. Rima Dave",
        role: "Homecare and Medical Supplies Manager",
        credentials: "Certified Compression Stocking Fitter & Sales Representative",
        img: msRima,
        cta: "call",
        ctaHref: SUPPLIES_PHONE, // or separate supplies number if different
        ctaLabel: "Call Now",
        metaLine: "Homecare & Medical Supplies",
         actions: [
          {
            label: "Call Now",
            href: SUPPLIES_PHONE,
            type: "phone"
          }
        ],
        bio: `Ms. Rima Dave is a Homecare and Medical Supplies Manager in Calgary, supporting patients and families with personalized care and guidance. She works as a Medical Office Assistant and Sales Representative at Staywell, assisting with clinic coordination, patient services, and homecare product support.

As a Certified Compression Stocking Fitter, Rima specializes in helping patients find the right compression therapy and medical supplies to improve comfort, mobility, and overall health. She provides expert guidance on a wide range of homecare and medical equipment tailored to individual needs.

Known for her friendly and compassionate approach, Rima is committed to delivering a welcoming and supportive experience while ensuring patients receive the right solutions for their daily care and well-being.`
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
              <div className="relative bg-[#f8f8f8] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-72 object-cover object-top"
                  loading="lazy"
                  draggable={false}
                />
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
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px] overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-start sm:items-center justify-center p-4 sm:p-6">
        <div
          className="
            relative w-full max-w-3xl
            rounded-3xl sm:rounded-4xl bg-white
            shadow-[0_20px_70px_rgba(0,0,0,0.28)]
            px-5 py-6 sm:px-10 sm:py-12
            max-h-[90vh] overflow-y-auto
            overscroll-contain
          "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="absolute right-4 top-4 z-10 text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>

          <h3 className="pr-8 text-2xl sm:text-3xl font-extrabold leading-tight">
            <span className="font-(--font-heading) text-[#DC2227]">
              {staff.name}
            </span>

            <div className="mt-2 text-[#515D72] font-medium text-sm sm:text-base">
              {staff.role}
            </div>

            <div className="mt-1 text-gray-500 font-medium text-sm sm:text-base">
              {staff.credentials}
            </div>
          </h3>

          <div className="mt-4 text-[#515D72] text-base sm:text-lg leading-7 sm:leading-9 whitespace-pre-line">
            {staff.bio}
          </div>
        </div>
      </div>
    </div>
  );
}