import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="main-container">
      <div className="card-container">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <h3 className="text">Selected Items:</h3>
        {cart.map((item) => (
          <Cart item={item} />
        ))}

        <div className="btn-group">
          <button className="items-btn">Choose One</button>
          <button className="items-btn">Remove All</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
