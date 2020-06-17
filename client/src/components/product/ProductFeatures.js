import React from "react";

const ProductFeatures = ({ product: { name, colour, price } }) => (
  <div>
    <p>{name}</p>
    <p>{colour}</p>
    <p>{price}</p>
  </div>
);
export default ProductFeatures;
