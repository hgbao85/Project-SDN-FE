// ProductCard.js
import React from "react";
import "./productCardCss.css";
const ProductCard = ({ product, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`product-card ${isSelected ? "selected" : ""}`}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} VND
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
