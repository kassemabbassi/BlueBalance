import React from 'react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a 
          href="/" 
          className="h-[48px] flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
        >
          <img 
            src="MenuLogo.png" 
            className="h-[48px] w-auto rounded-lg" 
            alt="Flowbite Logo" 
          />
        </a>
      </div>
    </nav>
  );
}
