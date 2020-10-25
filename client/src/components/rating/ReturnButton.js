import React from "react";
import { useHistory } from "react-router-dom";

const ReturnButton = ({
  ratingForm,
  toggleRatingForm,
  toggleRateProductButton,
}) => {
  let history = useHistory();

  const toggleStuff = () => {
    toggleRatingForm(false);
    toggleRateProductButton(true);
  };

  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={() => (ratingForm ? toggleStuff() : history.goBack())}
    >
      go back <i className="fas fa-backspace"></i>
    </button>
  );
};
export default ReturnButton;
