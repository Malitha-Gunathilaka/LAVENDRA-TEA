import React, { useState } from 'react';

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
    <nav className="bg-black/95 backdrop-blur-sm text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wider hover:text-green-600 transition-colors">
          <a onClick={() => scrollToSection('heroSection')} className="cursor-pointer"> 
            LAVENDRA TEA
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
        <div className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('products')}
            className="hover:text-green-600 transition-colors tracking-wide cursor-pointer"
          >
            Products
          </a>
          
          <a 
            onClick={() => scrollToSection('footer')}
            className="hover:text-green-600 transition-colors tracking-wide cursor-pointer"
          >
            About Us
          </a>
          
          <a 
            onClick={() => scrollToSection('footer')}
            className="hover:text-green-600 transition-colors tracking-wide cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu panel */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 p-4">
            <a 
              onClick={() => scrollToSection('footer')}
              className="block py-2 hover:text-green-600 transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a 
              onClick={() => scrollToSection('products')}
              className="block py-2 hover:text-green-600 transition-colors cursor-pointer"
            >
              Products
            </a>
            <a 
              onClick={() => scrollToSection('reviews')}
              className="block py-2 hover:text-green-600 transition-colors cursor-pointer"
            >
              Reviews
            </a>
            <a 
              onClick={() => scrollToSection('footer')}
              className="block py-2 hover:text-green-600 transition-colors cursor-pointer"
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