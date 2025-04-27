import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { teaTypes } from "../data/teaTypes";
import { teaFlavors } from "../data/teaFlavors";
import ProductCard from "./Productscard/ProductCard";

const Products = () => {
  const [teaTypeIndex, setTeaTypeIndex] = useState(0);
  const [teaFlavorIndex, setTeaFlavorIndex] = useState(0);

  // const getVisibleItems = (items, currentIndex) => {
  //   // Show 1 item on mobile, 2 on tablet, 4 on desktop
  //   const itemsToShow = window.innerWidth < 640 ? 1 : 
  //                      window.innerWidth < 768 ? 2 : 4;

  const getVisibleItems = (items, currentIndex) => {
    // Show 1 item on mobile, 2 on tablet, 4 on desktop
    const itemsToShow = window.innerWidth < 640 ? 1 : 
                       window.innerWidth < 768 ? 2 : 4;
    
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

  return (
    <section id="products" className="p-4">
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold">Tea Types</h2>
        <div className="relative">
          <button 
            onClick={() => prevSlide(setTeaTypeIndex, teaTypes)}
            className="absolute left-0 z-10 p-2 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-white/80 hover:bg-white"
          >
            <FaChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 md:grid-cols-4">
            {getVisibleItems(teaTypes, teaTypeIndex).map((product, index) => (
              <div 
                key={index} 
                className="transition-all duration-500 ease-in-out transform tea-type-card"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button 
            onClick={() => nextSlide(setTeaTypeIndex, teaTypes)}
            className="absolute right-0 z-10 p-2 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-white/80 hover:bg-white"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* 5- */}
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold">Tea Flavors</h2>
        <div className="relative">
          <button 
            onClick={() => prevSlide(setTeaFlavorIndex, teaFlavors)}
            className="absolute left-0 z-10 p-2 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-white/80 hover:bg-white"
          >
            <FaChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 md:grid-cols-4">
            {getVisibleItems(teaFlavors, teaFlavorIndex).map((product, index) => (
              <div 
                key={index} 
                className="transition-all duration-500 ease-in-out transform tea-flavor-card"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button 
            onClick={() => nextSlide(setTeaFlavorIndex, teaFlavors)}
            className="absolute right-0 z-10 p-2 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-white/80 hover:bg-white"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;