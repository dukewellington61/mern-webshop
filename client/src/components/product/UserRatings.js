import React, { Fragment, useState, useRef, useEffect } from "react";
import RatingsItem from "./RatingsItem";

const UserRatings = ({ product, scrollToRef }) => {
  const [currentNumberOfReviews, setCurrentNumberOfReviews] = useState(2);

  const myRef = useRef(null);

  const renderReviews = product.reviews.slice(0, currentNumberOfReviews);
  const numberOfReviews = product.reviews.length;

  const renderMoreReviews = () =>
    setCurrentNumberOfReviews(currentNumberOfReviews + 2);

  // set number of reviews on display back to two when user hits 'Description' button
  const descriptionButton = document.querySelector("#description_button");

  if (descriptionButton) {
    descriptionButton.addEventListener("click", () =>
      setCurrentNumberOfReviews(2)
    );
  }

  return (
    <Fragment>
      <div className="row">
        {renderReviews.map((review) => (
          <RatingsItem key={review._id} review={review} />
        ))}
      </div>
      <div>
        <button
          id="more_button"
          type="button"
          className="btn btn-secondary mt-1"
          style={{
            visibility:
              currentNumberOfReviews >= numberOfReviews ? "hidden" : "visible",
          }}
          ref={myRef}
          onClick={() => {
            renderMoreReviews();
            scrollToRef(myRef);
          }}
        >
          see more <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default UserRatings;
