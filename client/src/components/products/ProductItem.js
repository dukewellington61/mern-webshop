import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import StarRating from "../rating/StarRating";
import { totalNumberOfRatings } from "../../utils/ratingStatistics";
import { averageStars } from "../../utils/ratingStatistics";

const ProductItem = ({ product }) => (
  <div id="products" className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <Link to={`/products/${product._id}`}>
      <ProductImage product={product} />
    </Link>
    <div>
      {" "}
      <div id="average_stars">
        <StarRating rating={averageStars(product)} statistics={true} />
        {`(${totalNumberOfRatings(product)})`}
      </div>
    </div>
    <b>{product.name}</b>
    <p>{product.colour}</p>
    <p>{`${(Math.round(product.price * 100) / 100).toFixed(2)} €`}</p>
  </div>
);

export default ProductItem;
