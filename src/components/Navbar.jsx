// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center -ml-6">
            <img
              src="Images/klabslogo.png" // Replace with your actual logo path
              alt="KLABS Logo"
              className="w-19 h-12"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/our-services"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              Our Services
            </Link>
            <Link
              to="/horizontals"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              Our Horizontals
            </Link>
            <Link
              to="/verticals"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              Our Verticals
            </Link>
            <Link
              to="/clients"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              Clients
            </Link>
            <Link
              to="/careers"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
            >
              Careers
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-orange-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible when open) */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/our-services"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            Our Services
          </Link>
          <Link
            to="/horizontals"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            Our Horizontals
          </Link>
          <Link
            to="/verticals"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            Our Verticals
          </Link>
          <Link
            to="/clients"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            Clients
          </Link>
          <Link
            to="/careers"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
          >
            Careers
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
