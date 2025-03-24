import React from "react";

const HeroSection = () => {
  return (
    <div id="heroSection">
      <section className="relative min-h-screen pt-16">
        {" "}
        {/* Added pt-16 for navbar height */}
        <div className="absolute inset-0 bg-[url('bgimages/tea-background.png')] bg-cover bg-center bg-no-repeat"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Using modern opacity syntax */}
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full py-12">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Welcome to LAVENDRA TEA1
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-white md:text-xl">
            The best tea in the world is the latest flavor brought from our Sri Lankan tea.
            Now you can  enjoy the taste of lavendra tea made from the best to leaves grown in the fertile tea estates of Si Lanka 
            </p>
            <div className="space-x-4">
              <button className="px-8 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
                Shop Now
              </button>
              <button className="px-8 py-3 font-bold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Tea Cup Image */}
          <div className="flex justify-center mt-8 md:w-1/2 md:mt-0">
            <img
              src="bgimages/tea-cup.png"
              alt="Elegant Tea Cup"
              className="object-contain w-60 md:w-80 h-60 md:h-80 float-combined-animation"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;


// LAVENDRA TEA 
// The best tea in the world is the latest flavor brought from our Sri Lankan tea. 
// Now you can  enjoy the taste of lavendra tea made from the best to leaves grown in the fertile tea estates of Si Lanka 