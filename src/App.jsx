import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
