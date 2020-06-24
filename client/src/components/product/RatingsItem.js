import React from "react";
import Moment from "react-moment";
import StarRating from "./StarRating";

const RatingsItem = ({ review: { user_name, review, rating, date } }) => (
  <div id="review_card" className="card">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        {user_name}&nbsp;&nbsp;
        <Moment format="YYYY/MM/DD">{date}</Moment>
      </li>
      <li className="list-group-item">{review}</li>
      <li className="list-group-item">
        <StarRating key="star_rating" rating={rating} />
      </li>
    </ul>
  </div>
);

export default RatingsItem;
