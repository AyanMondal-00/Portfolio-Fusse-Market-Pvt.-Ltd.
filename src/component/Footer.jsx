import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Single Row Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left: Company Info */}
          <div>
            <h3 className="text-lg font-bold">Fuse Market</h3>
            <p className="text-gray-400 text-xs">Empowering brands digitally</p>
          </div>

          {/* Center: Quick Contact */}
          <div className="text-center text-xs">
            <a href="mailto:contact@fusemarket.in" className="text-gray-300 hover:text-blue-400 block">
             Email : contact@fusemarket.in
            </a>
            <a href="tel:+918418818469" className="text-gray-300 hover:text-blue-400 text-xs mt-1">
             Phone : +91 84188 18469
            </a>
          </div>

          {/* Right: Social Media Icons with styling */}
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/people/The-Fusse-Market/61579758510284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              title="Facebook"
            >
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 transform group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                <img 
                  src="https://img.icons8.com/?size=100&id=118497&format=png&color=ffffff" 
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </div>
            </a>

            <a 
              href="https://www.instagram.com/the_fusse_market/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              title="Instagram"
            >
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                <img 
                  src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=ffffff" 
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </div>
            </a>

            <a 
              href="https://linkedin.com/company/thefusemarket/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              title="LinkedIn"
            >
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 transform group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-600/50">
                <img 
                  src="https://img.icons8.com/?size=100&id=13930&format=png&color=ffffff" 
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </div>
            </a>

            <a 
              href="https://github.com/SarveshCS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              title="GitHub"
            >
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300 transform group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-gray-600/50">
                <img 
                  src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff" 
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Copyright - Minimal */}
        <div className="text-center text-gray-500 text-xs pt-2 mt-2 border-t border-gray-700">
          © 2026 Fuse Market
        </div>
      </div>
    </footer>
  );
};

export default Footer;