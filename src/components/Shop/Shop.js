import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Answer from "./../Answer/Answer";
import "./Shop.css";

const Shop = () => {
  // ========== States ==========
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // ========== Load Data ==========
  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ========== Cart Button Functionality ==========
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <div className="main-container">
        {/* ========== Product Card Section ========== */}
        <div className="card-container">
          {products.map((product) => (
            <Product key={product.id} data={product} addToCart={addToCart} />
          ))}
        </div>

        {/* ========== Product Cart Section ========== */}
        <div className="cart-container">
          <h3 className="text">Selected Items:</h3>
          {cart.map((item) => (
            <Cart item={item} />
          ))}

          {/* ========== Choose & Remove Buttons ========== */}
          <div className="btn-group">
            <button className="items-btn">Choose One</button>
            <button className="items-btn">Remove All</button>
          </div>
        </div>
      </div>
      <Answer />
    </div>
  );
};

export default Shop;
