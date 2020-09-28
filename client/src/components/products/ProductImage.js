import React from "react";

const productImage = ({ product }) => {
  return <img id="product_images" src={product.image_url} alt={product.name} />;
};

export default productImage;
