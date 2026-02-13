import React from 'react';

const Section2 = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Ideas Into Reality
            </h2>
            
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              We specialize in turning digital dreams into tangible products. From concept to launch, our team works closely with you every step of the way.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Web Development</p>
                  <p className="text-sm text-gray-600">Modern, responsive websites built with latest technologies</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Mobile Apps</p>
                  <p className="text-sm text-gray-600">Native and cross-platform mobile applications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">AI Solutions</p>
                  <p className="text-sm text-gray-600">Smart automation and intelligent systems</p>
                </div>
              </li>
            </ul>

            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </a>
          </div>

          {/* Right: Feature Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-gray-900">Discovery</p>
                  <p className="text-sm text-gray-600">Understand your goals and requirements</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-gray-900">Design</p>
                  <p className="text-sm text-gray-600">Create beautiful and functional designs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-gray-900">Development</p>
                  <p className="text-sm text-gray-600">Build with clean, scalable code</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-gray-900">Launch</p>
                  <p className="text-sm text-gray-600">Deploy and support your solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;