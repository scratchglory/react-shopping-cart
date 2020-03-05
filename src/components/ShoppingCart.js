import React, { useContext } from "react";
// STEP 6: providing data with CartContext
import { CartContext } from "../contexts/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const getCartTotal = () => {
    // return props.cart
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  const cart = useContext(CartContext);
  console.log("SHOPPING_CART:", cart);

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <Item key={item.id} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
