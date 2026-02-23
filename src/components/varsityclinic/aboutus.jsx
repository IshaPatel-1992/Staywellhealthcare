import React from "react";

export default function WelcomeClinicSection() {
  const team = [
    {
      name: "Dr. Aisha Khan",
      role: "Family Physician",
      desc: "Primary care, chronic disease management, and preventive health for all ages.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Walk-In Physician",
      desc: "Same-day care for common illnesses, minor concerns, and quick medical advice.",
    },
    {
      name: "Sarah Patel, RPh",
      role: "Pharmacist",
      desc: "Prescriptions, medication reviews, vaccinations, and ongoing pharmacy support.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-white via-emerald-50/40 to-emerald-50/70 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: Text + Cards */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 px-4 py-2 text-emerald-800 text-sm font-semibold">
              Welcome to our Clinic
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-emerald-900 leading-tight">
              Compassionate care, modern clinic experience
            </h2>

            {/* 2 paragraphs (short, ~3 lines each) */}
            <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed">
              We’re here to make healthcare simple — friendly providers, efficient
              visits, and support you can count on at every step.
            </p>
            <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">
              From walk-in care to ongoing family practice and pharmacy services,
              our team focuses on comfort, clarity, and continuity.
            </p>

            {/* Cards */}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              {team.map((p) => (
                <div
                  key={p.name}
                  className="group rounded-2xl border border-emerald-100 bg-white/85 backdrop-blur shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      {/* Avatar placeholder */}
                      <div className="h-11 w-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-extrabold">
                        {p.name
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </div>

                      <div className="min-w-0">
                        <div className="font-bold text-emerald-900 truncate">
                          {p.name}
                        </div>
                        <div className="text-sm font-semibold text-emerald-700">
                          {p.role}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* subtle bottom accent */}
                  <div className="h-1 w-full bg-linear-to-r from-emerald-200 via-emerald-300 to-teal-200 opacity-70 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-200/30 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-lg bg-white">
              <img
                src="/images/clinic-welcome.jpg"
                alt="Clinic welcome"
                className="w-full h-80 md:h-105 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />

              {/* Optional badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-white/90 backdrop-blur border border-emerald-100 p-4 shadow-sm">
                  <div className="text-emerald-900 font-extrabold">
                    Trusted care • Friendly team • Convenient pharmacy
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    Walk-in, family practice, prescriptions, vaccinations & more.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}