import React from "react";
import { Link } from "react-router-dom";

const ProductItems = ({
  product: { _id, name, description, image_url, colour, price },
}) => (
  <div className="card col-4" style={{ width: "18rem" }}>
    <Link className="product_link" to={`/products/${_id}`}>
      <img className="card-img-top" src={image_url} alt="test" />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="price">{price}</li>
      <li className="colour">{colour}</li>
    </ul>
  </div>
);

export default ProductItems;
