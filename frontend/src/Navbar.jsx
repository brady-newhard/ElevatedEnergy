import React from 'react';

function Navbar() {
  return (
    <header className="w-full bg-white/90 border-b border-accent shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4">
        <div className="flex flex-col md:flex-row items-center w-full justify-center md:justify-start">
          <img src="/src/assets/ee-logo-slogan.PNG" alt="Elevated Energy Logo" className="h-14 w-auto mb-2 md:mb-0 md:mr-4" />
          <span className="text-3xl font-bold text-secondary tracking-wide text-center md:text-left">Elevated Energy</span>
        </div>
        <form className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
          <input type="text" placeholder="Search the site..." className="rounded-l px-3 py-2 border border-accent focus:outline-none focus:ring-2 focus:ring-primary bg-accent/40 text-secondary placeholder:text-secondary/60 w-56" />
          <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-r font-semibold hover:bg-secondary hover:text-accent transition-colors">Search</button>
        </form>
      </div>
      <nav className="w-full bg-secondary text-accent shadow">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-8 h-12">
          <a href="#about" className="font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent/40">About</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent/40">Contact</a>
          <div className="relative group">
            <button className="font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent/40 focus:outline-none">Services</button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-accent rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
              <a href="#holistic" className="block px-4 py-2 text-secondary hover:bg-accent/60 hover:text-primary rounded">Holistic Services</a>
              <a href="#book" className="block px-4 py-2 text-secondary hover:bg-accent/60 hover:text-primary rounded">Book a Session</a>
            </div>
          </div>
          <a href="#stay-connected" className="font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-accent/40">Stay Connected</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 