import React from "react";

/**
 * StoryMission.jsx
 *
 * - Tailwind CSS (JSX) component that uses the banner image you provided as the hero background.
 * - Named export so you can safely paste this below your existing components in the same file.
 *
 * Usage: paste this after your previous code and render <StoryMission /> where needed.
 */
const About = () => {
  const bgImage =
    "https://t3.ftcdn.net/jpg/09/17/04/76/240_F_917047644_VZnzIDunyawmPQmokEyI72fC0T7MWIvp.jpg";

  return (
    <section className="w-full">
      {/* Hero with fixed background image + purple-pink gradient overlay */}
      <section
        className="relative w-full h-36 md:h-52 lg:h-56 bg-center bg-cover bg-fixed overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Gradient overlay (purple → pink) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(88,28,135,0.25) 0%, rgba(188,70,115,0.25) 100%)",
          }}
        />

        {/* Centered heading + subtitle (content scrolls over fixed bg) */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight drop-shadow-md">
            Our Story & Mission
          </h2>

          <p className="mt-4 max-w-2xl text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
            Transforming businesses through innovative digital marketing strategies
            and exceptional client experiences.
          </p>
        </div>
      </section>

      {/* White about section with slight overlap like the reference */}
      <div className="-mt-6 md:-mt-12">
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h3 className="text-center text-slate-900 text-2xl md:text-3xl font-semibold mb-8">
              About Fusse Market
            </h3>

            <div className="mx-auto text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl space-y-6">
              <p>
                Founded in late 2024, Fusse Market emerged from a vision to revolutionize how businesses approach digital
                marketing. In an increasingly connected world, we recognized the need for a more integrated, data-driven
                approach that delivers real results while maintaining authentic brand connections.
              </p>

              <p>
                Our name "Fusse Market" represents our core philosophy: we fuse cutting-edge digital strategies with deep
                market insights to create powerful connections between brands and their audiences. This fusion is at the heart
                of everything we do—blending creativity with analytics, innovation with reliability, and strategy with execution.
              </p>

              <p>
                What sets Fusse Market apart is our holistic approach. We don't just implement isolated tactics; we develop
                comprehensive digital ecosystems where each element strengthens the others. From social media campaigns that
                drive website traffic to SEO strategies that complement content marketing, we ensure every piece works in
                harmony toward your business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;