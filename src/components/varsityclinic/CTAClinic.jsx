import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

export default function CTAClinic() {
  const tabs = useMemo(
    () => [
      { key: "clinic", label: "Staywell Medical Clinic", to: "/varsityclinic" },
      { key: "pharmacy", label: "Staywell Pharmacy", to: "/varsitypharmacy" },
      { key: "supplies", label: "Staywell Homecare", to: "/varsitysupplies" },
    ],
    []
  );

  return (
    <section className="bg-[#DC2227]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tabs.map((t) => (
            <NavLink
              key={t.key}
              to={t.to}
              className={({ isActive }) =>
                [
                  "flex items-center justify-center",
                  "font-(--font-heading)",       // Paytone One
                  "font-extrabold",
                  "text-[24px] leading-tight",   // 24px size
                  "px-3.75 py-4.5",         // exact padding
                  "min-h-23.5",                // match ~94px height
                  "rounded-xl",                  // slightly rounded
                  "border-2 border-white/25",    // subtle border
                  "transition-all duration-300", // smooth hover
                  isActive
                    ? "bg-white text-[#DC2227]"  // active white/red
                    : "bg-[#78BD43] text-white hover:bg-white hover:text-[#DC2227]",
                  "shadow-md hover:shadow-lg hover:-translate-y-0.5",
                ].join(" ")
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}