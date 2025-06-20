import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Landing from './Landing';
import Contact from './Contact';
import BookSession from './BookSession';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: '#F3DFC5' }}>
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-session" element={<BookSession />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
