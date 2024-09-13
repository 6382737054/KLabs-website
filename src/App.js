import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurWorks from './components/OurWorks';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Other sections */}
      <HeroSection />
      <OurWorks/>
    </div>
  );
}

export default App;