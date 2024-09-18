import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurServicesSection from './components/OurServicesSection';
import Horizontals from './components/Horizontals';
import Verticals from './components/Verticals';
import Clients from './components/Clients';  // Import Clients component
import Careers from './components/Careers'; // Import Careers component
import Footer from './components/Footer';
import OurWork from './components/OurWork';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <ErrorBoundary>
            <Routes>
              {/* Home Route */}
              <Route 
                path="/" 
                element={
                  <>
                    <HeroSection />
                    <AboutUsSection />
                    <OurWork />
                    <Clients />
              
                    {/* Uncomment to include OurServicesSection on the homepage */}
                    {/* <OurServicesSection /> */}
                  </>
                } 
              />

              {/* About Us Page Route */}
              <Route path="/about-us" element={<AboutUsSection />} />

              {/* Our Services Page Route */}
              <Route path="/our-services" element={<OurServicesSection />} />

              {/* Horizontals Page Route */}
              <Route path="/horizontals" element={<Horizontals />} />

              {/* Verticals Page Route */}
              <Route path="/verticals" element={<Verticals />} />

              {/* Clients Page Route */}
              <Route path="/clients" element={<Clients />} />

              {/* Careers Page Route */}
              <Route path="/careers" element={<Careers />} />
              
              {/* Add more routes as needed */}
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
