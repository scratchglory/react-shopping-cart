// STEP 4: Consuming data with ProductContext
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

// refactoring, removing every props
const Products = () => {
  // from App.js ProductContext.Provide's value
  const { products, addItem } = useContext(ProductContext);

  console.log("PRODUCTS:", products);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
