import React, { useState } from "react";
import Logo from "../images/Umoja_circle_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="header_component text-white sticky top-0 z-50">
      <div className="header-overlay"></div> {/* Optional overlay */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex justify-center sm:justify-start items-center">
            <a href="/">
              <img src={Logo} alt="Umoja Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md bg-[#f99c4a]/70 text-white-400 hover:text-white hover:bg-[#f99c4a]/90 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-auto">
            <div className="flex space-x-6">
              <a
                href="/"
                className="text-white-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="/blog"
                className="text-white-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="/our-team"
                className="text-white-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Team
              </a>
              <a
                href="/contact"
                className="text-white-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#f99c4a] text-white flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white-400 hover:text-white text-3xl p-2 rounded-md bg-[#f99c4a]/70 hover:bg-[#f99c4a]/90"
        >
          &times;
        </button>
        <div className="space-y-4 w-full px-4">
          <a
            href="/"
            onClick={closeMenu}
            className="block text-center text-2xl font-medium hover:text-gray-700 relative"
          >
            Home
          </a>
          <div className="border-t border-white my-2"></div>
          <a
            href="/about"
            onClick={closeMenu}
            className="block text-center text-2xl font-medium hover:text-gray-700 relative"
          >
            About
          </a>
          <div className="border-t border-white my-2"></div>
          <a
            href="/blog"
            onClick={closeMenu}
            className="block text-center text-2xl font-medium hover:text-gray-700 relative"
          >
            Blog
          </a>
          <div className="border-t border-white my-2"></div>
          <a
            href="/our-team"
            onClick={closeMenu}
            className="block text-center text-2xl font-medium hover:text-gray-700 relative"
          >
            Team
          </a>
          <div className="border-t border-white my-2"></div>
          <a
            href="/contact"
            onClick={closeMenu}
            className="block text-center text-2xl font-medium hover:text-gray-700 relative"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
