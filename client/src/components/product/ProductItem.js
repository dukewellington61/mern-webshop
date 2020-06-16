import React from "react";

const ProductItem = ({ product: { name, image_url, colour, price } }) => (
  <div className="container" style={{ marginTop: "100px" }}>
    <div className="row">
      <img className="col-6" src={image_url} alt="test" />
      <div className="col-6">
        <h3>{name}</h3>
        <p>{colour}</p>
        <p>{price} Euro</p>
      </div>
    </div>
  </div>
);

export default ProductItem;
