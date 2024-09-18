import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OurWork = () => {
  const projects = [
    {
      imgSrc: '/Images/coinage.png',
      title: 'Project One',
      description: 'A brief overview of Project One, demonstrating our capability to deliver high-quality results.',
    },
    {
      imgSrc: '/Images/coinage.png',
      title: 'Project Two',
      description: 'An example of our creative and innovative solutions that address complex challenges.',
    },
    {
      imgSrc: '/Images/coinage.png',
      title: 'Project Three',
      description: 'Highlights our attention to detail and expertise in delivering exceptional work.',
    },
    {
      imgSrc: '/Images/coinage.png',
      title: 'Project Four',
      description: 'Showcases our ability to handle diverse projects with precision and creativity.',
    },
    {
      imgSrc: '/Images/coinage.png',
      title: 'Project Five',
      description: 'Demonstrates our commitment to excellence and delivering top-notch results.',
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronLeft size={30} className="text-gray-800" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronRight size={30} className="text-gray-800" />
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-8 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Works</h2>
        <div className="relative px-10">
          <Slider {...sliderSettings} className="relative">
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105 h-[400px] flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurWork;