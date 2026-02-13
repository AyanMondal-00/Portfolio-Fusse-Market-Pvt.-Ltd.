import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-md text-white flex justify-between items-center py-4 px-6 h-16 border-b border-white/10 rounded-lg">
     <a href="https://fusemarket.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
       <img className="h-8 w-8 rounded-full" src="https://fusemarket.in/assets/images/logo-bg.jpg" alt="FusseMarket logo" />
       <h1 className="font-bold text-lg">FusseMarket</h1>
     </a>
      <ul className="flex space-x-8">     
            <li><Link to="/" className="text-sm font-medium hover:text-black transition-colors">Home</Link></li>
           <li><Link to="/about" className="text-sm font-medium hover:text-black transition-colors">About</Link></li>
           <li><Link to="/contact" className="text-sm font-medium hover:text-black transition-colors">Contact</Link></li> 
        </ul>
    </div>
  )
}

export default Navbar



