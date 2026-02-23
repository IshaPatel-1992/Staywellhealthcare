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
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {tabs.map((t) => (
            <NavLink
              key={t.key}
              to={t.to}
              className={({ isActive }) =>
                [
                  "rounded-2xl text-center",
                  "px-8 py-6",
                  "min-h-21 flex items-center justify-center",
                  "text-xl md:text-2xl font-extrabold tracking-tight",
                  "transition-all duration-300",
                  "border-2 border-white/25",
                  isActive
                    ? "bg-white text-[#DC2227]"
                    : "bg-[#79BD43] text-white hover:bg-white hover:text-[#DC2227]",
                  "shadow-lg hover:shadow-xl hover:-translate-y-0.5",
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