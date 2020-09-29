import React from "react";

const RateProductButton = ({ toggleRatingForm, toggleRateProductButton }) => (
  <button
    id="write_review_button"
    type="button"
    className="btn btn-warning btn-lg"
    onClick={() => {
      toggleRatingForm(true);
      toggleRateProductButton();
    }}
  >
    rate product <i className="fas fa-angle-right"></i>
  </button>
);

export default RateProductButton;
