import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="">
      <div className="card-container">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      <div className="cart-container">Selected Items</div>
    </div>
  );
};

export default Shop;