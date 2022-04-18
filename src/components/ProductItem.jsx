import React from "react";

export const ProductItem = ({ item, addToCart }) => {
  return (
    <div className="product-item" onClick={()=>addToCart(item)}>
      <img
        className="product-img"
        src={require("../assets/products/" + item.image)}
        alt=""
      />
      <p className="product-name">{item.name}</p>
    </div>
  );
};
