import React, { useState } from 'react';
import ProductSlider from './ProductSlider';
import { teaTypes } from './teaData';

const TeaTypes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleProducts = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teaTypes.length;
      result.push(teaTypes[index]);
    }
    return result;
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? teaTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % teaTypes.length);
  };

  return (
    <ProductSlider
      title="Tea Types"
      products={getVisibleProducts()}
      onPrevClick={handlePrev}
      onNextClick={handleNext}
      cardClassName="tea-type-card"
    />
  );
};

export default TeaTypes;