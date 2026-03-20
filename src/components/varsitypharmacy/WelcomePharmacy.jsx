import React from "react";

// Replace these with your real assets
import heroBuilding from "@/assets/Varsity1/3together.png";
import managerImg from "@/assets/staywell-home-doc-placeholder-femal.webp";

const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";
const BRAND_GREEN = "#79BD43";

export default function WelcomePharmacy() {
  const hours = [
    { day: "Monday", time: "9 a.m. – 6 p.m." },
    { day: "Tuesday", time: "9 a.m. – 6 p.m." },
    { day: "Wednesday", time: "9 a.m. – 6 p.m." },
    { day: "Thursday", time: "9 a.m. – 6 p.m." },
    { day: "Friday", time: "9 a.m. – 6 p.m." },
    { day: "Saturday", time: "10 a.m. – 3 p.m." },
    { day: "Sunday", time: "Closed" },
  ];

  const pharmacyLicenseHref = "/licenses/4704-RPh Maimoona Nirmal.pdf"; // replace with real link

  return (
    <section id="about-section" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 3 columns on desktop */}
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1.2fr_0.95fr] items-start lg:items-stretch">
          {/* ================= LEFT ================= */}
          <div className="pt-2">
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight"
              style={{ color: BRAND_RED, fontFamily: "var(--font-heading)" }}
            >
              Welcome to
              <br />
              Staywell Pharmacy
            </h1>

            <div className="mt-10">
              <h3
                className="text-3xl font-extrabold"
                style={{ color: BRAND_GRAY, fontFamily: "var(--font-heading)" }}
              >
                Hours:
              </h3>

              <div className="mt-6 max-w-md">
                <div className="divide-y divide-black/10">
                  {hours.map((h) => (
                    <div key={h.day} className="grid grid-cols-2 py-3 text-[15px]">
                      <div className="font-medium" style={{ color: BRAND_GRAY }}>
                        {h.day}
                      </div>
                      <div className="text-right" style={{ color: BRAND_GRAY }}>
                        {h.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.bookmypharmacy.com/?noNav=true"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-90 transition w-full sm:w-auto"
                  style={{ backgroundColor: BRAND_RED }}
                >
                  Book Appointment
                </a>

                <a
                  href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-extrabold text-white text-sm tracking-wide transition hover:opacity-90 w-full sm:w-auto"
                  style={{ backgroundColor: BRAND_GREEN }}
                >
                  Leave a Review
                </a>
              </div>
            </div>
          </div>

          {/* ================= MIDDLE IMAGE ================= */}
          <div className="flex justify-center lg:justify-start h-full">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-md border border-black/10 h-full min-h-105 lg:min-h-0">
              <img
                src={heroBuilding}
                alt="Staywell Pharmacy building"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= RIGHT MANAGER CARD ================= */}
          <aside className="flex justify-center lg:justify-end h-full">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-white h-full">
              <div className="p-2">
                <div className="rounded-xl overflow-hidden border border-black/10">
                  <img
                    src={managerImg}
                    alt="Pharmacy Manager"
                    className="w-full h-75 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="px-6 pb-7 pt-4">
                <div
                  className="text-xl font-extrabold leading-snug text-center"
                  style={{ color: BRAND_GRAY, fontFamily: "var(--font-heading)" }}
                >
                  Clinical Pharmacist
                  <br />
                  RPh Maimoona Nirmal
                </div>

                <p
                  className="mt-3 text-[15px] leading-7 text-center"
                  style={{ color: BRAND_GRAY }}
                >
                  BSc Pharm, MSc Infectious Diseases, APA
                </p>

                <div className="mt-2 text-center">
                  <a
                    href={pharmacyLicenseHref}
                    className="inline-block text-[15px] underline decoration-black/20 hover:decoration-black/50 transition"
                    style={{ color: BRAND_GRAY }}
                  >
                    Pharmacy license
                  </a>
                </div>

                <div className="mt-5 h-px w-full bg-black/10" />

                <div className="mt-5 space-y-3 text-[14.5px]" style={{ color: BRAND_GRAY }}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 font-extrabold text-black/70">Location</span>
                    <a
                      href="https://maps.google.com/?q=4624%20Varsity%20Drive%20NW%20Unit%2010%20Calgary%20AB%20T3A%202L9"
                      target="_blank"
                      rel="noreferrer"
                      className="leading-6 underline decoration-black/20 hover:decoration-black/50 transition"
                    >
                      4624 Varsity Drive NW, Unit #10
                      <br />
                      Calgary, AB T3A 2L9
                    </a>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 font-extrabold text-black/70">Phone</span>
                      <a
                        href="tel:+14038748787"
                        className="underline decoration-black/20 hover:decoration-black/50 transition"
                      >
                        403-874-8787
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="shrink-0 font-extrabold text-black/70">Fax</span>
                      <a
                        href="fax:+15873508585"
                        className="underline decoration-black/20 hover:decoration-black/50 transition"
                      >
                        587-350-8585
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 font-extrabold text-black/70">Email</span>
                    <a
                      href="mailto:varsity@staywellpharmacy.ca"
                      className="break-all underline decoration-black/20 hover:decoration-black/50 transition"
                    >
                      varsity@staywellpharmacy.ca
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+14038748787"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold text-white transition hover:opacity-95"
                  style={{ backgroundColor: BRAND_RED }}
                >
                  Call Pharmacy
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}