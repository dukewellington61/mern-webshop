import React from "react";

const openRatingForm = () => {
  document.querySelector("#rating_form").style.display = "block";
  document.querySelector("#rate_product_button").style.display = "none";
  document.querySelector("#average_stars_in_statistics").style.display = "none";
};

const RateProductButton = () => (
  <button
    id="write_review_button"
    type="button"
    className="btn btn-success btn-lg"
    onClick={() => openRatingForm()}
  >
    rate product <i class="fas fa-angle-right"></i>
  </button>
);

export default RateProductButton;
