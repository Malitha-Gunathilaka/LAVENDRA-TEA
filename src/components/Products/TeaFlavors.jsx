import React, { useState } from 'react';
import ProductSlider from './ProductSlider';
import { teaFlavors } from './teaData';

const TeaFlavors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleProducts = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teaFlavors.length;
      result.push(teaFlavors[index]);
    }
    return result;
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? teaFlavors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % teaFlavors.length);
  };

  return (
    <ProductSlider
      title="Tea Flavors"
      products={getVisibleProducts()}
      onPrevClick={handlePrev}
      onNextClick={handleNext}
      cardClassName="tea-flavor-card"
    />
  );
};

export default TeaFlavors;