import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

export default function CTAClinic() {
  const tabs = useMemo(
    () => [
      { key: "clinic", label: "Staywell Medical Clinic", to: "/varsityclinic" },
      { key: "pharmacy", label: "Staywell Pharmacy", to: "/varsitypharmacy/pharmacy" },
      {
        key: "supplies",
        label: "Staywell Homecare",
        type: "external",
        url: "https://staywellmedicalsupplies.ca/",
      },
    ],
    []
  );

  return (
    <section className="bg-[#DC2227]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tabs.map((t) => {
            // ✅ External Link
            if (t.type === "external") {
              return (
                <a
                  key={t.key}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "flex items-center justify-center",
                    "font-(--font-heading)",
                    "font-extrabold",
                    "text-[24px] leading-tight",
                    "px-3.75 py-4.5",
                    "min-h-23.5",
                    "rounded-xl",
                    "border-2 border-white/25",
                    "transition-all duration-300",
                    "bg-[#78BD43] text-white hover:bg-white hover:text-[#DC2227]",
                    "shadow-md hover:shadow-lg hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  {t.label}
                </a>
              );
            }

            // ✅ Internal Route (Active Styling Applies Here Only)
            return (
              <NavLink
                key={t.key}
                to={t.to}
                end
                className={({ isActive }) =>
                  [
                    "flex items-center justify-center",
                    "font-(--font-heading)",
                    "font-extrabold",
                    "text-[24px] leading-tight",
                    "px-3.75 py-4.5",
                    "min-h-23.5",
                    "rounded-xl",
                    "border-2 border-white/25",
                    "transition-all duration-300",
                    isActive
                      ? "bg-white text-[#DC2227]" // ✅ ONLY active page turns white/red
                      : "bg-[#78BD43] text-white hover:bg-white hover:text-[#DC2227]",
                    "shadow-md hover:shadow-lg hover:-translate-y-0.5",
                  ].join(" ")
                }
              >
                {t.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}