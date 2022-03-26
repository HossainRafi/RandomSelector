import React from "react";
import "./Product.css";

const Product = (props) => {
  const { image, name, price } = props.data;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h3>Price: {price}</h3>
      </div>
      <button className="btn-cart">
        <h3>
          Add to Cart <i className="btn-icon las la-shopping-cart"></i>
        </h3>
      </button>
    </div>
  );
};

export default Product;
