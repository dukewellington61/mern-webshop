import React from "react";
import { useHistory } from "react-router-dom";

const ReturnButton = ({ ratingForm, toggleRatingForm }) => {
  let history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={() => (ratingForm ? toggleRatingForm(false) : history.goBack())}
    >
      go back <i className="fas fa-backspace"></i>
    </button>
  );
};
export default ReturnButton;
