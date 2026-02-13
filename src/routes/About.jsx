import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full bg-white">
      {/* Simple Header Section */}
      <section className="bg-[#6173dd] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Fusse Market
          </h1>
          <p className="text-base opacity-90">
            Transforming businesses through innovative digital marketing strategies and exceptional client experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
            <p>
              Founded in late 2024, Fusse Market emerged from a vision to revolutionize how businesses approach digital
              marketing. In an increasingly connected world, we recognized the need for a more integrated, data-driven
              approach that delivers real results while maintaining authentic brand connections.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Philosophy</h2>
            <p>
              Our name "Fusse Market" represents our core philosophy: we fuse cutting-edge digital strategies with deep
              market insights to create powerful connections between brands and their audiences. This fusion is at the heart
              of everything we do—blending creativity with analytics, innovation with reliability, and strategy with execution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What Makes Us Different</h2>
            <p>
              What sets Fusse Market apart is our holistic approach. We don't just implement isolated tactics; we develop
              comprehensive digital ecosystems where each element strengthens the others. From social media campaigns that
              drive website traffic to SEO strategies that complement content marketing, we ensure every piece works in
              harmony toward your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section - Modern Card Design */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Journey</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              From vision to success - our milestones that shaped Fusse Market's growth
            </p>
          </div>
          
          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">November 2024: The Beginning</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Fusse Market was established with a vision to bridge the gap between traditional marketing approaches and the digital revolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg border-2 border-purple-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">December 2024: First Client</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    We secured our first major client, Affnet Consultants, marking the beginning of our professional journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg border-2 border-indigo-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">January 2025: Expanding Services</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    We expanded our services to include comprehensive SEO strategies and content marketing solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg border-2 border-pink-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">February 2025: Team Growth</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    We welcomed new team members specializing in paid advertising and graphic design.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg border-2 border-green-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">March 2025: Looking Forward</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    We're expanding into emerging digital territories while delivering measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg border-2 border-yellow-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">July 2025: SaaS Project</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Our first SaaS CRM is live — designed to turn workflows into effortless wins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8">
            We're excited to hear about your business and goals! Whether you have a specific project in mind or just want to explore possibilities, our team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;