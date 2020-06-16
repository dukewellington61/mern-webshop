import React from "react";

const ReviewItem = ({ review: { user_name, review, rating } }) => (
  <div className="card" style={{ width: "18rem" }}>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{user_name}</li>
      <li className="list-group-item">{review}</li>
    </ul>
  </div>
);

export default ReviewItem;
