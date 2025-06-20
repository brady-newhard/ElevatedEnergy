import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Landing from './Landing';
import Contact from './Contact';
import Booking from './BookSession';
import About from './About';
// import Footer from './Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#F3DFC5' }} className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
