import React from "react";

export default function PrescribingCard({
  image,
  title,
  bookingUrl,
  open = false,
  onToggle,
  items = [],
}) {
  return (
    <article
      className="
        w-full
        rounded-2xl
        border border-black/10
        bg-white
        overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* Image */}
      <div className="h-52.5 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="px-6 pt-7 pb-5 text-center">
        {/* Title */}
        <h3 className="text-[22px] font-semibold text-[#2E2E2E]">{title}</h3>

        {/* Booking link */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-[13px] font-semibold text-[#D91F26] underline underline-offset-2"
        >
          Book Appointment or Walk-In
        </a>

        {/* Bottom row: Learn more centered, plus right */}
        <button
          type="button"
          onClick={onToggle}
          className="
            mt-6
            w-full
            relative
            flex items-center justify-center
            py-2
            text-[15px]
            font-semibold
            text-black
          "
          aria-expanded={open}
        >
          <span>Learn more</span>

          {/* Plus icon pinned to right */}
          <span className="absolute right-0 text-[#D91F26] text-[22px] leading-none">
            {open ? "–" : "+"}
          </span>
        </button>

        {/* Expanded content (optional) */}
        {open && items?.length > 0 && (
          <div className="mt-4 text-left">
            <ul className="space-y-2 text-[14px] text-[#3A3A3A]">
              {items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-[#555]">+</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}