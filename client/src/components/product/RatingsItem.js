import React from "react";
import StarRating from "./StarRating";

const RatingsItem = ({ review: { user_name, review, rating } }) => (
  <div>
    <div id="review_card" className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{user_name}</li>
        <li className="list-group-item">{review}</li>
        <li className="list-group-item">
          <StarRating rating={rating} />
        </li>
      </ul>
    </div>
  </div>
);

export default RatingsItem;
