import React from "react";

const toggleRatingFormAverageStars = () => {
  document.querySelector("#rating_form").style.display = "none";
  document.querySelector("#average_stars_in_statistics").style.display = "flex";
  document.querySelector("#rate_product_button").style.display = "block";
};

const ReturnButton = (props) => (
  <button
    type="button"
    className="btn btn-light"
    onClick={() => {
      if (props.ratingForm) toggleRatingFormAverageStars();
    }}
  >
    go back <i className="fas fa-backspace"></i>
  </button>
);

export default ReturnButton;
