import React from "react";
import './Product.css'
const Product = (props) => {
  const { image, name, price } = props.data;
  return (
    <div className="pcard">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
    </div>
  );
};

export default Product;
