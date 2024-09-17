// src/components/Clients.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import navigation icons

const clients = [
  { name: 'Client A', logo: 'Images/coinage.png', description: 'Industry Leader in Tech' },
  { name: 'Client B', logo: 'Images/coinage.png', description: 'Global E-Commerce Giant' },
  { name: 'Client C', logo: 'Images/coinage.png', description: 'Pioneer in Health Innovations' },
  { name: 'Client D', logo: 'Images/coinage.png', description: 'Leading Financial Solutions Provider' },
  { name: 'Client E', logo: 'Images/coinage.png', description: 'Top Marketing Consultancy' },
  { name: 'Client F', logo: 'Images/coinage.png', description: 'Enterprise Cloud Services' },
  { name: 'Client G', logo: 'Images/coinage.png', description: 'World-class Manufacturing' },
  { name: 'Client H', logo: 'Images/coinage.png', description: 'Innovation in AI and Robotics' },
];

// Custom arrow components
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-gray-800`} onClick={onClick}>
      <FaChevronLeft size={30} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} text-gray-800`} onClick={onClick}>
      <FaChevronRight size={30} />
    </div>
  );
};

const Clients = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,  // Adding custom next arrow
    prevArrow: <PrevArrow />,  // Adding custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50" id="clients-section"> {/* Ensure ID is here */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our Esteemed Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to collaborate with industry leaders around the globe. Our clients inspire us to deliver innovative solutions every day.
          </p>
        </div>

        <div className="client-carousel">
          <Slider {...sliderSettings}>
            {clients.map((client, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform hover:scale-105">
                  {/* Client Logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-[120px] max-h-[80px] mx-auto object-contain mb-4"
                  />
                  {/* Client Name */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {client.name}
                  </h3>
                  {/* Client Description */}
                  <p className="text-gray-600">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
