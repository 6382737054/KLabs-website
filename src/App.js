// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurServicesSection from './components/OurServicesSection';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Other sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutUsSection />
        <OurServicesSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
