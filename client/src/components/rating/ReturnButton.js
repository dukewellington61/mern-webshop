import React from "react";

const ReturnButton = ({ ratingForm, toggleRatingForm }) => (
  <button
    type="button"
    className="btn btn-light"
    onClick={() => {
      if (ratingForm) toggleRatingForm(false);
    }}
  >
    go back <i className="fas fa-backspace"></i>
  </button>
);

export default ReturnButton;
