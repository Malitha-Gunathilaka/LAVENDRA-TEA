import React from 'react';

const ProductCard = ({ product }) => (
<div className="overflow-hidden bg-black border border-green-600 rounded-lg">
    <div className="overflow-hidden aspect-square">
  <img
    src={product.image}
    alt={product.type}
    className="object-cover w-full h-full transition-transform hover:scale-150"
  />
</div>
    <div className="p-4">
    <h3 className="text-green-500">{product.type}</h3>
      <p className="mt-2 mb-2 text-white">{product.description}</p>
      {product.flavors && (
        <div className="mb-3">
          <h3 className="mb-1 font-semibold">Flavors:</h3>
          <ul className="space-y-1">
            {product.flavors.map((flavor, i) => (
              <li key={i} className="text-gray-300">
                • {flavor}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-xl font-bold text-green-400">{product.price}</p>
    </div>
  </div>
);

export default ProductCard;