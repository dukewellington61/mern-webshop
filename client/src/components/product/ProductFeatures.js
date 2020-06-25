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
    <p>{product.colour}</p>
    <p>{product.price}</p>
  </div>
);
export default ProductFeatures;
