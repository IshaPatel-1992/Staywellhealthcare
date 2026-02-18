import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";

import logo from "../assets/logo/Staywell-favicon-01.webp"; // Update path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "New Patients", path: "/new-patients" },
    { name: "Policies", path: "/policies" },
    { name: "Pharmacy", path: "/pharmacy" },
    { name: "HomeCare", path: "/homecare" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Staywell Clinic Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[#858D9C] hover:text-[#858D9C] transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <a href="#" className="text-[#858D9C] hover:text-[#858D9C] transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="text-[#858D9C] hover:text-[#858D9C] transition">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="text-[#858D9C] hover:text-[#858D9C] transition">
              <FaFacebookF size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#858D9C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}

        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-[#858D9C] hover:text-[#858D9C] text-base font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Social Icons Mobile */}
            <div className="flex space-x-6 pt-4 border-t border-gray-100">
              <a href="#" className="text-[#858D9C]">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-[#858D9C]">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-[#858D9C]">
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
