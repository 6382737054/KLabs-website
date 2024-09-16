// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurServicesSection from './components/OurServicesSection';
import Horizontals from './components/Horizontals'; // Import Horizontals component
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  {/* <OurServicesSection /> Include OurServicesSection here */}
                </>
              } 
            />
            <Route path="/about-us" element={<AboutUsSection />} />
            <Route path="/our-services" element={<OurServicesSection />} />
            <Route path="/horizontals" element={<Horizontals />} /> {/* Add route for Horizontals */}
            {/* You can add more routes here if needed */}
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
