import React, { useState } from 'react';

const OurWorks = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const description = `At K Labs, we pride ourselves on delivering high-quality software solutions tailored to meet the unique needs of our clients. Our team of experts specializes in developing innovative and efficient applications that drive business growth and enhance user experiences. We work closely with our clients to understand their requirements and provide customized solutions that exceed expectations. Whether it's developing a new product from scratch or optimizing an existing system, our commitment to excellence ensures that every project is executed with precision and professionalism. Our portfolio showcases a range of successful projects that highlight our ability to tackle complex challenges and deliver results that make a real difference.`;

  return (
    <section id="our-works" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold mb-4">Our Works</h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto">
          {isExpanded ? description : `${description.slice(0, 200)}...`}
          <button
            onClick={handleToggle}
            className="text-orange-500 hover:underline ml-2"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project cards */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              src="/assets/images/project1.jpg"
              alt="Project One"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Project One</h3>
                <p className="mb-4">A brief description of Project One.</p>
                <a
                  href="#"
                  className="px-4 py-2 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
