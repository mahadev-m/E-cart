import { ShopContext } from "../context/shopContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const contextData = useContext(ShopContext);

  return (
    <div className="w-full lg:flex lg:flex-wrap lg:justify-around block">
      <div className="mt-24 mb-8 w-full">
        <h1 className="text-center text-4xl text-gray-600 p-2 border-2 mt-20 uppercase">
          Products
        </h1>
      </div>
      {contextData ? (
        contextData.products.map((product, index) => (
          <div
            key={index}
            className="lg:w-96 w-3/4 m-auto mb-6 border-2 lg:m-4  text-center  transition border-gray-100 overflow-hidden shadow-2xl hover:shadow-lg"
          >
            <Link to="/des">
              <img
                className="block object-cover max-w-full"
                src={product.image.sourceUrl}
                alt="Product"
              />
            </Link>
            <h1 className="uppercase text-xl cursor-pointer p-2 hover:text-black-500">
              {product.name}
            </h1>
            <p className="text-black-500 p-2">
              Regular Price: <del>{product.regularPrice}</del>
            </p>
            <p className="text-black-500 p-2">Offer Price: {product.price}</p>

            {!contextData.store.find((item) => item.id === product.id)
              ?.quantity ?? 0 ? (
              <button
                className="text-gray-200 lg:p-2 w-full md:py-5 text-xl mb-1 bg-gray-800 hover:shadow-xl"
                onClick={() => {
                  contextData.addProductToCart(product);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex justify-between pb-4">
                <button
                  className="bg-gray-800 text-white text-2xl md:py-4 md:px-6 lg:px-5 lg:py-2 m-auto rounded-lg"
                  onClick={() => {
                    contextData.Decrement(product);
                  }}
                >
                  -
                </button>
                <span className="m-auto px-6 bg-gray-50">
                  {contextData.store.map((item) =>
                    item.id === product.id ? item.quantity : null
                  )}
                </span>
                <button
                  className="bg-gray-800 text-white text-2xl md:py-4 md:px-6 lg:px-4 lg:py-2 m-auto rounded-lg"
                  onClick={() => {
                    contextData.addProductToCart(product);
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
