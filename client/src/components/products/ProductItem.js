import React from "react";

const ProductItem = ({
  name,
  description,
  image_url,
  colour,
  price,
  reviews,
}) => (
  <div className="card" style="width: 18rem;">
    <img className="card-img-top" src={image_url} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="price">{price}</li>
      <li className="colour">{colour}</li>
    </ul>
  </div>
);

export default ProductItem;
