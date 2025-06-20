import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src="/src/assets/ee-logo.PNG"
              alt="Elevated Energy Logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex space-x-8">
            <a 
              href="#home"
              className="text-secondary hover:text-primary font-serif text-lg transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about"
              className="text-secondary hover:text-primary font-serif text-lg transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#holistic"
              className="text-secondary hover:text-primary font-serif text-lg transition-colors duration-200"
            >
              Holistic Services
            </a>
            <a 
              href="#book"
              className="text-secondary hover:text-primary font-serif text-lg transition-colors duration-200"
            >
              Book a Session
            </a>
            <a 
              href="#contact"
              className="text-secondary hover:text-primary font-serif text-lg transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="#book"
              className="ml-4 px-6 py-2 bg-secondary text-white font-serif text-lg rounded-full hover:bg-primary hover:text-secondary transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 