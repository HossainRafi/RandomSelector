import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    console.log(product);
  };
  return (
    <div className="main-container">
      <div className="card-container">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart-container">Selected Items</div>
    </div>
  );
};

export default Shop;
