import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from './ProductCard';

const ProductSlider = ({ title, products, onPrevClick, onNextClick, cardClassName }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <div className="relative">
      <button onClick={onPrevClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
        <FaChevronLeft size={24} />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-12">
        {products.map((product, index) => (
          <div key={index} className={`${cardClassName} transform transition-all duration-500 ease-in-out`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button onClick={onNextClick} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
        <FaChevronRight size={24} />
      </button>
    </div>
  </div>
);

export default ProductSlider;