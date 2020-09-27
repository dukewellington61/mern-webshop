import React, { Fragment } from "react";
import StarRating from "./StarRating";
import { starCount } from "../../utils/ratingStatistics";
import { starPercentage } from "../../utils/ratingStatistics";

const RatingStatistics = ({ product }) => {
  return (
    <Fragment>
      <div className="ratings_statistics_row row">
        <div className="side">
          <StarRating rating={5} statistics={true} />
        </div>
        <div className="middle">
          <div className="bar-container">
            <div
              className="bar bar-5"
              style={{
                width: `${starPercentage(5, product)}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>{`(${starCount(product, 5)})`}</div>
        </div>
        <div className="side">
          <StarRating rating={4} statistics={true} />
        </div>
        <div className="middle">
          <div className="bar-container">
            <div
              className="bar bar-4"
              style={{
                width: `${starPercentage(4, product)}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>{`(${starCount(product, 4)})`}</div>
        </div>
        <div className="side">
          <StarRating rating={3} statistics={true} />
        </div>
        <div className="middle">
          <div className="bar-container">
            <div
              className="bar bar-3"
              style={{
                width: `${starPercentage(3, product)}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>{`(${starCount(product, 3)})`}</div>
        </div>
        <div className="side">
          <StarRating rating={2} statistics={true} />
        </div>
        <div className="middle">
          <div className="bar-container">
            <div
              className="bar bar-2"
              style={{
                width: `${starPercentage(2, product)}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>{`(${starCount(product, 2)})`}</div>
        </div>
        <div className="side">
          <StarRating rating={1} statistics={true} />
        </div>
        <div className="middle">
          <div className="bar-container">
            <div
              className="bar bar-1"
              style={{
                width: `${starPercentage(1, product)}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="side right">
          <div>{`(${starCount(product, 1)})`}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default RatingStatistics;
