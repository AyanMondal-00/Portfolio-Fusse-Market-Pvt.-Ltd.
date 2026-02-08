import React from "react";
import { Link } from "react-router-dom";

// Journey timeline component + sample events to merge into About section
const defaultEvents = [
  {
    month: "Nov",
    title: "November 2024: The Beginning",
    description:
      "Fusse Market was established with a vision to bridge the gap between traditional marketing approaches and the digital revolution. Our founding team combined their experience to create something truly unique.",
    side: "left",
    highlighted: false,
  },
  {
    month: "Dec",
    title: "December 2024: First Client",
    description:
      "We secured our first major client, Affnet Consultants, marking the beginning of our professional journey in the digital marketing landscape.",
    side: "right",
    highlighted: true,
  },
  {
    month: "Jan",
    title: "January 2025: Expanding Services",
    description:
      "We expanded our services to include comprehensive SEO strategies and content marketing solutions to provide more holistic digital approaches.",
    side: "left",
    highlighted: false,
  },
  {
    month: "Feb",
    title: "February 2025: Team Growth",
    description:
      "We welcomed new team members specializing in paid advertising and graphic design, enhancing our ability to deliver across channels and formats.",
    side: "right",
    highlighted: true,
  },
  {
    month: "Mar",
    title: "March 2025: Looking Forward",
    description:
      "We're expanding into emerging digital territories while staying true to our mission of delivering measurable results and exceptional client experiences.",
    side: "left",
    highlighted: false,
  },
  {
    month: "Jul",
    title: "July 2025: SaaS Project",
    description:
      "Our first SaaS CRM is live — designed to turn everyday workflows into effortless wins. From automation to growth-focused data, it's built for momentum.",
    side: "right",
    highlighted: true,
  },
];

const JourneyTimeline = ({ events = defaultEvents }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-12">
          Our Journey
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full" />

          <div className="space-y-12">
            {events.map((ev, idx) => {
              const isLeft = (ev.side === "left") || (ev.side === undefined && idx % 2 === 0);
              const highlight = ev.highlighted;

              return (
                <article
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-9 items-center"
                  aria-labelledby={`journey-title-${idx}`}
                >
                  <div
                    className={`md:col-span-4 ${
                      isLeft ? "md:pr-8 md:text-right" : "hidden md:block"
                    }`}
                  >
                    {isLeft && (
                      <div className="md:mr-4">
                        <h3
                          id={`journey-title-${idx}`}
                          className="font-semibold text-slate-800"
                        >
                          {ev.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                          {ev.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-1 flex justify-center items-start z-10">
                    <div className="flex md:hidden items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                          highlight
                            ? "text-purple-600 border-purple-500 bg-white shadow"
                            : "text-slate-600 border-gray-300 bg-white"
                        }`}
                        aria-hidden="true"
                      >
                        {ev.month}
                      </div>
                      <div className="text-sm text-slate-700">
                        <h4 className="font-semibold">{ev.title}</h4>
                        <p className="text-slate-500 mt-1">{ev.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                            highlight
                              ? "text-purple-600 border-purple-500 bg-white ring-4 ring-purple-100"
                              : "text-slate-600 border-gray-300 bg-white"
                          }`}
                          aria-hidden="true"
                        >
                          {ev.month}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`md:col-span-4 ${
                      !isLeft ? "md:pl-8 md:text-left" : "hidden md:block"
                    }`}
                  >
                    {!isLeft && (
                      <div className="md:ml-4">
                        <h3
                          id={`journey-title-right-${idx}`}
                          className="font-semibold text-slate-800"
                        >
                          {ev.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                          {ev.description}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Digital CTA component (merged into this file)
const DigitalCTA = ({
  title = "Let's Chat About Your Digital Journey",
  description = "We're excited to hear about your business and goals! Whether you have a specific project in mind or just want to explore possibilities, our team is here to connect and provide personalized insights.",
  buttonText = "Start Your Digital Journey",
  href = "/contact",
  onClick,
  className = "",
}) => {
  const Button = href ? (
    <Link
      to={href}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium shadow-lg transform transition duration-200
                 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-200"
      aria-label={buttonText}
    >
      {buttonText}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium shadow-lg transform transition duration-200
                 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-200"
      aria-label={buttonText}
    >
      {buttonText}
    </button>
  );

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="digital-cta-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          id="digital-cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-4"
        >
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-4 mx-auto w-40 h-4 bg-gradient-to-r from-purple-200 to-pink-200 opacity-40 blur-xl rounded-full"
              style={{ filter: "blur(14px)" }}
            />
            {Button}
          </div>
        </div>
      </div>
    </section>
  );
};
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

      {/* Render journey timeline below the about content */}
      <JourneyTimeline />
      {/* Render CTA below the journey timeline */}
      <DigitalCTA />
    </section>
  );
};

export default About;