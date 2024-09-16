import React, { useState } from 'react';
// import { animateScroll as scroll } from 'react-scroll'; // Remove this import if it's not used

const services = [
  { title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', icon: '🌐', details: 'We build highly scalable web applications using the latest technologies like React, Node.js, and more.', image: 'https://via.placeholder.com/300' },
  { title: 'Mobile App Development', description: 'Creating user-friendly mobile applications for iOS and Android.', icon: '📱', details: 'Our mobile app development services ensure cross-platform compatibility with smooth user interfaces.', image: 'https://via.placeholder.com/300' },
  { title: 'SEO Optimization', description: 'Enhancing your website’s visibility on search engines with effective strategies.', icon: '🔍', details: 'Boost your online presence with targeted SEO strategies to drive more traffic to your website.', image: 'https://via.placeholder.com/300' },
  { title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces and experiences.', icon: '🎨', details: 'Our UI/UX designs focus on providing a seamless user experience with a beautiful interface.', image: 'https://via.placeholder.com/300' },
  { title: 'Digital Marketing', description: 'Promoting your brand through digital channels to reach a wider audience.', icon: '📈', details: 'Our digital marketing strategies ensure your brand reaches the right audience through various online channels.', image: 'https://via.placeholder.com/300' },
  { title: 'E-commerce Solutions', description: 'Developing scalable and secure e-commerce platforms for your business.', icon: '🛒', details: 'We provide robust e-commerce solutions with payment gateways, inventory management, and more.', image: 'https://via.placeholder.com/300' },
  { title: 'Content Creation', description: 'Generating high-quality content to engage and attract your target audience.', icon: '✍️', details: 'Our content creators work to develop engaging and informative content that resonates with your audience.', image: 'https://via.placeholder.com/300' },
  { title: 'Cloud Services', description: 'Offering cloud-based solutions for enhanced performance and scalability.', icon: '☁️', details: 'Leverage cloud technologies for better scalability, performance, and security.', image: 'https://via.placeholder.com/300' },
  { title: 'IT Support', description: 'Providing reliable IT support to ensure smooth operations for your business.', icon: '🖥️', details: 'Our IT support services are available 24/7 to handle all your technical needs and ensure business continuity.', image: 'https://via.placeholder.com/300' },
];

const OurServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    // scroll.scrollToBottom({ // Comment out or remove this line
    //   duration: 500,
    //   smooth: true,
    // });
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      closeModal();
    }
  };

  return (
    <section id="our-services-section" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services to help your business thrive in the digital age. Explore our expertise and see how we can assist you in achieving your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-500 text-white rounded-full text-3xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <button
                onClick={() => openModal(service)}
                className="mt-4 flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300"
              >
                Know More
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div
            id="overlay"
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-5xl mx-auto flex flex-col md:flex-row">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                ✖️
              </button>
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="rounded-lg object-cover w-full h-72"
                />
              </div>
              <div className="md:w-1/2 md:pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedService.title}</h3>
                <p className="text-gray-600 mb-4">{selectedService.details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServicesSection;
