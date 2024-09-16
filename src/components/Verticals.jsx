import React, { useRef, useState, useEffect } from 'react';

const Verticals = () => {
  const numItems = 8; // Number of vertical items

  const refs = useRef(Array(numItems).fill(null));
  const [inView, setInView] = useState(Array(numItems).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = refs.current.findIndex(ref => ref === entry.target);
          setInView(prevInView => {
            const updatedInView = [...prevInView];
            updatedInView[index] = true;
            return updatedInView;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [numItems]);

  // List of verticals content
  const content = [
    { imgSrc: '/Images/coinage.png', heading: 'Heading 1', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 2', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 3', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 4', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 5', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 6', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 7', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
    { imgSrc: '/Images/coinage.png', heading: 'Heading 8', text: 'KLABS has developed its own lab software for one of our Leading Laboaratory Client METTEX LAB. Chennai Mettex Lab, a NABL accredited Laboratory, started its operation in 1984, is one of the leading test houses in South India.Chennai Mettex Lab, a trusted testing laboratory for the last 2 decades, offer services for TESTING OF FOOD AND AGRICULTURAL PRODUCTS. Few of our softwares developed for METTEX LAB' },
  ];

  return (
    <div className="p-8 mt-20 space-y-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Verticals</h1>

      {content.map((item, index) => (
        <div
          key={index}
          ref={el => refs.current[index] = el}
          className={`flex flex-col items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} transition-transform transform-gpu duration-1000 ease-out ${
            inView[index] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          <img
            src={item.imgSrc}
            alt={`Vertical ${index}`}
            className="w-full sm:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-4"
          />
          <div className="w-full sm:w-1/2 p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{item.heading}</h2>
            <p className="text-lg leading-relaxed text-gray-800">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Verticals;
