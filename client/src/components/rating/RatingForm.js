import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReview } from "../../actions/product";
import StarRatingForm from "./StarRatingForm";
import ReturnButton from "./ReturnButton";

const RatingForm = ({
  product,
  createReview,
  toggleRatingForm,
  toggleRateProductButton,
}) => {
  const [reviewText, setReviewText] = useState({ review: "" });
  const [starRatingValue, setStarRatingValue] = useState({ rating: null });

  const handleStarRatingValue = (e) => setStarRatingValue({ rating: e });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createReview({ ...reviewText, ...starRatingValue }, product._id);
        setReviewText({
          review: "",
        });
        toggleRatingForm(false);
      }}
    >
      <div id="review_card" className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>
              <StarRatingForm
                key="star_rating"
                getValue={handleStarRatingValue}
              />
            </div>
          </li>
          <li className="list-group-item">
            <textarea
              name="review"
              cols="30"
              rows="5"
              placeholder="enter a product review"
              value={reviewText.review}
              onChange={(e) =>
                setReviewText({
                  ...reviewText,
                  [e.target.name]: e.target.value,
                })
              }
            ></textarea>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyleType: "none",
            }}
          >
            <button type="submit" className="btn btn-primary">
              Submit <i className="fas fa-angle-right"></i>
            </button>
            <ReturnButton
              ratingForm={true}
              toggleRatingForm={toggleRatingForm}
              toggleRateProductButton={toggleRateProductButton}
            />
          </li>
        </ul>
      </div>
    </form>
  );
};

RatingForm.propTypes = {
  createReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth,
  product: state.product.product,
});

export default connect(mapStateToProps, { createReview })(RatingForm);
