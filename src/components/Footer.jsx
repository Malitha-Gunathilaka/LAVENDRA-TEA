import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* // Add your about us information here */}
        <div className="text-center md:text-left  md:col-span-6">
          <h3 className="text-3xl font-bold mb-4"> About us </h3>
          <h5 className="text-xl font-bold mb-2">Pure Ceylon Tea, Crafted with Passion</h5>
          <p className="text-gray-300">
          Nestled in the lush, vibrant hills of Sri Lanka, LAVENDRA TEA brings you the essence of Ceylon’s finest teas. With a dedication to tradition and quality, we proudly offer a rich collection of premium, ethically sourced teas that embody the purest flavors of Sri Lanka. Our commitment to excellence and sustainability ensures that every cup of LAVENDRA TEA delivers an unforgettable experience, infused with heritage and crafted with care. Discover the true taste of Ceylon with us. 
          </p>
        </div>

{/* // Add your contact information here */}
        <div className="text-center md:col-span-3">
          <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
          <div className="text-center text-xl" >
            <div className="space-y-3 inline-block text-left">
              <div className="flex items-start">
                <i className="fas fa-envelope w-10 mt-1 text-gray-300"></i>
                <a
                  href="mailto:info@lavendratea.com"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  info@lavendratea.com
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone w-10 mt-1 text-gray-300"></i>
                <a
                  href="tel:+94766987618"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  +94 766 987 618
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt w-10 mt-1 text-gray-300"></i>
                <address className="text-gray-300 not-italic">
                  Lavendra Tea, <br />
                  F39, Aalupotha Ussapitiya,
                  <br />
                  Mawanelle, <br />
                  Sri Lanka
                </address>
              </div>
            </div>
          </div>
        </div>
        {/* // Add your contact information here */}

        <div className="text-center md:text-center md:col-span-3">
          <h3 className="text-3xl font-semibold mb-10 ">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-25 ">
            <a
              href="#"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <i className="fab fa-facebook text-5xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <i className="fab fa-instagram text-5xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <i className="fab fa-twitter text-5xl"></i>
            </a>
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
