import React, {useState} from "react";
import {Menu, X} from 'lucide-react';


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return(
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
           {/*Brand */}
           <a href="#home" className="flex items-center gap-3">
            <div className="mx-auto my-auto w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold shadow">TY</div>
             <div>
                <div className="font-semibold text-lg">TravelYoung</div>
                <div className="text-xs text-gray-500">Curated travel, lifelong memories</div>
             </div>
           </a>

           {/* Desktop nav */}
           <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:!text-indigo-600">About</a>
            <a href="#services" className="hover:!text-indigo-600">Services</a>
            <a href="#packages" className="hover:!text-indigo-600">Packages</a>
            <a href="#contact" className="inline-flex items-center gap-2 !bg-indigo-600 !text-white px-4 py-2 rounded-2x1 shadow hover:opacity-95">Contact</a>
           </nav>

          {/* Mobile menu button */}
          <button 
          className="md:hidden p-2 rounded-lg !bg-gray-100"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5" /> }
          </button>
         </div>

         {/* Mobile menu panel */}
         {open && (
            <div className="md:hidden bg-white border-t">
                <div className="px-6 py-4 flex flex-col gap-3">
                    <a href="#about" className="py-2">About</a>
                    <a href="#services" className="py-2">Services</a>
                    <a href="#packages" className="py-2">Packages</a>
                    <a href="#contact" className="py-2 font-medium">Contact</a>
              </div> 
            </div>
         )}

        </header>
    );
}