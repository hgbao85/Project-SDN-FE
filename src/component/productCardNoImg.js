import React from "react";

const ProductCardNoImg = ({ product, isSelected, onClick }) => {
  const cardStyle = {
    border: isSelected ? "2px solid blue" : "1px solid gray",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  };

  const productInfoStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };

  const productNameStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const productPriceStyle = {
    color: "green",
  };

  return (
    <div onClick={onClick} style={cardStyle}>
      <div style={productInfoStyle}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ height: "40px", width: "40px" }}
        />
        <h3 style={productNameStyle}>{product.name}</h3>
        <p style={productPriceStyle}>
          {product.price.toLocaleString("vi-VN")} VND
        </p>
      </div>
    </div>
  );
};

export default ProductCardNoImg;
