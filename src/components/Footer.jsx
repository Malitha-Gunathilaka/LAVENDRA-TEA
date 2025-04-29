import React from "react";

const Footer = () => {
  return (
    <footer className="p-8 text-white bg-gradient-to-t from-black to-[#1a1a1a] border-t border-green-500" id="footer">
      <div className="container mx-auto">
        <div className="flex justify-center">
          {/* Logo and Copyright */}
          <div className="text-center">
            <h3 className="mb-2 text-xl font-bold text-green-500">LAVENDRA TEA</h3>
            <p className="text-sm text-gray-300">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;