import React, { Fragment, useState, useRef } from "react";
import RatingsItem from "./RatingsItem";

const scrollToRef = (ref) => {
  setTimeout(() => window.scrollTo(0, ref.current.offsetTop, 500));
};

const UserRatings = ({ product }) => {
  const [currentNumberOfReviews, setCurrentNumberOfReviews] = useState(2);

  const renderReviews = product.reviews.slice(0, currentNumberOfReviews);
  const numberOfReviews = product.reviews.length;

  const myRef = useRef(null);

  const renderMoreReviews = () =>
    setCurrentNumberOfReviews(currentNumberOfReviews + 2);

  const executeScroll = () => scrollToRef(myRef);

  const hideButton = () => {
    console.log(currentNumberOfReviews);
    console.log(numberOfReviews);
    currentNumberOfReviews >= numberOfReviews
      ? (document.querySelector("#more_button").style.visibility = "hidden")
      : (document.querySelector("#more_button").style.visibility = "visible");
  };

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
            executeScroll();
            hideButton();
          }}
        >
          see more <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default UserRatings;
