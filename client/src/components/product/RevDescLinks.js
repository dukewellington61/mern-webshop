import React, { Fragment } from "react";

const RevDescLinks = ({ switchRatingToDescription, scrollToRef }) => (
  <Fragment>
    <button
      id="description_button"
      type="button"
      className="btn btn-primary"
      onClick={() => switchRatingToDescription("description")}
    >
      Description
    </button>
    <button
      id="ratings_button"
      type="button"
      className="btn btn-primary"
      style={{ marginLeft: "20px" }}
      onClick={() => {
        switchRatingToDescription("rating");
        scrollToRef(document.querySelector("#more_button"));
      }}
    >
      Ratings
    </button>
  </Fragment>
);

export default RevDescLinks;
