import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = ({ mobile = false }) => (
  <div className={mobile ? "flex flex-col items-center space-y-6" : "flex items-center space-x-8"}>
    <NavLink to="/" className={({ isActive }) => `font-serif text-lg transition-colors duration-200 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => `font-serif text-lg transition-colors duration-200 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}>About</NavLink>
    {/* Placeholder for future link */}
    <a href="#holistic" className="text-secondary hover:text-primary font-serif text-lg transition-colors duration-200">Holistic Services</a>
    <NavLink to="/book-session" className={({ isActive }) => `font-serif text-lg transition-colors duration-200 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}>Book a Session</NavLink>
    <NavLink to="/contact" className={({ isActive }) => `font-serif text-lg transition-colors duration-200 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}>Contact</NavLink>
    <Link to="/book-session" className={mobile ? "w-full text-center mt-4 px-6 py-3 bg-primary text-secondary font-serif text-lg rounded-full shadow-md" : "ml-4 px-6 py-2 bg-secondary text-white font-serif text-lg rounded-full hover:bg-primary hover:text-secondary transition-all duration-200 shadow-sm hover:shadow-md"}>
      Book Now
    </Link>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/src/assets/ee-logo.PNG"
                alt="Elevated Energy Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
              <NavLinks />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Menu Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-t-2xl rounded-t-2xl p-8 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <NavLinks mobile={true} />
      </div>
    </>
  );
};

export default Navbar;