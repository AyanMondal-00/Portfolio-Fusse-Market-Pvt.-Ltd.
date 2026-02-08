import React from "react";

const Contact = () => {
  const bgUrl =
    "https://thumbs.dreamstime.com/b/three-wooden-ball-contact-icon-against-blue-background-arranging-row-over-reflecting-floor-211477031.jpg";

  return (
    <>
      {/* ===== HERO / CONNECT SECTION ===== */}
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url("${bgUrl}")`,
            filter: "brightness(0.8)",
            backgroundAttachment: 'scroll',
          }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl mx-auto text-center py-16 md:py-28 px-6 min-h-[220px] flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-extrabold">
            Let's Connect
          </h2>

          <p className="mt-6 text-white/90 text-lg">
            Reach out for digital marketing solutions that truly make an impact.
          </p>
        </div>
      </section>

      {/* ===== CONTACT DETAILS + FORM ===== */}
      <section className="w-full bg-linear-to-r from-[#f8fafc] via-[#e9e9f3] to-[#f8fafc] py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT INFO */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#b74456] mb-6">Get in Touch</h3>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b74456] flex items-center justify-center shadow-md">
                  {/* Custom Phone icon image */}
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
                    alt="Phone Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800">Phone</div>
                  <div className="text-xs text-slate-500 mt-1">+91 8418818469</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b74456] flex items-center justify-center shadow-md">
                  {/* Custom Email icon image */}
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/293/604/small_2x/mail-icon-with-long-shadow-black-on-white-background-simple-design-style-illustration-free-vector.jpg"
                    alt="Email Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800">Email</div>
                  <div className="text-xs text-slate-500 mt-1">fusemarket.fm@gmail.com</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b74456] flex items-center justify-center shadow-md">
                  {/* Standard Location icon */}
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800">Location</div>
                  <div className="text-xs text-slate-500 mt-1">Sarojini Nagar, Kanpur Road, Lucknow</div>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-slate-200 rounded-md shadow-xl p-6 w-full">
            <div className="h-1 bg-[#b74456]/20 rounded-full mb-6" />
            <h4 className="text-xl lg:text-2xl font-bold text-[#b74456] text-center mb-4">
              Let's Start a Conversation
            </h4>
            <p className="text-xs text-slate-600 text-center mb-6">
              We'd love to hear from you! Whether you have a project in mind, questions about our services,
              or just want to say hello, drop us a message and our team will get back to you personally within 24 hours.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-sm border border-slate-200 px-4 py-2 text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-[#b74456]/30"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-sm border border-slate-200 px-4 py-2 text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-[#b74456]/30"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-sm border border-slate-200 px-4 py-2 text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-[#b74456]/30 resize-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-[#b74456] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#a03d4a] transition"
                >
                  {/* Standard Send icon */}
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
