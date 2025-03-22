import React from "react";

const HeroSection = () => {
  return (
    <div id="heroSection">
      <section className="relative min-h-screen pt-16">
        {" "}
        {/* Added pt-16 for navbar height */}
        <div className="absolute inset-0 bg-[url('bgimages/tea-background.jpg')] bg-cover bg-center bg-no-repeat"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Using modern opacity syntax */}
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to LAVENDRA TEA
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
              Experience the finest collection of premium teas, handpicked from
              the best tea gardens. Discover a world of authentic flavors and
              aromatic blends.
            </p>
            <div className="space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-green-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Tea Cup Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="bgimages/tea-cup.png"
              alt="Elegant Tea Cup"
              className="w-60 md:w-80 h-60 md:h-80 object-contain float-combined-animation"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
