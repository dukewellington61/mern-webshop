import React from "react";

const Ratings = ({ review: { user_name, review, rating } }) => (
  <div>
    <div id="review_card" className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{user_name}</li>
        <li className="list-group-item">{review}</li>
      </ul>
    </div>
  </div>
);

export default Ratings;
