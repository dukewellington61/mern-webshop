import React from "react";

const openRatingForm = () => {
    document.querySelector("#rating_form").style.display = "block";
    document.querySelector("#rate_product_button").style.display = "none";
}

const RateProductButton = () => (
  <button
    id="write_review_button"
    type="button"
    className="btn btn-success btn-lg"
    onClick={() => openRatingForm()}
  >
    rate product
  </button>
);

export default RateProductButton;
