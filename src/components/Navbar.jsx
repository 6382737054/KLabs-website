import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
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
            <a
              href="#home"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300"
            >
              About us
            </a>

            {/* Dropdown for Our Horizontals */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('horizontals')}
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors duration-300 focus:outline-none"
              >
                Our Horizontals
                <svg
                  className={`w-4 h-4 ml-1 transition-transform transform ${
                    dropdownOpen === 'horizontals' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'horizontals' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  {['Horizontal 1', 'Horizontal 2', 'Horizontal 3', 'Horizontal 4', 'Horizontal 5', 'Horizontal 6', 'Horizontal 7'].map((item, index) => (
                    <a
                      key={index}
                      href={`#horizontal${index + 1}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown for Our Verticals */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('verticals')}
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors duration-300 focus:outline-none"
              >
                Our Verticals
                <svg
                  className={`w-4 h-4 ml-1 transition-transform transform ${
                    dropdownOpen === 'verticals' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'verticals' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  {['Vertical 1', 'Vertical 2', 'Vertical 3', 'Vertical 4', 'Vertical 5', 'Vertical 6', 'Vertical 7'].map((item, index) => (
                    <a
                      key={index}
                      href={`#vertical${index + 1}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300"
            >
              Clients
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300"
            >
              Careers
            </a>
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
          <a
            href="#home"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300"
          >
            About us
          </a>

          {/* Dropdown for Our Horizontals (Mobile) */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('horizontals')}
              className="flex items-center w-full text-gray-800 hover:text-orange-600 px-4 py-2 transition-colors duration-300 focus:outline-none"
            >
              Our Horizontals
              <svg
                className={`w-4 h-4 ml-1 transition-transform transform ${
                  dropdownOpen === 'horizontals' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === 'horizontals' && (
              <div className="mt-2 pl-4">
                {['Horizontal 1', 'Horizontal 2', 'Horizontal 3', 'Horizontal 4', 'Horizontal 5', 'Horizontal 6', 'Horizontal 7'].map((item, index) => (
                  <a
                    key={index}
                    href={`#horizontal${index + 1}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown for Our Verticals (Mobile) */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('verticals')}
              className="flex items-center w-full text-gray-800 hover:text-orange-600 px-4 py-2 transition-colors duration-300 focus:outline-none"
            >
              Our Verticals
              <svg
                className={`w-4 h-4 ml-1 transition-transform transform ${
                  dropdownOpen === 'verticals' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === 'verticals' && (
              <div className="mt-2 pl-4">
                {['Vertical 1', 'Vertical 2', 'Vertical 3', 'Vertical 4', 'Vertical 5', 'Vertical 6', 'Vertical 7'].map((item, index) => (
                  <a
                    key={index}
                    href={`#vertical${index + 1}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300"
          >
            Clients
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300"
          >
            Careers
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
