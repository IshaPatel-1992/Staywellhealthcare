// src/components/varsitypharmacy/FAQSection.jsx
import React, { useState } from "react";

const BRAND_RED = "#DC2227";
const BRAND_GRAY = "#515D72";

const faqs = [
  {
    q: "Can Stay Well Pharmacy bill my insurance directly?",
    a: `Yes, Stay Well Pharmacy is registered with most insurance and funding agencies, allowing us to bill them on your behalf. We work closely with Alberta Aids to Daily Living (AADL), Workers Compensation Board, First Nations NIHB, Income for the Handicapped, Alberta Works, and other private insurance companies.`,
  },
  {
    q: "Do you offer home delivery?",
    a: `Yes. We offer home delivery options. Please contact the pharmacy to confirm eligibility, delivery area, and timelines.`,
  },
  {
    q: "Can you order a product if it’s out of stock or unavailable?",
    a: `Yes. If an item is not in stock, we can place a special order and notify you when it arrives (availability depends on supplier stock).`,
  },
  {
    q: "Do I need an appointment to visit the Stay Well Pharmacy?",
    a: `No appointment is needed for most pharmacy services. Some clinical services may require booking—use the appointment link or call us to confirm.`,
  },
];

function PlusIcon({ open }) {
  return (
    <span
      className="relative inline-flex items-center justify-center w-6 h-6"
      aria-hidden="true"
    >
      {/* horizontal bar */}
      <span className="absolute w-4 h-0.5 bg-black/60 rounded" />
      {/* vertical bar (hide when open) */}
      <span
        className={`absolute w-0.5 h-4 bg-black/60 rounded transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

export default function PharmacyFAQ() {
  const [openIdx, setOpenIdx] = useState(0); // first open like your screenshot

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center tracking-tight"
          style={{ color: BRAND_RED, fontFamily: "var(--font-heading)" }}
        >
          Frequent Asked Questions
        </h2>

        <div className="mt-10 md:mt-12 space-y-6">
          {faqs.map((item, idx) => {
            const open = openIdx === idx;

            return (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-5 md:py-6 text-left"
                  aria-expanded={open}
                >
                  <span
                    className="text-base md:text-lg font-semibold"
                    style={{ color: BRAND_GRAY }}
                  >
                    {item.q}
                  </span>

                  <span className="shrink-0">
                    <PlusIcon open={open} />
                  </span>
                </button>

                <div
                  className={`px-6 md:px-8 transition-all duration-300 ${
                    open ? "pb-6 md:pb-8" : "pb-0"
                  }`}
                >
                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="text-[15px] md:text-base leading-7 md:leading-8"
                        style={{ color: BRAND_GRAY }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}