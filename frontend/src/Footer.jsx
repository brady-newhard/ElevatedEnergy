import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-accent py-4 flex flex-col md:flex-row items-center justify-between px-6 mt-12">
      <div className="flex gap-4 mb-2 md:mb-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
      </div>
      <div className="text-sm">Designed by WildStone Solutions, LLC</div>
    </footer>
  );
}

export default Footer; 