import React from "react";

const Contact = () => {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h1>
          <p className="text-base opacity-90">
            Have a question or ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+918418818469" className="text-gray-600 hover:text-blue-600">
                  +91 8418818469
                </a>
              </div>

              {/* Email */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <a href="mailto:fusemarket.fm@gmail.com" className="text-gray-600 hover:text-blue-600 block">
                  fusemarket.fm@gmail.com
                </a>
                <a href="mailto:contact@fusemarket.in" className="text-gray-600 hover:text-blue-600">
                  contact@fusemarket.in
                </a>
              </div>

              {/* Location */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <a 
                  href="https://maps.app.goo.gl/PS7JYqfcd5UF2Ysn8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Sarojini Nagar, Kanpur Road
                  <br />
                  Lucknow, Uttar Pradesh
                </a>
              </div>

              {/* Hours */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us your Query</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">How quickly will you respond?</h3>
              <p className="text-gray-600 text-sm">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">What services do you offer?</h3>
              <p className="text-gray-600 text-sm">
                We provide web development, mobile app development, and AI-powered solutions for businesses.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer free consultations?</h3>
              <p className="text-gray-600 text-sm">
                Yes! We offer a free initial consultation to discuss your project and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
