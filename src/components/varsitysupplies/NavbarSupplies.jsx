import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../../assets/logo/LogoStaywellPharmacy.png";

export default function NavbarClinic() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", path: "/pharmacyservices" },
    { name: "HomeCare", path: "/homecare" },
    { name: "TravelClinic", path: "/travelclinic" },
    { name: "Prescribing Pharmacist", path: "/pharmacist" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* =========================
          Top white navbar row
      ========================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Staywell Clinic Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-200 text-base lg:text-lg tracking-wide ${
                    isActive
                      ? "text-staywell-nav font-bold"
                      : "text-shadow-staywell-nav font-normal hover:font-medium"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <a href="#" className="text-staywell-nav">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-staywell-nav">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="text-staywell-nav">
                <FaFacebookF size={16} />
              </a>
            </div>

            {/* Contact Button */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `ml-6 px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "bg-staywell-green"
                    : "bg-staywell-red hover:bg-staywell-green"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-staywell-nav"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>
      </div>

      {/* =========================
          Green utility bar row
          (visible on all sizes)
      ========================= */}
      <div className="bg-[#79BD43] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 py-3 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide">
            <a href="#map-section" className="hover:opacity-85 transition">
              Get Directions
            </a>
            <a href="#about-section" className="hover:opacity-85 transition">
              About Us
            </a>
            <a href="fax:+18254140722" className="hover:opacity-85 transition">
              Fax: 825-414-0722
            </a>
            <a href="tel:+18254140721" className="hover:opacity-85 transition">
              Phone: 825-414-0721
            </a>
            <NavLink to="/refill" className="hover:opacity-85 transition">
              Refill
            </NavLink>
            <NavLink to="/transfer" className="hover:opacity-85 transition">
              Transfer
            </NavLink>
          </div>
        </div>
      </div>

      {/* =========================
          Mobile Dropdown
      ========================= */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-all ${
                    isActive
                      ? "text-staywell-nav font-bold"
                      : "text-staywell-nav font-normal"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Social Icons */}
            <div className="flex space-x-6 pt-4 border-t border-gray-100">
              <a href="#" className="text-staywell-nav">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-staywell-nav">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-staywell-nav">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-staywell-nav">
                <FaEnvelope size={18} />
              </a>
            </div>

            {/* Contact Button */}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "bg-staywell-green"
                    : "bg-staywell-red hover:bg-staywell-green"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}