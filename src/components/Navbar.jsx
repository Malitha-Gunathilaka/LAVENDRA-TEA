import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Add your logo path here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4 text-white bg-black/95 backdrop-blur-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
      <h1 className="flex items-center gap-2 text-2xl font-bold tracking-wider">
  <a onClick={() => scrollToSection('heroSection')} 
     className="flex items-center cursor-pointer group"> 
    <img 
      src={logo} 
      alt="Lavendra Tea Logo" 
      className="w-8 h-8 mr-3 transition-all duration-300 ease-in-out hover:scale-110 animate-fadeIn group-hover:rotate-6" 
    />
    <span className="transition-colors hover:text-green-600">LAVENDRA TEA</span>
  </a>
</h1>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="items-center hidden space-x-8 md:flex">
          <a 
            onClick={() => scrollToSection('products')}
            className="tracking-wide transition-colors cursor-pointer hover:text-green-600"
          >
            Products
          </a>
          
          <a 
            onClick={() => scrollToSection('footer')}
            className="tracking-wide transition-colors cursor-pointer hover:text-green-600"
          >
            About Us
          </a>
          
          <a 
            onClick={() => scrollToSection('footer')}
            className="tracking-wide transition-colors cursor-pointer hover:text-green-600"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu panel */}
        {isOpen && (
          <div className="absolute left-0 right-0 p-4 md:hidden top-full bg-black/95">
            <a 
              onClick={() => scrollToSection('footer')}
              className="block py-2 transition-colors cursor-pointer hover:text-green-600"
            >
              About Us
            </a>
            <a 
              onClick={() => scrollToSection('products')}
              className="block py-2 transition-colors cursor-pointer hover:text-green-600"
            >
              Products
            </a>
            <a 
              onClick={() => scrollToSection('reviews')}
              className="block py-2 transition-colors cursor-pointer hover:text-green-600"
            >
              Reviews
            </a>
            <a 
              onClick={() => scrollToSection('footer')}
              className="block py-2 transition-colors cursor-pointer hover:text-green-600"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;