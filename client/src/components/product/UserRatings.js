import React, { Fragment, useState, useRef, useEffect } from "react";
import RatingsItem from "./RatingsItem";

const scrollToRef = (ref) => {
  setTimeout(() => window.scrollTo(0, ref.current.offsetTop), 100);
};

const UserRatings = ({ product }) => {
  const [currentNumberOfReviews, setCurrentNumberOfReviews] = useState(2);

  useEffect(() => {
    hideButton();
  }, [currentNumberOfReviews, product.reviews]);

  const myRef = useRef(null);

  const scrollToButton = () => scrollToRef(myRef);

  const renderReviews = product.reviews.slice(0, currentNumberOfReviews);
  const numberOfReviews = product.reviews.length;

  const renderMoreReviews = () =>
    setCurrentNumberOfReviews(currentNumberOfReviews + 2);

  const hideButton = () =>
    currentNumberOfReviews >= numberOfReviews
      ? (document.querySelector("#more_button").style.visibility = "hidden")
      : (document.querySelector("#more_button").style.visibility = "visible");

  // set number of reviews on display back to two when user hits 'Description' button
  const descriptionButton = document.querySelector("#description_button");

  if (descriptionButton)
    descriptionButton.addEventListener("click", () =>
      setCurrentNumberOfReviews(2)
    );

  // scrolls to 'see more' button when user hits 'Ratings' button (so the reviews are within the viewport)
  const ratingsButton = document.querySelector("#ratings_button");

  if (ratingsButton) ratingsButton.addEventListener("click", scrollToButton);

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
          ref={myRef}
          onClick={() => {
            renderMoreReviews();
            scrollToButton();
          }}
        >
          see more <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default UserRatings;
