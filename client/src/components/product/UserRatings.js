import React, { Fragment, useState } from "react";
import RatingsItem from "./RatingsItem";

const UserRatings = ({ product }) => {
  const [currentNumberOfReviews, setCurrentNumberOfReviews] = useState(2);

  const renderReviews = product.reviews.slice(0, currentNumberOfReviews);
  const numberOfReviews = product.reviews.length;

  const renderMoreReviews = () =>
    setCurrentNumberOfReviews(currentNumberOfReviews + 2);

  return (
    <Fragment>
      <div className="row">
        {renderReviews.map((review) => (
          <RatingsItem key={review._id} review={review} />
        ))}
      </div>
      <div>
        {currentNumberOfReviews < numberOfReviews && (
          <button
            type="button"
            className="btn btn-secondary mt-1"
            onClick={() => renderMoreReviews()}
          >
            see more <i className="fas fa-angle-right"></i>
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default UserRatings;
