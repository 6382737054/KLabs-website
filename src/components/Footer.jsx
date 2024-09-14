// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://facebook.com/yourprofile"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 0H2C0.895 0 0 0.895 0 2v20c0 1.105 0.895 2 2 2h11v-9H9v-3h4V7c0-4.418 3.582-8 8-8h3v3h-3c-2.207 0-4 1.793-4 4v4h6l-1 3h-5v9h11c1.105 0 2-0.895 2-2V2c0-1.105-0.895-2-2-2z"/></svg>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.094 10.094 0 0 1-2.828.775A5.075 5.075 0 0 0 22.417 1c-1.065.631-2.243 1.092-3.501 1.339A5.077 5.077 0 0 0 15.72 0c-2.798 0-5.067 2.268-5.067 5.067 0 .396.045.781.124 1.158C7.668 6.117 4.066 4.07 1.64 1.15a5.088 5.088 0 0 0-.686 2.546c0 1.758.895 3.316 2.251 4.234a5.068 5.068 0 0 1-2.294-.633v.063c0 2.458 1.748 4.505 4.068 4.97a5.071 5.071 0 0 1-2.273.085c.64 1.991 2.482 3.437 4.664 3.478a10.139 10.139 0 0 1-6.263 2.143A10.154 10.154 0 0 1 0 20.27a14.293 14.293 0 0 0 7.708 2.26c9.24 0 14.308-7.644 14.308-14.306 0-.221-.005-.441-.013-.662A10.093 10.093 0 0 0 23 3z"/></svg>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.791 0 0 .791 0 1.77v20.46c0 .979.791 1.77 1.77 1.77H22.23c.979 0 1.77-.791 1.77-1.77V1.77C24 .791 23.209 0 22.23 0zM8.73 20.46H5.25V9h3.48v11.46zM6.99 7.833c-1.09 0-1.98-.88-1.98-1.97 0-1.09.89-1.97 1.98-1.97 1.09 0 1.98.88 1.98 1.97s-.89 1.97-1.98 1.97zm14.48 12.627h-3.48v-5.85c0-1.39-.025-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v5.96h-3.48V9h3.34v1.54h.05c.47-.89 1.62-1.84 3.33-1.84 3.56 0 4.22 2.32 4.22 5.34v6.36z"/></svg>
          </a>
        </div>
        
        {/* Address & Copyright */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Your Company</p>
          <p className="mb-2">123 Your Address, City, Country</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
