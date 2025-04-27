import React from "react";

const Footer = () => {
  return (
    <footer className="p-8 text-white bg-black" id="footer">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-12">
        {/* // Add your about us information here */}
        <div className="text-center md:text-left md:col-span-6">
          <h3 className="mb-4 text-3xl font-bold"> About us </h3>
          <h5 className="mb-2 text-xl font-bold">Pure Ceylon Tea, Crafted with Passion</h5>
          <p className="text-gray-300">
          Nestled in the lush, vibrant hills of Sri Lanka, LAVENDRA TEA brings you the essence of Ceylon’s finest teas. With a dedication to tradition and quality, we proudly offer a rich collection of premium, ethically sourced teas that embody the purest flavors of Sri Lanka. Our commitment to excellence and sustainability ensures that every cup of LAVENDRA TEA delivers an unforgettable experience, infused with heritage and crafted with care. Discover the true taste of Ceylon with us. 
          </p>
        </div>

{/* // Add your contact information here */}
        <div className="text-center md:col-span-3">
          <h3 className="mb-4 text-3xl font-semibold">Contact Us</h3>
          <div className="text-xl text-center" >
            <div className="inline-block space-y-3 text-left">
              <div className="flex items-start">
                <i className="w-10 mt-1 text-gray-300 fas fa-envelope"></i>
                <a
                  href="mailto:info@lavendratea.com"
                  className="text-gray-300 transition-colors hover:text-green-500"
                >
                  malitha@lavendratea.com
                </a>
              </div>
              <div className="flex items-start">
                <i className="w-10 mt-1 text-gray-300 fas fa-phone"></i>
                <a
                  href="tel:+94766987618"
                  className="text-gray-300 transition-colors hover:text-green-500"
                >
                  +94 766 987 618
                </a>
              </div>
              <div className="flex items-start">
                <i className="w-10 mt-1 text-gray-300 fas fa-map-marker-alt"></i>
                <address className="not-italic text-gray-300">
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
          <h3 className="mb-10 text-3xl font-semibold ">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-25 ">
            <a
              href="https://www.facebook.com/share/16AXLXre26/?mibextid=qi2Omg"
              className="text-gray-300 transition-colors hover:text-green-500"
            >
              <i className="text-5xl fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 transition-colors hover:text-green-500"
            >
              <i className="text-5xl fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 transition-colors hover:text-green-500"
            >
              <i className="text-5xl fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-8 text-center border-t border-gray-800">
        <p>&copy; 2025 LAVENDRA TEA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
