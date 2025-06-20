import React from "react";
import logo from './assets/ee-logo.PNG'; // Import the logo
import Footer from './Footer';

const Landing = () => {
  return (
    <main className="w-full h-screen flex items-center bg-accent overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
        
        {/* Left Column: Text Content */}
        <div className="text-left flex flex-col justify-center h-full py-12 md:py-0">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Elevated Energy Logo" className="h-48 w-auto" />
            <div>
              <h2 className="text-4xl font-serif text-secondary leading-tight">
                Rise Above the Noise. Reconnect Within.
              </h2>
              <p className="text-2xl font-serif text-primary mt-2">
                All of Life Comes to Me with Ease, Joy & Glory.®
              </p>
            </div>
          </div>
          
          <div className="w-full h-[1px] bg-secondary my-8"></div>

          <p className="text-secondary/80 text-lg leading-relaxed">
            Discover a transformative approach to wellness with Access Bars, a gentle energy-healing modality designed to release stress, quiet the mind, and dissolve limiting beliefs. By lightly touching 32 points on your head, this process defragments the electromagnetic components of stress, thought, and emotion, creating space for new possibilities and profound relaxation. Experience the luxury of tranquility and empower your journey to recovery with our dedicated team.
          </p>

          <button className="mt-8 px-8 py-3 bg-secondary text-white font-serif text-lg rounded-full hover:bg-primary hover:text-secondary transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 self-start">
            Learn More &rarr;
          </button>
        </div>

        {/* Right Column: Images */}
        <div className="relative hidden md:flex justify-center items-end h-full">
          {/* Container for the image composition, aligned to the bottom */}
          <div className="relative w-[400px] h-[500px]">
            {/* Main image container with the TALL and NARROW shape, rounded at the TOP */}
            <div className="w-full h-full rounded-t-full overflow-hidden shadow-2xl">
              <img 
                src="./src/assets/accessbars-logo.png" 
                alt="Woman in a state of relaxation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Smaller overlapping image - Repositioned so its center aligns with the main image's corner */}
            <div className="absolute -bottom-24 -left-24 w-[200px] h-[200px]">
              <img 
                src="./src/assets/bars.webp" 
                alt="Zen-like spa objects" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
      
    </main>
  );
};

export default Landing; 