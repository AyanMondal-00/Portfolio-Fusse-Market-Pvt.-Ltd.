import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#360b68] to-[#0e8dc8] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <a
          href="https://fusemarket.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 shrink-0"
        >
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://fusemarket.in/assets/images/logo-bg.jpg"
            alt="FusseMarket logo"
          />
          <h1 className="font-bold text-base md:text-xl leading-tight">FusseMarket Pvt. Ltd.</h1>
        </a>

        <nav>
          <ul className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base">
            <li>
              <Link to="/" className="block py-1 px-2 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-1 px-2 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-1 px-2 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar

