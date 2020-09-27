import React from "react";

const RateProductButton = ({ toggleRatingForm }) => (
  <button
    id="write_review_button"
    type="button"
    className="btn btn-warning btn-lg"
    onClick={() => toggleRatingForm(true)}
  >
    rate product <i className="fas fa-angle-right"></i>
  </button>
);

export default RateProductButton;
