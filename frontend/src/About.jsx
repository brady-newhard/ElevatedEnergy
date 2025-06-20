//  @ts-nocheck
import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-accent pt-24 pb-16">
        <div className="container mx-auto px-6">
          
          {/* --- Practitioner Section --- */}
          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl font-serif text-secondary text-center mb-12">Meet the Practitioner</h1>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961" 
                  alt="Practitioner Portrait"
                  className="w-64 h-64 object-cover rounded-full shadow-2xl"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-secondary/80 leading-relaxed">
                  Welcome! I'm Casandra Newhard, a certified Access Bars practitioner dedicated to guiding individuals toward a life of greater ease, joy, and consciousness. My journey into energy work began with a desire to find deeper peace and clarity in my own life. Discovering Access Bars was transformative, and it ignited a passion to share this gentle yet powerful modality with others. I believe everyone has the capacity to release limitations and create the life they truly desire. It is my honor to hold a safe, nurturing space for your transformation.
                </p>
              </div>
            </div>
          </div>

          {/* --- Access Bars Section --- */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif text-secondary text-center mb-12">The Art of Access Bars</h2>
            
            {/* What It Is (Text -> Image on all screen sizes) */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-3xl font-serif text-secondary mb-4">What is Access Bars?</h3>
                <p className="text-lg text-secondary/80 leading-relaxed">
                  Access Bars is a hands-on energy healing process that uses light touch on 32 points on the head. These "Bars" store the electromagnetic components of all the thoughts, ideas, attitudes, decisions, and beliefs that you have ever had about anything. A session is a chance to let go of everything! Imagine it as deleting old, cluttered files from your computer's hard drive, allowing more space for what truly matters.
                </p>
              </div>
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1887" alt="Serene hands and water" className="rounded-2xl shadow-xl w-full h-80 object-cover"/>
            </div>

            {/* Origins (Image -> Text on Desktop, but Text is between images on Mobile) */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* This text block now comes first in the code to ensure it appears after the first image on mobile */}
              <div className="md:order-last"> 
                <h3 className="text-3xl font-serif text-secondary mb-4">Origins and Philosophy</h3>
                <p className="text-lg text-secondary/80 leading-relaxed">
                  Developed by Gary Douglas in the 1990s, Access Bars is the foundational tool of Access Consciousness®, a set of life-changing techniques and tools designed to empower you to know that you know. The core philosophy is not about finding answers, but about living in the question, continuously opening doors to new possibilities. It encourages you to step out of judgment and into a state of allowing, where you can receive everything the universe has to offer without limitation.
                </p>
              </div>
              {/* This image now comes second in the code */}
              <img src="https://images.unsplash.com/photo-1474418397713-7e15e93be11e?auto=format&fit=crop&q=80&w=1887" alt="Flowing energy light patterns" className="rounded-2xl shadow-xl w-full h-80 object-cover"/>
            </div>
            
            {/* Benefits */}
            <div className="text-center">
                <h3 className="text-3xl font-serif text-secondary mb-6">Profound Benefits</h3>
                <p className="text-lg text-secondary/80 leading-relaxed max-w-3xl mx-auto mb-8">
                    Clients report a wide array of benefits, often feeling a sense of deep relaxation during and after a session. Common experiences include:
                </p>
                <ul className="list-disc list-inside inline-block text-left text-lg text-secondary/80 space-y-2">
                    <li>Reduced stress and mental chatter</li>
                    <li>Increased sense of peace and calm</li>
                    <li>Improved sleep quality</li>
                    <li>Relief from anxiety and depressive symptoms</li>
                    <li>Greater clarity and focus</li>
                    <li>Unlocking of creativity and problem-solving abilities</li>
                </ul>
            </div>
          </div>

        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;