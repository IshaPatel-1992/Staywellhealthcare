import React, { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { HiEnvelope, HiBars3, HiXMark } from "react-icons/hi2";
import SocialLinks from "@/components/common/SocialLinks";
import logo from "../../assets/logo/LogoStaywellPharmacy.png";

export default function NavbarPharmacy() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Scroll helper: works even if user is not on /varsitypharmacy
  const goToSection = (id) => {
    setIsOpen(false);

    const onPharmacyHome =
      location.pathname === "/varsitypharmacy" || location.pathname === "/varsitypharmacy/pharmacy";

    if (!onPharmacyHome) {
      navigate("/varsitypharmacy");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { name: "Services", type: "section", id: "services" },
    { name: "Travel Clinic", type: "external", url: "https://www.bookmypharmacy.com/travel/8254140721?noNav=true" },
    { name: "HomeCare", type: "external", url: "https://staywellmedicalsupplies.ca/" },

    // ✅ ONLY this one is a page
    { name: "Prescribing Pharmacist", type: "internal", path: "/varsitypharmacy/PrescribingPharmacist" },
  ];

  const NavItem = ({ link, mobile = false }) => {
    const base =
      "transition-all duration-200 text-base lg:text-lg tracking-wide " +
      (mobile ? "text-staywell-nav" : "text-shadow-staywell-nav") +
      " font-normal hover:font-medium";

    if (link.type === "section") {
      return (
        <button
          key={link.name}
          type="button"
          onClick={() => goToSection(link.id)}
          className={base + " text-left"}
        >
          {link.name}
        </button>
      );
    }

    if (link.type === "external") {
      return (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className={base}
        >
          {link.name}
        </a>
      );
    }

    // route
    return (
      <NavLink
        key={link.name}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `${base} ${isActive ? "text-staywell-nav font-bold" : ""}`
        }
      >
        {link.name}
      </NavLink>
    );
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* Top row */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* logo */}
          <Link to="/varsitypharmacy" className="flex items-center">
            <img src={logo} alt="Staywell Pharmacy Logo" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}

            <SocialLinks size={16} className="text-staywell-nav shrink-0" />

            {/* If Contact is a section on home, make it a button */}
            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="ml-6 px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 bg-staywell-red hover:bg-staywell-green"
            >
              Contact
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-staywell-nav"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>
      </div>

      {/* Utility bar */}
      <div className="bg-[#79BD43] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 py-3 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide">
            <button onClick={() => goToSection("map-section")} className="hover:opacity-85 transition">
              Get Directions
            </button>
            <button onClick={() => goToSection("about-section")} className="hover:opacity-85 transition">
              About Us
            </button>

            <a href="fax:+15873508585" className="hover:opacity-85 transition">
              Fax: 587-350-8585
            </a>
            <a href="tel:+14038748787" className="hover:opacity-85 transition">
              Phone: 403-874-8787
            </a>

            {/* If these are sections, use goToSection */}
            <button onClick={() => goToSection("refill")} className="hover:opacity-85 transition">
              Refill
            </button>
            <button onClick={() => goToSection("transfer")} className="hover:opacity-85 transition">
              Transfer
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} mobile />
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <SocialLinks size={18} className="text-staywell-nav" />
              <a
                href="mailto:varsity@staywellpharmacy.ca"
                className="text-staywell-nav hover:opacity-80 transition"
                aria-label="Email"
              >
                <HiEnvelope size={20} />
              </a>
            </div>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 bg-staywell-red hover:bg-staywell-green"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}