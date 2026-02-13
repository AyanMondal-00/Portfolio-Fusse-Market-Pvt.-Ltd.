import React from 'react';

const Section1 = () => {
  const stats = [
    { number: '8+', label: 'Projects Delivered', icon: '📁' },
    { number: '6+', label: 'Dev Clients', icon: '👥' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🎯' }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We deliver results backed by numbers and proven track record
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-gray-50 border-l-4 border-blue-500 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;