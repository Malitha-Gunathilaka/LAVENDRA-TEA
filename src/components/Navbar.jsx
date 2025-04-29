import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <motion.h1 
          className="flex items-center gap-2 text-2xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          <a onClick={() => scrollToSection('heroSection')} 
             className="flex items-center cursor-pointer group"> 
            <motion.img 
              src={logo} 
              alt="Lavendra Tea Logo" 
              className="w-8 h-8 mr-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="text-white transition-colors hover:text-green-500">
              LAVENDRA TEA
            </span>
          </a>
        </motion.h1>
        
        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="text-white md:hidden"
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
        </motion.button>

        {/* Desktop menu */}
        <div className="items-center hidden space-x-8 text-white md:flex">
          {menuItems.map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="tracking-wide transition-colors cursor-pointer hover:text-green-500"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 right-0 p-4 shadow-lg md:hidden top-full bg-black/95 backdrop-blur-sm"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.id}
                  whileHover={{ scale: 1.05, x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block py-3 text-white transition-colors cursor-pointer hover:text-green-500"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;