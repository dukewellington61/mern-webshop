import React from "react";
import StarRating from "./StarRating";

import { totalNumberOfRatings } from "../../utils/ratingStatistics";
import { averageStars } from "../../utils/ratingStatistics";

const ProductFeatures = ({ product }) => (
  <div>
    <div id="average_stars">
      <StarRating rating={averageStars(product)} statistics={true} />
      {`(${totalNumberOfRatings(product)})`}
    </div>
    <p>{product.name}</p>
    <p>{product.tag_line}</p>
    <p>{product.colour}</p>
    <p>{`${(Math.round(product.price * 100) / 100).toFixed(2)} €`}</p>
  </div>
);
export default ProductFeatures;
