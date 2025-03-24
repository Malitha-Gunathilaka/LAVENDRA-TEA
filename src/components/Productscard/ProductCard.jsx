import React from 'react';

const ProductCard = ({ product }) => (
  <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
    <div className="overflow-hidden aspect-square">
  <img
    src={product.image}
    alt={product.type}
    className="object-cover w-full h-full transition-transform hover:scale-150"
  />
</div>
    <div className="p-4">
      <h2 className="mb-2 text-2xl font-bold">{product.type}</h2>
      <p className="mb-3 text-gray-600">{product.description}</p>
      {product.flavors && (
        <div className="mb-3">
          <h3 className="mb-1 font-semibold">Flavors:</h3>
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