import React from 'react';

const ProductCard = ({ product }) => {
  const hasDetails = product.ingredients && product.brewingInstructions;
  
  return (
    <div className={`flex flex-col w-[324px] overflow-hidden bg-black border border-green-600 rounded-lg ${hasDetails ? 'h-[500px]' : 'h-[400px]'}`}>
      <div className="h-[275px] overflow-hidden">
        <img
          src={product.image}
          alt={product.type}
          className="object-cover w-full h-full transition-transform hover:scale-150"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-bold text-green-500">{product.type}</h3>
        <div className="flex-grow overflow-y-auto">
          <p className="mt-2 text-sm text-white">{product.description}</p>
          {hasDetails ? (
            <>
              <p className="mt-2 text-sm text-white">
                <span className="font-semibold text-green-400">Ingredients: </span>
                {product.ingredients}
              </p>
              <p className="mt-2 text-sm text-white">
                <span className="font-semibold text-green-400">Brewing: </span>
                {product.brewingInstructions}
              </p>
            </>
          ) : (
            <div className="flex-grow mt-2" /> // Spacer for tea types without details
          )}
          {product.flavors && (
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-green-400">Flavors:</h3>
              <ul className="space-y-1">
                {product.flavors.map((flavor, i) => (
                  <li key={i} className="text-sm text-gray-300">• {flavor}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <p className="mt-4 text-xl font-bold text-green-400">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;