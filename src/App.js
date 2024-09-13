import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';


function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Other sections */}
      <HeroSection />
      <AboutUsSection/>
     
    </div>
  );
}

export default App;