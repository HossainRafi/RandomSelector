import React from "react";
import "./Product.css";

const Product = (props) => {
  const { image, name, price } = props.data;
  return (
    <div className="card-container">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <h5>Price: {price}</h5>
        <button className="cart-btn">
          <h6>
            Add to Cart
            <span className="icon">
              <i class="las la-shopping-cart"></i>
            </span>
          </h6>
        </button>
      </div>
    </div>
  );
};

export default Product;
