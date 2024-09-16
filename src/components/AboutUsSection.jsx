import React, { useState, useEffect, useRef } from 'react';

const AboutUsSection = () => {
  const [activeContent, setActiveContent] = useState('values');
  const [animationClass, setAnimationClass] = useState('');
  const sectionRef = useRef(null);

  // Content data for different sections
  const content = {
    values: {
      title: "Our Values",
      description: (
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>We offer 24/7 IT help desk support with an average response time of 5 minutes or less.</li>
          <li>Our dedicated tech support team is available for every customer and project.</li>
          <li>We perform proactive IT services to minimize issues and provide regular security check-ups for managed IT clients.</li>
          <li>We have an in-house structured cabling team capable of completing projects of any size.</li>
        </ul>
      )
    },
    whyWe: {
      title: "Why We",
      description: (
        <div className="text-gray-600 leading-relaxed">
          <p>
            Adjusting to a rapidly changing work culture with new priorities and work styles, K Labs focuses on producing secure and robust projects on time. We have shifted from traditional cascading forms of work to innovative goal-setting approaches that prioritize transparency and secure alignment with our clients' needs.
          </p>
          <p className="mt-4">
            Our keynote is delivering secured, highly scalable products on time to our clients. This commitment ensures that we address modern challenges effectively and provide exceptional value through our advanced solutions.
          </p>
        </div>
      )
    },
    highlights: {
      title: "Highlights",
      description: (
        <div className="text-gray-600 leading-relaxed">
          <p>
            Explore some of our key achievements and highlights that showcase our success and the impact we’ve made across various projects and industries.
          </p>
          <p className="mt-4">
            KLabs India has understood the importance of GEO-Informatics and has started delivering web applications in the geo informatics platform to ensure the reliability of data submitted. Geoinformatics combines geospatial analysis and modeling, development of databases, information system design, human-computer interaction, and networking technologies. It uses geocomputation and geovisualization for analyzing geoinformation.
          </p>
        </div>
      )
    },
    csr: {
      title: "Corporate Social Responsibility",
      description: (
        <div className="text-gray-600 leading-relaxed">
          <p>
            Learn about our efforts to contribute positively to society through various CSR initiatives. We believe in making a difference beyond just business success.
          </p>
          <p className="mt-4">
            Every individual has a responsibility towards society. At KLABS, we value our responsibility and have provided our best services for the community. Among our achievements, we received acknowledgment and appreciation from The Commissioner of School Education, TN Government for sponsoring 1,000 T-shirts for government school students during a camp.
          </p>
        </div>
      )
    }
  };

  // Handle content change with smooth transition effect
  const handleContentChange = (key) => {
    setAnimationClass('animate-fadeIn');
    setActiveContent(key);
    setTimeout(() => setAnimationClass(''), 500); // Reset animation class after 500ms
  };

  // Use IntersectionObserver to add animation class when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationClass('animate-fadeIn');
          observer.disconnect(); // Stop observing once the section is in view
        }
      },
      {
        threshold: 0.1 // Trigger animation when 10% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about-us-section" ref={sectionRef} className={`relative bg-gray-50 py-16 pt-24 ${animationClass}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Content Area */}
        <div className="flex flex-col items-center">
          {/* Static Header and Description */}
          <div className="text-center mb-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed mx-4 md:mx-8 lg:mx-12 xl:mx-16">
              KLabs Technology & Solutions (P) Ltd India is a pioneering force in the IT industry, taking on complex and challenging tasks across the globe. We are renowned for our commitment to delivering cutting-edge solutions tailored to the unique needs of our clients. Our expertise encompasses a broad spectrum of IT services, from high-security software development to advanced IT operations. Our approach is built on a foundation of integrity, innovation, and excellence, ensuring that we consistently meet and exceed the expectations of our clients.
              <br /><br />
              Since our inception, we have undertaken numerous high-profile projects, including significant government contracts, demonstrating our ability to handle large-scale and critical assignments with precision and efficiency. Our team of dedicated professionals employs state-of-the-art technology and best practices to ensure the highest standards of quality and security. We are proud of our track record and continue to push the boundaries of what is possible in the IT landscape.
              <br /><br />
            </p>
          </div>

          {/* Buttons to change content */}
          <div className="flex flex-wrap justify-center mb-8 space-x-4 space-y-2 md:space-y-0">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                onClick={() => handleContentChange(key)}
                className={`flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-transform duration-300 ease-in-out ${activeContent === key ? 'bg-gradient-to-r from-orange-300 to-orange-500 text-white shadow-lg' : 'bg-gradient-to-r from-orange-100 to-orange-300 text-gray-800 hover:from-orange-200 hover:to-orange-400'} hover:scale-105 h-12`}
              >
                {content[key].title}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className={`bg-gradient-to-r from-white via-gray-100 to-gray-200 shadow-lg rounded-lg p-8 border border-gray-200 max-w-4xl mx-auto transition-opacity duration-500 ${animationClass}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content[activeContent].title}</h3>
            <div className="text-gray-600 leading-relaxed">
              {content[activeContent].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
