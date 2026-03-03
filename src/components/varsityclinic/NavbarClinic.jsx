import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../../assets/logo/Staywell-favicon-01.webp";
import PolicyModal from "@/components/common/PolicyModal";

export default function NavbarClinic() {
  const [isOpen, setIsOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  const navLinks = [
    { name: "Services", type: "section", id: "services" },
    { name: "New Patients", type: "section", id: "new-patients" },
    { name: "Policies", type: "modal" },
    { name: "Pharmacy", type: "route", path: "/varsitypharmacy/pharmacy" },
    { name: "HomeCare", type: "external", url: "https://staywellmedicalsupplies.ca/" },
  ];

  return (
    <>
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              if (link.type === "section") {
                return (
                  <a
                    key={index}
                    href={`#${link.id}`}
                    className="transition-all duration-200 text-base lg:text-lg tracking-wide text-shadow-staywell-nav font-normal hover:font-medium"
                  >
                    {link.name}
                  </a>
                );
              }

              if (link.type === "modal") {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPolicyOpen(true)}
                    className="transition-all duration-200 text-base lg:text-lg tracking-wide text-shadow-staywell-nav font-normal hover:font-medium"
                  >
                    {link.name}
                  </button>
                );
              }

              if (link.type === "external") {
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-200 text-base lg:text-lg tracking-wide text-shadow-staywell-nav font-normal hover:font-medium"
                  >
                    {link.name}
                  </a>
                );
              }

              // route
              return (
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
              );
            })}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-2">
              <a href="#" className="text-staywell-nav" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-staywell-nav" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="text-staywell-nav" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
            </div>

            {/* Contact Button */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `ml-4 px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "bg-staywell-green" : "bg-staywell-red hover:bg-staywell-green"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-staywell-nav"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link, index) => {
                if (link.type === "section") {
                  return (
                    <a
                      key={index}
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className="text-base text-staywell-nav"
                    >
                      {link.name}
                    </a>
                  );
                }

                if (link.type === "modal") {
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        setPolicyOpen(true);
                      }}
                      className="text-left text-base text-staywell-nav"
                    >
                      {link.name}
                    </button>
                  );
                }

                if (link.type === "external") {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-staywell-nav"
                    >
                      {link.name}
                    </a>
                  );
                }

                // route
                return (
                  <NavLink
                    key={index}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-base transition-all ${
                        isActive ? "text-staywell-nav font-bold" : "text-staywell-nav font-normal"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              {/* Social Icons */}
              <div className="flex space-x-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-staywell-nav" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="text-staywell-nav" aria-label="LinkedIn">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="text-staywell-nav" aria-label="Facebook">
                  <FaFacebookF size={18} />
                </a>
              </div>

              {/* Contact Button */}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "bg-staywell-green" : "bg-staywell-red hover:bg-staywell-green"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* ✅ Modal lives OUTSIDE header so it overlays everything */}
      <PolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </>
  );
}