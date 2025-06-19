import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Landing from './Landing';
// import Footer from './Footer';
// import About from './About';
// import Contact from './Contact';
// import HolisticServices from './HolisticServices';
// import BookSession from './BookSession';
// import StayConnected from './StayConnected';

function App() {
  return (
    <div style={{ backgroundColor: '#F3DFC5' }} className="min-h-screen w-full">
      <Navbar />
      <Landing />
      {/* <About />
      <Contact />
      <HolisticServices />
      <BookSession />
      <StayConnected />
      <Footer /> */}
    </div>
  );
}

export default App;
