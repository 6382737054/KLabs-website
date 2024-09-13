import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>

      {/* Hero Section */}
      <div className="relative w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start justify-start px-4 md:px-16 lg:px-32 py-10 md:py-16 mt-16 md:mt-0">
        <div className="relative text-left w-full">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 leading-tight text-orange-500">
              Transform Your Business <br className="hidden md:block" /> with Cutting-Edge Technology
            </h2>
            <div className="w-20 h-1 bg-orange-500 mb-3"></div>
            <p className="text-lg md:text-xl lg:text-2xl mb-3 leading-relaxed text-gray-700">
              At K Labs, we empower your growth with uniquely tailored software solutions.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300">
                Our Works
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:text-white hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Client Card Section */}
      <div className="relative w-full md:w-1/3 flex items-center justify-center px-4 md:px-8 py-10 md:py-16 mt-6 md:mt-12">
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 md:p-8 shadow-2xl border border-gray-300 w-full max-w-sm min-h-[500px] flex flex-col items-center justify-center space-y-8 hover:scale-105 hover:bg-[wheat] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">Meet Some of Our Clients</h3>
          <div className="flex flex-col items-center w-full space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/Images/sipcot.png"
                alt="Client 1"
                className="w-20 h-14 object-contain transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-gray-700 font-medium text-lg">Sipcot</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/Images/tngov.png"
                alt="Client 2"
                className="w-20 h-14 object-contain transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-gray-700 font-medium text-lg">Government of Tamil Nadu</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/Images/sdat.png"
                alt="Client 3"
                className="w-24 h-16 object-contain transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-gray-700 font-medium text-lg">Sports Development Authority</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href="/clients"
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
            >
              Explore Our Clients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
