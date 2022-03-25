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
    <div className="d-flex mx-3">
      <div className="d-flex justify-content-between bg-success bg-opacity-10 w-75">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <div className="bg-warning ms-3 w-25">Selected Items</div>
    </div>
  );
};

export default Shop;
