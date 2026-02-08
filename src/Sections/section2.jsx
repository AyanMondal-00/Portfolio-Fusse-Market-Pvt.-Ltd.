import React from 'react';

const Section2 = () => {
return (
    <section className="py-5 bg-[#031829]">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-3.2xl font-bold text-[#ffa704] mb-6">
                    Ready to Build Your Next Project?
                </h2>
                
                <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                    From websites to mobile apps and AI platforms, we bring your digital vision to life with cutting-edge technology and expert craftsmanship.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://fusemarket.in/contact.html"
                        target='_blank'
                        className="inline-block px-7 py-3 bg-[#fa9f37] text-black font-semibold text-sm rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#f4b41a]/50"
                    >
                        Start Development
                    </a>
                    
                    <a
                        href="https://fusemarket.in/services.html"
                        target='_blank'
                        className="inline-block px-7 py-3 bg-transparent border-2 border-[#f5972b] text-[#f59724] font-semibold text-sm rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#f4b41a]/50"
                    >
                        View Dev Services
                    </a>
                </div>
            </div>
        </div>
    </section>
);
};

export default Section2;