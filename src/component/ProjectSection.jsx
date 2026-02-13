
import React from 'react';

function ProjectSection() {
  return (
    // Background ko thoda rich blue rakha hai
    <section className="bg-[#0052cc] py-2 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        
        {/* Chhota tag line upar */}
        <p className="text-blue-200 font-bold tracking-widest text-xs uppercase mb-3">
          Development Portfolio
        </p>

        {/* Heading: 'Portfolio' word ko yellow highlight diya hai */}
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6">
          Our Development <span className="text-yellow-400">Portfolio</span>
        </h2>

        {/* Description: Iska color thoda light blue rakha hai readability ke liye */}
        <p className="text-blue-50 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
          Showcasing our development expertise — from dynamic websites to 
          innovative mobile applications and AI-powered platforms.
        </p>

        {/* Divider: Ek simple line jo center se shuru hoti hai */}
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

        {/* Stats Row: Simple flexbox */}
        <div className="flex flex-wrap justify-around items-center gap-8">
          
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl md:text-5xl font-black">8+</h3>
            <p className="text-blue-200 text-sm font-semibold uppercase mt-1">Projects</p>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl md:text-5xl font-black">6+</h3>
            <p className="text-blue-200 text-sm font-semibold uppercase mt-1">Dev Clients</p>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl md:text-5xl font-black">100%</h3>
            <p className="text-blue-200 text-sm font-semibold uppercase mt-1">Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectSection;