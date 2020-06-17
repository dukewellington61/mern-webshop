import React from "react";

const switchDescriptionToRating = () => {
  document.querySelector(".ratings").style.display = "block";
  document.querySelector(".description").style.display = "none";
};

const switchRatingToDescription = () => {
  document.querySelector(".ratings").style.display = "none";
  document.querySelector(".description").style.display = "block";
};

const RevDescLinks = () => (
  <div>
    <button
      type="button"
      class="btn btn-primary"
      onClick={() => switchRatingToDescription()}
    >
      Description
    </button>
    <button
      type="button"
      class="btn btn-primary"
      style={{ marginLeft: "20px" }}
      onClick={() => switchDescriptionToRating()}
    >
      Ratings
    </button>
  </div>
);

export default RevDescLinks;
