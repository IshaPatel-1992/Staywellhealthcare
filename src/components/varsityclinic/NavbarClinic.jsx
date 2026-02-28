import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../../assets/logo/Staywell-favicon-01.webp";

export default function NavbarClinic() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "New Patients", path: "/new-patients" },
    { name: "Policies", path: "/policies" },
    { name: "Pharmacy", path: "/varsitypharmacy/pharmacy" },
    { name: "HomeCare", path: "/varsitysupplies/homecare" },
  ];

  return (
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
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-200 text-base lg:text-lg tracking-wide ${isActive
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

          {/* Square Contact Button 
          <NavLink
  to="/contact"
  className={({ isActive }) =>
    `ml-6 px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${
      isActive ? "bg-[#78B840]" : "bg-[#D81820] hover:bg-[#78B840]"
    }`
  }
>
  Contact
</NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ml-6 px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${isActive ? "bg-staywell-green" : "bg-staywell-red hover:bg-staywell-green"
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
        >
          {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-all ${isActive
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
            </div>

            {/* Square Contact Button */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `ml-6 px-4 py-3 rounded-lg text-white text-sm font-semibold transition-colors duration-300 ${isActive ? "bg-staywell-green" : "bg-staywell-red hover:bg-staywell-green"
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
