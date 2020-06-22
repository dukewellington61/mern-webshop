import React from "react";
import { FaStar } from "react-icons/fa";

const starRating = (props) => (
  <div>
    {[...Array(5)].map((star, i) => {
      const starNumber = i + 1;
      return (
        <FaStar
          className="star"
          color={starNumber <= props.rating ? "#ffc107" : "#e4e5e9"}
          size={25}
        />
      );
    })}
  </div>
);

export default starRating;
