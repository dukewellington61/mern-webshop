import React from "react";

const ProductImage = ({ product: { image_url } }) => (
  <img src={image_url} alt="test" style={{ width: "100%" }} />
);

export default ProductImage;
