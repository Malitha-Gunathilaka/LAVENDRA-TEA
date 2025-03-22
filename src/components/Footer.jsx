import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">LAVENDRA TEA</h3>
          <p className="text-gray-300">
            Premium tea crafted with passion and tradition since 1995.
          </p>
        </div>
        
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-300">Email: info@lavendratea.com</p>
          <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-300">Address: 123 Tea Garden Lane</p>
        </div>
        
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-green-600">Facebook</a>
            <a href="#" className="hover:text-green-600">Instagram</a>
            <a href="#" className="hover:text-green-600">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p>&copy; 2025 LAVENDRA TEA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;