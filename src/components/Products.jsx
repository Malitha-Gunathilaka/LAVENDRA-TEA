import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { teaTypes } from "../data/teaTypes";
import { teaFlavors } from "../data/teaFlavors";
import ProductCard from "./Productscard/ProductCard";

const Products = () => {
  const [teaTypeIndex, setTeaTypeIndex] = useState(0);
  const [teaFlavorIndex, setTeaFlavorIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(
        window.innerWidth < 640 ? 1 : 
        window.innerWidth < 768 ? 2 : 4
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleItems = (items, currentIndex) => {
    const result = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % items.length;
      result.push(items[index]);
    }
    return result;
  };

  const nextSlide = (setIndex, items) => {
    setIndex(prev => (prev + 1) % items.length);
  };

  const prevSlide = (setIndex, items) => {
    setIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const ProductSection = ({ title, items, currentIndex, setIndex }) => (
    <div className="mb-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Our <span className="text-green-500">{title}</span>
        </h2>
        <div className="w-24 h-1 mx-auto mb-6 bg-green-500"></div>
      </div>

      <div className="relative">
        <button 
          onClick={() => prevSlide(setIndex, items)}
          className="absolute left-0 z-10 p-3 transition-all duration-300 -translate-y-1/2 border rounded-full bg-green-500/20 backdrop-blur-sm hover:bg-green-500/30 top-1/2 border-green-500/50"
        >
          <FaChevronLeft size={20} className="text-green-400" />
        </button>

        <div className="relative">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => prevSlide(setIndex, items)}
          className="absolute left-0 z-10 p-3 transition-colors -translate-y-1/2 bg-green-600 rounded-full shadow-xl top-1/2 hover:bg-green-700"
        >
          <FaChevronLeft size={20} className="text-white" />
        </motion.button>

        <div className="px-12 overflow-hidden">
          <motion.div 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
            initial={false}
          >
            <AnimatePresence mode="wait">
              {getVisibleItems(items, currentIndex).map((product, index) => (
                <motion.div
                  key={`${product.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-[#2a2a2a] rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="transition-transform duration-300 transform hover:scale-105">
                    <ProductCard product={product} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => nextSlide(setIndex, items)}
          className="absolute right-0 z-10 p-3 transition-colors -translate-y-1/2 bg-green-600 rounded-full shadow-xl top-1/2 hover:bg-green-700"
        >
          <FaChevronRight size={20} className="text-white" />
        </motion.button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]   border-t border-green-500" id="products">
      <div className="container px-4 mx-auto">
        <ProductSection 
          title="Tea Types" 
          items={teaTypes} 
          currentIndex={teaTypeIndex} 
          setIndex={setTeaTypeIndex} 
        />
        
        <ProductSection 
          title="Tea Flavors" 
          items={teaFlavors} 
          currentIndex={teaFlavorIndex} 
          setIndex={setTeaFlavorIndex} 
        />
      </div>
    </section>
  );
};

export default Products;