import React, { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutUsSection = () => {
  AOS.init({ duration: 1000 });

  const [activeContent, setActiveContent] = useState('values');
  const [animationClass, setAnimationClass] = useState('');

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

  const handleContentChange = (key) => {
    setAnimationClass('fade-in');
    setActiveContent(key);
    setTimeout(() => setAnimationClass(''), 500); // match duration with CSS animation
  };

  return (
    <section id="about" className="relative bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Content Area */}
        <div className="flex flex-col items-center">
          {/* Static Header and Description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              KLabs Technology & Solutions (P) Ltd India has taken a challenging task across the globe and align the clients with the best of best solutions ever. So far, we took up many impossible tasks to find - one good fine possibility for completing it. Our Crown is filled up with lot of remarkable feathers especially TN Govt projects because We take a security-first approach to deliver a best-in class software's and IT operations that are integrated with innovative IT solutions and Fast Response Team with Effective Problem - Solving Skills. This is the one of the main reasons why we always been called over and over to handle the important projects across our country. KLabs has a branch in most of the major districts in TN and key states of India.
            </p>
          </div>

          {/* Buttons to change content */}
          <div className="flex flex-wrap justify-center mb-8 space-x-4 space-y-2 md:space-y-0">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                onClick={() => handleContentChange(key)}
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-transform duration-300 ease-in-out ${activeContent === key ? 'bg-gradient-to-r from-orange-300 to-orange-500 text-white shadow-lg' : 'bg-gradient-to-r from-orange-100 to-orange-300 text-gray-800 hover:from-orange-200 hover:to-orange-400'} hover:scale-105`}
              >
                {content[key].title}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className={`bg-white shadow-lg rounded-lg p-8 border border-gray-200 max-w-4xl mx-auto transition-opacity duration-500 ${animationClass}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content[activeContent].title}</h3>
            <div className="text-gray-600 leading-relaxed">
              {typeof content[activeContent].description === 'string'
                ? content[activeContent].description
                : content[activeContent].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
