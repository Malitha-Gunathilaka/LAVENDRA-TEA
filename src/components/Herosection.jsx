import React from "react";
import { motion } from "framer-motion";
import teaBackground from "/bgimages/tea-background.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="heroSection">
      <section className="relative min-h-screen pt-15">
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
              className="text-lg leading-relaxed text-gray-300 mb-7 md:text-1xl"
              variants={textVariants}
            >
               Where Every Sip Tells a Story — Indulge in the exquisite taste of 
              LAVENDRA TEA, a luxurious blend born in the misty highlands of Sri Lanka. 
              Crafted from the finest handpicked leaves, our signature flavor awakens 
              your senses with its rich aroma, smooth finish, and calming essence. 
              It's not just tea—it's a moment of peace, a taste of heritage, and 
              a celebration of nature in its purest form. 
              <span className="block mt-4 italic text-green-400">
              🌿 Let your journey to serenity begin with us.
              </span>
            </motion.p>

            <motion.div className="space-x-4" variants={textVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700"
                onClick={() => scrollToSection("products")}
              >
                Explore Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-bold text-white transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-700"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Add Social Media Links */}
            <motion.div
              className="flex items-center gap-12 mt-6 ml-50"
              variants={textVariants}
            >
              <motion.a
                href="https://www.facebook.com/share/16AXLXre26/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="transition-colors text-white/80 hover:text-green-500"
              >
                <FaFacebook size={34} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="transition-colors text-white/80 hover:text-green-500"
              >
                <FaInstagram size={34} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="transition-colors text-white/80 hover:text-green-500"
              >
                <FaTiktok size={34} />
              </motion.a>
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
