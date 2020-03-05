import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Context; .Provide && .Consumer
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  console.log("App:", products);
  // STEP 1: Add item functionality
  const addItem = item => {
    // add the given item to the cart
    setCart(prevItems => [...prevItems, item]);
  };
  console.log("CART:", cart);

  return (
    // <ProductContext.Provider value={[cart, setCart]}>
    // STEP 3: Providing data with ProductContext; refactoring
    <ProductContext.Provider value={{ products, addItem }}>
      {/* STEP 6: Providing data with CartContext */}
      <CartContext.Provider value={cart}>
        <div className="App">
          {/* <Navigation cart={cart} /> */}
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            {/* <Products products={products} addItem={addItem} /> */}
            <Products />
          </Route>

          <Route path="/cart">
            {/* <ShoppingCart cart={cart} /> */}
            <ShoppingCart />
          </Route>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
