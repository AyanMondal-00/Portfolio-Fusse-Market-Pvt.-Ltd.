import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-linear-to-r from-[#360b68] to-[#0e8dc8] text-white flex justify-between py-4 px-6 h-16">
     <a href="https://fusemarket.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
       <img className="h-7.5 w-7.5 rounded-full" src="https://fusemarket.in/assets/images/logo-bg.jpg" alt="FusseMarket logo" />
       <h1 className="font-bold text-xl">FusseMarket Pvt. Ltd.</h1>
     </a>
      <div className="space-x-6">
        <ul className="flex space-x-6">     
            <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar

