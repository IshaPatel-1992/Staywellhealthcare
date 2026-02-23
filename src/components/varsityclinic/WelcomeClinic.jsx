import React from "react";

export default function WelcomeClinic() {
  return (
    <section className="py-16 md:py-20 bg-linear-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#DC2227]">
          Welcome to Staywell Medical Clinic
        </h2>
        <p className="mt-4 text-gray-700">
          Two short paragraphs + 3 doctor/pharmacist cards + image on right goes here.
        </p>
      </div>
    </section>
  );
}