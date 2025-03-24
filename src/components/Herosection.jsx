import React from "react";
import teaBackground from '/bgimages/tea-background.png';

const HeroSection = () => {
  return (
    <div id="heroSection">
      <section className="relative min-h-screen pt-16">
        {/* Background and overlay */}
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${teaBackground})` }}></div>
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-between h-full px-4 py-12 md:flex-row md:px-12">
          {/* Left side - Text Content */}
          <div className="mb-8 text-center md:w-1/2 md:text-left md:mb-0">
          <h1 className="mb-8 text-4xl font-bold text-center text-white md:text-7xl ">
              WELCOME TO <br />LAVENDRA TEA
            </h1>
            <p className="mb-8 text-lg text-white md:text-xl">
              The best tea in the world is the latest flavor brought from our Sri Lankan tea.
              Now you can enjoy the taste of lavendra tea made from the best tea leaves grown in the fertile tea estates of Sri Lanka.
            </p>
            
          
            
            {/* <div className="space-x-4">
              <button className="px-8 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
                Shop Now
              </button>
              <button className="px-8 py-3 font-bold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-700">
                Learn More
              </button>
            </div> */}
          </div>

          {/* Right side - Video */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <video 
                className="object-cover rounded-lg"
                autoPlay 
                loop 
                muted   
                playsInline
              >
                <source src="/videos/tea-process.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;