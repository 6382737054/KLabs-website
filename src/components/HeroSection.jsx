import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(0); // 0 for first section, 1 for second section
  const sectionInterval = 5000; // Interval time in milliseconds (5 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prevSection => (prevSection === 0 ? 1 : 0));
    }, sectionInterval);

    return () => clearInterval(interval);
  }, [sectionInterval]);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-black overflow-hidden">
      {/* Hero Section 1 */}
      <div className={`absolute top-0 left-0 w-full h-full flex ${activeSection === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Left Section with Text Content */}
        <div className="relative md:w-1/2 flex items-center justify-center text-left px-4 md:px-10 lg:px-20">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white animate-fade-in">
              K Labs
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-orange-200 animate-fade-in delay-200">
              Transform Your Business with <br className="hidden md:block" /> Cutting-Edge Technology
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-white animate-fade-in delay-400">
              At K Labs, we empower your growth with uniquely tailored software solutions.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 animate-fade-in delay-600">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="relative md:w-1/2 flex items-center justify-center">
          <img
            src="Images/heroimg2.png" // Replace with your actual image path
            alt="Hero Graphic"
            className="object-contain w-full h-full" // Ensure the image scales properly
          />
        </div>
      </div>

      {/* Hero Section 2 */}
      <div className={`absolute top-0 left-0 w-full h-full flex ${activeSection === 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Left Section with Image */}
        <div className="relative md:w-1/2 flex items-center justify-center">
          <img
            src="Images/heroimg1.png" // Replace with your actual image path
            alt="Hero Graphic"
            className="object-contain w-full h-full" // Ensure the image scales properly
          />
        </div>

        {/* Right Section with Text Content */}
        <div className="relative md:w-1/2 flex items-center justify-center text-left px-4 md:px-10 lg:px-20">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white animate-fade-in">
              K Labs
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-orange-200 animate-fade-in delay-200">
              Transform Your Business with <br className="hidden md:block" /> Cutting-Edge Technology
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-white animate-fade-in delay-400">
              At K Labs, we empower your growth with uniquely tailored software solutions.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 animate-fade-in delay-600">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 200ms;
        }
        .animate-fade-in.delay-400 {
          animation-delay: 400ms;
        }
        .animate-fade-in.delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
