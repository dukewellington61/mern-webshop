import React, { Fragment, useRef } from "react";
import { FaStar } from "react-icons/fa";

const RatingStatistics = ({ product }) => {
  const totalNumberOfRatings = product.reviews.length;

  const starCount = (numberOfStars) =>
    product.reviews.filter((review) => review.rating === numberOfStars).length;

  const starPercentage = (numberOfStars) =>
    (starCount(numberOfStars) * 100) / totalNumberOfRatings;

  return (
    <div className="row">
      <div className="side">
        <div>5 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div
            className="bar-5"
            style={{ width: `${starPercentage(5)}%` }}
          ></div>
        </div>
      </div>
      <div className="side right">
        <div>{starCount(5)}</div>
      </div>
      <div className="side">
        <div>4 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div
            className="bar-4"
            style={{ width: `${starPercentage(4)}%` }}
          ></div>
        </div>
      </div>
      <div className="side right">
        <div>{starCount(4)}</div>
      </div>
      <div className="side">
        <div>3 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div
            className="bar-3"
            style={{ width: `${starPercentage(3)}%` }}
          ></div>
        </div>
      </div>
      <div className="side right">
        <div>{starCount(3)}</div>
      </div>
      <div className="side">
        <div>2 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div
            className="bar-2"
            style={{ width: `${starPercentage(2)}%` }}
          ></div>
        </div>
      </div>
      <div className="side right">
        <div>{starCount(2)}</div>
      </div>
      <div className="side">
        <div>1 star</div>
      </div>
      <div className="middle">
        <div className="bar-container">
          <div
            className="bar-1"
            style={{ width: `${starPercentage(1)}%` }}
          ></div>
        </div>
      </div>
      <div className="side right">
        <div>{starCount(1)}</div>
      </div>
    </div>
  );
};

export default RatingStatistics;
