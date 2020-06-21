import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReview } from "../../actions/product";

const RatingForm = ({ user, product, createReview }) => {
  const [formData, setFormData] = useState({
    review: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createReview(formData, product._id);
        setFormData({ review: "" });
      }}
    >
      <div id="review_card" className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>placeholder</div>
          </li>
          <li className="list-group-item">
            <textarea
              type="text"
              name="review"
              placeholder="enter a product review"
              onChange={(e) => onChange(e)}
            ></textarea>
          </li>
          <li>
            <input type="submit" className="btn btn-dark my-1" value="Submit" />
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
