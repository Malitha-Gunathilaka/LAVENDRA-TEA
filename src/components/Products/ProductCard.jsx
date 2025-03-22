import React from 'react';

const ProductCard = ({ product }) => (
  <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
    <div className="h-80 overflow-hidden">
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

export default ProductCard;