import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
