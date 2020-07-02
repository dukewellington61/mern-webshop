import React, { Fragment } from "react";

const switchDescriptionToRating = () => {
  document.querySelector("#ratings").style.display = "flex";
  document.querySelector("#description").style.display = "none";
};

const switchRatingToDescription = () => {
  document.querySelector("#ratings").style.display = "none";
  document.querySelector("#description").style.display = "flex";
};

const RevDescLinks = () => (
  <Fragment>
    <button
      id="description_button"
      type="button"
      className="btn btn-primary"
      onClick={() => switchRatingToDescription()}
    >
      Description
    </button>
    <button
      id="ratings_button"
      type="button"
      className="btn btn-primary"
      style={{ marginLeft: "20px" }}
      onClick={() => switchDescriptionToRating()}
    >
      Ratings
    </button>
  </Fragment>
);

export default RevDescLinks;
