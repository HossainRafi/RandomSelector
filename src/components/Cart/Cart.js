import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <h5>{props.item.name}</h5>
    </div>
  );
};

export default Cart;
