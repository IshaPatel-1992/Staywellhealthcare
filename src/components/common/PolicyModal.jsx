import React, { useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";

export default function PolicyModal({ open, onClose }) {
  const panelRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus panel on open (nice UX)
  useEffect(() => {
    if (open) setTimeout(() => panelRef.current?.focus(), 0);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close policies"
        className="absolute inset-0 bg-black/45"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="
          relative z-10 w-[92vw] max-w-3xl
          rounded-2xl bg-white shadow-2xl
          border border-black/10
          outline-none
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-black/10 rounded-t-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#DC2227]">
              Policies
            </h3>

            <button
              type="button"
              onClick={onClose}
              className="
                h-10 w-10 inline-flex items-center justify-center
                rounded-full hover:bg-black/5 transition
              "
              aria-label="Close"
            >
              <HiXMark className="text-2xl text-black/70" />
            </button>
          </div>
        </div>

        {/* Body (scroll) */}
        <div className="max-h-[72vh] overflow-y-auto px-6 py-5">
          <Section title="Scheduling">
            At Staywell Medical Clinic, we encourage our patients to limit walk-in visits to one or two health concerns to help keep wait times manageable. For more complex medical issues or non-urgent matters, please schedule a follow-up appointment with your family doctor.
          </Section>

          <Section title="Test Reports">
            For your privacy and confidentiality, we discuss patient test results, including consult reports, exclusively in person. Our team at Staywell Medical Clinic will contact you to schedule an appointment with your family doctor to review your test results.
          </Section>

          <Section title="Updating Personal Information">
            To ensure we can reach you regarding your health, please notify us promptly of any changes to your phone number, address, or emergency contact information. Our friendly reception staff will verify your details at each visit to keep your records up to date.
          </Section>

          <Section title="Consultations Over the Phone">
            Patient privacy and fairness are our top priorities. Therefore, we do not conduct consultations over the phone. For any medical inquiries, please book an appointment or visit us as a walk-in, and our doctors will be happy to assist you.
          </Section>

          <Section title="Confidentiality">
            Staywell Medical Clinic is committed to maintaining patient confidentiality. We do not disclose any information without the patient’s consent. If you wish to authorize someone else to receive your information, we require a signed Consent Form, which will be kept on file for future reference unless otherwise specified by you.
          </Section>
          <Section title="Prescription Refills">
            Our doctors welcome walk-in patients, and we recommend that you visit us for prescription renewals at least one to two weeks before running out of your medications. The maximum prescription length is 100 days unless longer travel plans necessitate otherwise. Please note that we do not prescribe narcotics or controlled medications to non-clinic walk-in patients, and such prescriptions will not exceed a few weeks. Additionally, we do not refill prescriptions faxed from pharmacies; a fee of $50 will apply for any renewal requests of this nature, as they are not covered by Alberta Health Care. We strive to accommodate your needs for refills, even on short notice.
          </Section>
          <Section title="Uninsured Services">
            Some services provided at Staywell Medical Clinic are not covered by Alberta Health Care. These include, but are not limited to, completion of insurance forms, driver’s medical assessments, employment-related fitness forms, sick notes, and various letters. Patients are responsible for the costs associated with these uninsured services.
          </Section>
        </div>

        {/* Footer */}
        <div className="border-t border-black/10 px-6 py-4 flex justify-end rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl px-5 py-2.5 font-semibold text-white
              bg-[#DC2227] hover:bg-[#79BD43] transition
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-7">
      <h4 className="text-xl md:text-2xl font-extrabold text-[#DC2227]">
        {title}
      </h4>
      <p className="mt-2 text-[#515D72] text-base leading-7">{children}</p>
    </div>
  );
}