import React from "react";

const productImages = ({ product }) => {
  return <img id="product_images" src={product.image_url} alt={product.name} />;
};

export default productImages;
