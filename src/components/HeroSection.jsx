import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const HeroSection = () => {
  const scrollToAboutUs = () => {
    document.getElementById('about-us-section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-white overflow-hidden" id="home">
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
              <button
                onClick={scrollToAboutUs}
                className="px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-800 hover:text-white hover:scale-105 transition-transform duration-300"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Client Card Section */}
      <div className="relative w-full md:w-1/3 flex items-center justify-center px-4 md:px-8 py-10 md:py-16 mt-6 md:mt-12">
        <div className="bg-gradient-to-br from-[#f5deb3] via-[#f3e5ab] to-[#fdf5e6] p-6 md:p-8 shadow-2xl border border-gray-300 w-full max-w-sm min-h-[500px] flex flex-col items-center justify-center space-y-8 hover:scale-105 transition-transform duration-300">
          {/* Counter-up Components with Icons */}
          <div className="text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faDesktop} className="text-4xl text-gray-800 mb-2" />
            <h4 className="text-3xl font-bold text-gray-800">
              <CountUp end={200} duration={2} />+
            </h4>
            <p className="text-gray-600">Total Designs</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faServer} className="text-4xl text-gray-800 mb-2" />
            <h4 className="text-3xl font-bold text-gray-800">
              <CountUp end={100} duration={2} />+
            </h4>
            <p className="text-gray-600">Sites Hosted</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faUsers} className="text-4xl text-gray-800 mb-2" />
            <h4 className="text-3xl font-bold text-gray-800">
              <CountUp end={80} duration={2} />+
            </h4>
            <p className="text-gray-600">Clients</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-gray-800 mb-2" />
            <h4 className="text-3xl font-bold text-gray-800">
              <CountUp end={17} duration={2} />+
            </h4>
            <p className="text-gray-600">Years Of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
