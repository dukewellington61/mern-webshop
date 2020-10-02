import React from "react";
import Moment from "react-moment";
import StarRating from "./StarRating";

const RatingsItem = ({ review: { user_name, review, rating, created_at } }) => {
  console.log(review);
  return (
    <div id="rating_item" className="col-xl-6 col-lg-12">
      <div id="review_card" className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {user_name}&nbsp;&nbsp;
            <Moment format="YYYY/MM/DD">{created_at}</Moment>
          </li>
          <li className="list-group-item">{review}</li>
          <li className="list-group-item">
            <StarRating key="star_rating" rating={rating} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RatingsItem;
