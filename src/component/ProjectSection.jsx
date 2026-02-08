import React from 'react'

function ProjectSection() {
  return (
    <section className="bg-linear-to-r from-[#d9b7e8] via-[#e06bb5] to-[#8937bd] py-3 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#ffac1d] text-[#000000] font-bold text-sm px-6 py-3 rounded-full mb-6">
          <span>DEVELOPMENT PORTFOLIO</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">
          <span className="text-white">Our </span>
          <span className="text-[#ffd001]">Development Portfolio</span>
        </h1>

        <p className="text-white text-lg mb-12 max-w-3xl mx-auto">
          Showcasing our development expertise - from dynamic websites to
          innovative mobile applications and AI-powered platforms
        </p>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="text-center">
            <div className="text-[#ffcd07] text-3xl font-bold mb-2">8+</div>
            <div className="text-white text-lg">Projects</div>
          </div>

          <div className="h-16 w-px bg-white/30"></div>

          <div className="text-center">
            <div className="text-[#ffcd07] text-3xl font-bold mb-2">6+</div>
            <div className="text-white text-lg">Dev Clients</div>
          </div>

          <div className="h-16 w-px bg-white/30"></div>

          <div className="text-center">
            <div className="text-[#f4d03f] text-3xl font-bold mb-2">100%</div>
            <div className="text-white text-lg">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection