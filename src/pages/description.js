import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
// description
const Description = ({ match }) => {
  const contextData = useContext(ShopContext);

  return (
    <div className="mt-20">
      <h1>Product Detail</h1>
      {contextData.products.map((product, index) =>
        parseInt(match.params.id) === product.id ? (
          <div key={index}>
            <div>
              <img src={product.image.sourceUrl} alt="product" />
            </div>
            <div>
              <h1>{product.name}</h1>

              <h1>Description</h1>
              <p>{product.description}</p>
              <p>
                Regular Price: <del>{product.regularPrice}</del>
              </p>
              <p>Offer Price: {product.price}</p>

              <Link
                to="/cart"
                onClick={() => {
                  contextData.addProductToCart(product);
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ) : (
          console.log(match)
        )
      )}
    </div>
  );
};
export default Description;
