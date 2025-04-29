import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative p-8 text-white bg-gradient-to-t from-black to-[#1a1a1a]" id="footer">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-green-500/20 via-green-500 to-green-500/20"></div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo and Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 mb-3 transition-colors group"
            >
              <FaLeaf className="text-2xl text-green-500 transition-transform group-hover:rotate-45" />
              <h3 className="text-2xl font-bold text-green-500">LAVENDRA TEA</h3>
            </motion.button>
            
            {/* Tagline */}
            <p className="text-sm text-gray-400">Pure Ceylon Tea, Crafted with Passion</p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Lavendra Tea. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;