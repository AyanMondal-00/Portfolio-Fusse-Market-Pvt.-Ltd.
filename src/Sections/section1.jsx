import React from 'react';

const Section1 = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#7d4f5f] mb-2">
              8+
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Projects Delivered
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#7d4f5f] mb-2">
              6+
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Dev Clients
            </p>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#7d4f5f] mb-2">
              100%
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Client Satisfaction
            </p>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#7d4f5f] mb-2">
              24/7
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              Support Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;