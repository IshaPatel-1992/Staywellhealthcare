// src/components/common/SocialLinks.jsx
import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SOCIAL = {
  instagram: "https://www.instagram.com/staywellhealthcareservices/",
  linkedin: "https://www.linkedin.com/company/staywell-pharmacy-medical-clinic/?originalSubdomain=ca",
  facebook: "https://www.facebook.com/people/Staywell-Healthcare/61570180690301/",
};

export default function SocialLinks({
  size = 16,
  className = "",
  iconClassName = "hover:opacity-80 transition",
  iconStyle,
  withTarget = true,
  variant = "plain", // "plain" | "circle"
}) {
  const targetProps = withTarget ? { target: "_blank", rel: "noreferrer" } : {};

  const baseA = `inline-flex items-center justify-center ${iconClassName}`;
  const circleA =
    "w-11 h-11 rounded-full border border-black/10 shadow-sm";

  const aClass = variant === "circle" ? `${baseA} ${circleA}` : baseA;

  const aStyle =
    variant === "circle"
      ? { backgroundColor: "#DC2227", color: "#fff", ...iconStyle }
      : { ...iconStyle };

  const IconWrap = ({ children }) => (
    // IMPORTANT: no text-white here — let it inherit from parent / style
    <span className="inline-flex" style={{ color: "inherit" }}>
      {children}
    </span>
  );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href={SOCIAL.instagram} {...targetProps} className={aClass} style={aStyle} aria-label="Instagram">
        <IconWrap><FaInstagram size={size} /></IconWrap>
      </a>
      <a href={SOCIAL.linkedin} {...targetProps} className={aClass} style={aStyle} aria-label="LinkedIn">
        <IconWrap><FaLinkedinIn size={size} /></IconWrap>
      </a>
      <a href={SOCIAL.facebook} {...targetProps} className={aClass} style={aStyle} aria-label="Facebook">
        <IconWrap><FaFacebookF size={size} /></IconWrap>
      </a>
    </div>
  );
}