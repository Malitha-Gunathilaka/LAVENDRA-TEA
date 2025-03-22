import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons


const Products = () => {
  const [teaTypeIndex, setTeaTypeIndex] = useState(0);
  const [teaFlavorIndex, setTeaFlavorIndex] = useState(0);
  
  const [teaTypes] = useState([
    {
      type: "Black Tea",
      flavors: ["Cinnamon", "Earl Grey"],
      description: "Combined with bio-dynamic farming which ensures the finest quality, our exquisite Legend Black Tea is the result of ideal micro-climatic conditions and elevation in the Golden Valley of Ceylon, where it is harvested. With a revitalizing aroma and a liquor that is reddish-golden and smooth on the palate, Legend offers the perfect cup that’s guaranteed to tantalize your taste buds",
      price: "$8.99",
      image: "/Products images/black-tea.jpg",
    },
    {
      type: "Decaf Tea",
      flavors: ["Ginger"],
      description: "Caffeine-free alternatives with all the taste and aroma of regular tea leaves but without the caffeine. Our decaf tea is perfect for those who want to enjoy a cup of tea without the caffeine jitters. Our decaf tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour. ",
      price: "$7.99",
      image: "/Products images/decaf-tea.jpg",
    },
    {
      type: "Flavored Tea",
      flavors: ["Fruity", "Vanilla"],
      description: "Aromatic blends with natural flavors and spices that are sure to delight your senses. Our flavored tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour.Aromatic blends with natural flavors and spices that are sure to delight your senses. Our flavored tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour. ",
      price: "$9.99",
      image: "/Products images/flavored-tea.jpg",
    },
    {
      type: "Green Tea",
      flavors: ["Cinnamon", "Ginger"],
      description: "Harvested at precise times from the Bogawantalawa golden valley, Legend Green Tea contains a full body liquor along with robust flavour. Legend Green Tea is produced with over a century of expertise and know-how that’s been passed down through generations. Our Green Tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour.",
      price: "$8.99",
      image: "/Products images/green-tea.jpg",
    },
    {
      type: "D Tea",
      flavors: ["Ginger"],
      description: "Caffeine-free alternatives with all the taste and aroma of regular tea leaves but without the caffeine. Our decaf tea is perfect for those who want to enjoy a cup of tea without the caffeine jitters. Our decaf tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour. ",
      price: "$7.99",
      image: "/Products images/decaf-tea.jpg",
    },
    {
      type: "F Tea",
      flavors: ["Fruity", "Vanilla"],
      description: "Aromatic blends with natural flavors and spices that are sure to delight your senses. Our flavored tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour.Aromatic blends with natural flavors and spices that are sure to delight your senses. Our flavored tea is climate-positive certified and are withered and steamed to preserve its fresh natural flavour. ",
      price: "$9.99",
      image: "/Products images/flavored-tea.jpg",
    },
  ]);

  const [teaFlavors] = useState([
    {
      type: "Cinnamon",
      description: "Warm and aromatic spice flavor",
      price: "$7.99",
      image: "/Products images/cinnamon-tea.jpg",
    },
    {
      type: "Earl Grey",
      description: "Citrusy bergamot flavored tea",
      price: "$8.99",
      image: "/Products images/earl-grey-tea.jpg",
    },
    {
      type: "Fruity",
      description: "Sweet and refreshing fruit blend",
      price: "$9.99",
      image: "/Products images/fruity-tea.jpg",
    },
    {
      type: "Ginger",
      description: "Spicy and invigorating ginger flavor",
      price: "$7.99",
      image: "/Products images/ginger-tea.jpg",
    },
    {
      type: "Vanilla",
      description: "Smooth and creamy vanilla taste",
      price: "$8.99",
      image: "/Products images/vanilla-tea.jpg",
    },
  ]);

  const getVisibleTeaTypes = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const index = (teaTypeIndex + i) % teaTypes.length;
      result.push(teaTypes[index]);
    }
    return result;
  };

  const getVisibleTeaFlavors = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const index = (teaFlavorIndex + i) % teaFlavors.length;
      result.push(teaFlavors[index]);
    }
    return result;
  };

  const nextTeaTypes = () => {
    setTeaTypeIndex((prev) => (prev + 1) % teaTypes.length);
    document.querySelectorAll('.tea-type-card').forEach(card => {
      card.classList.remove('slide-right');
      card.classList.add('slide-left');
    });
  };

  const prevTeaTypes = () => {
    setTeaTypeIndex((prev) => (prev === 0 ? teaTypes.length - 1 : prev - 1));
    document.querySelectorAll('.tea-type-card').forEach(card => {
      card.classList.remove('slide-left');
      card.classList.add('slide-right');
    });
  };

  const nextTeaFlavors = () => {
    setTeaFlavorIndex((prev) => (prev + 1) % teaFlavors.length);
    document.querySelectorAll('.tea-flavor-card').forEach(card => {
      card.classList.remove('slide-right');
      card.classList.add('slide-left');
    });
  };

  const prevTeaFlavors = () => {
    setTeaFlavorIndex((prev) => (prev === 0 ? teaFlavors.length - 1 : prev - 1));
    document.querySelectorAll('.tea-flavor-card').forEach(card => {
      card.classList.remove('slide-left');
      card.classList.add('slide-right');
    });
  };

  const ProductCard = ({ product }) => (
    <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
      <div className="h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.type}
          className="object-cover transition-transform hover:scale-150 w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{product.type}</h2>
        <p className="text-gray-600 mb-3">{product.description}</p>
        {product.flavors && (
          <div className="mb-3">
            <h3 className="font-semibold mb-1">Flavors:</h3>
            <ul className="space-y-1">
              {product.flavors.map((flavor, i) => (
                <li key={i} className="text-gray-600">
                  • {flavor}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-xl font-bold text-green-700">{product.price}</p>
      </div>
    </div>
  );

  return (
      <section id="products" className="p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Tea Types</h2>
        <div className="relative">
          <button onClick={prevTeaTypes} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
            <FaChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-12">
            {getVisibleTeaTypes().map((product, index) => (
              <div key={index} className="tea-type-card transform transition-all duration-500 ease-in-out">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button onClick={nextTeaTypes} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Tea Flavors</h2>
        <div className="relative">
          <button onClick={prevTeaFlavors} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
            <FaChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-12">
            {getVisibleTeaFlavors().map((product, index) => (
              <div key={index} className="tea-flavor-card transform transition-all duration-500 ease-in-out">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button onClick={nextTeaFlavors} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideLeft {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideRight {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .slide-left {
    animation: slideLeft 0.5s ease-out;
  }

  .slide-right {
    animation: slideRight 0.5s ease-out;
  }
`;
document.head.appendChild(style);

export default Products;
