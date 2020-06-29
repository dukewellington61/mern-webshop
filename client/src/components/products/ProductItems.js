import React from "react";
import { Link } from "react-router-dom";
import ProductImages from "./ProductImages";
import StarRating from "../product/StarRating";
import { totalNumberOfRatings } from "../../utils/ratingStatistics";
import { averageStars } from "../../utils/ratingStatistics";

const ProductItems = ({ product }) => (
  <div id="products" className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <Link to={`/products/${product._id}`}>
      <ProductImages image_url={product.image_url} />
    </Link>
    <p>
      {" "}
      <div id="average_stars">
        <StarRating rating={averageStars(product)} statistics={true} />
        {`(${totalNumberOfRatings(product)})`}
      </div>
    </p>
    <b>{product.name}</b>
    <p>{product.colour}</p>
    <p>{`${(Math.round(product.price * 100) / 100).toFixed(2)} €`}</p>
  </div>
);

export default ProductItems;
