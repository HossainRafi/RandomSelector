import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
  return (
    <div className="cart">
          <h4>Selected Items:</h4>
          <h5>{cart.length}</h5>
      <div>
        <button className="items-btn">Choose One</button>
        <button className="items-btn">Remove All</button>
      </div>
    </div>
  );
};

export default Cart;
