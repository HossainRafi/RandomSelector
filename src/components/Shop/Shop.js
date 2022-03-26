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

  // =========== Select Randomly Function ===========
  const [anyOne, setAnyOne] = useState([]);
  const chooseOne = () => {
    const any = Math.floor(Math.random() * cart.length);
    setAnyOne(cart[any]);
  };

  // ========== Remove All ==========
  const remove = () => {
    setCart([])
  };
  return (
    <div>
      <div className="new-container">
        <img src={anyOne.image} alt="" />
        <div className="product-info">
          <h4 className="product-name">{anyOne.name}</h4>
        </div>
      </div>

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
            <button onClick={chooseOne} className="items-btn">
              Choose One
            </button>
            <button onClick={remove} className="items-btn">Remove All</button>
          </div>
        </div>
      </div>
      <Answer />
    </div>
  );
};

export default Shop;
