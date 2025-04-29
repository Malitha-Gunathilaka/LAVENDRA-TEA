import React from "react";
import { motion } from "framer-motion";
import teaBackground from '/bgimages/tea-background.png';


const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="heroSection">
      <section className="relative min-h-screen pt-16">
        {/* Background and overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${teaBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-between h-full px-4 py-12 md:flex-row md:px-12">
          {/* Left side - Text Content */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 text-center md:w-1/2 md:text-left md:mb-0"
          >
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-green-400 uppercase rounded-full bg-green-500/10"
            >
              Premium Ceylon Tea
            </motion.span>
            
            <motion.h1 
              className="mb-8 text-4xl font-bold text-white md:text-7xl"
              variants={textVariants}
            >
              WELCOME TO <br />
              <span className="text-green-500">LAVENDRA TEA</span>
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-lg text-gray-300 md:text-xl"
              variants={textVariants}
            >
              The best tea in the world is the latest flavor brought from our Sri Lankan tea.
              Now you can enjoy the taste of lavendra tea made from the best tea leaves grown 
              in the fertile tea estates of Sri Lanka.
            </motion.p>
            
            <motion.div 
        className="space-x-4"
        variants={textVariants}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700"
          onClick={() => scrollToSection('products')}
        >
          Explore Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 font-bold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-700"
          onClick={() => scrollToSection('about')}
        >
          Learn More
        </motion.button>
      </motion.div>
          </motion.div>

          {/* Right side - Video */}
          <motion.div 
            variants={videoVariants}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden shadow-2xl rounded-2xl md:w-1/2"
          >
            <div className="aspect-w-16 aspect-h-9">
              <video 
                className="object-cover rounded-2xl"
                autoPlay 
                loop 
                muted   
                playsInline
              >
                <source src="/videos/tea-process.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;