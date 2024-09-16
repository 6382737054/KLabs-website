// src/components/Clients.jsx
import React from 'react';

const clients = [
  { name: 'Client A', logo: 'images/client-a.png' },
  { name: 'Client B', logo: 'images/client-b.png' },
  { name: 'Client C', logo: 'images/client-c.png' },
  { name: 'Client D', logo: 'images/client-d.png' },
  { name: 'Client E', logo: 'images/client-e.png' },
  { name: 'Client F', logo: 'images/client-f.png' },
  { name: 'Client G', logo: 'images/client-g.png' },
  { name: 'Client H', logo: 'images/client-h.png' },
  // Add more client logos as needed
];

const Clients = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
          <p className="text-lg text-gray-600">
            We are proud to partner with some of the most prestigious organizations in the industry.
            Here are just a few of our esteemed clients.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-auto max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
