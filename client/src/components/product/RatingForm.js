import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReview } from "../../actions/product";

const RatingForm = ({ user, createReview }) => {
  const [formData, setFormData] = useState({
    description: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        console.log("onSubmit");
        e.preventDefault();
        createReview(formData, user._id);
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
              name="description"
              placeholder="enter a product review"
              onChange={(e) => onChange(e)}
            ></textarea>
          </li>
          <input type="hidden" name="user_id" value="user_id"></input>
          <input type="hidden" name="user_name" value="user_first_name"></input>
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

export default connect(null, { createReview })(RatingForm);
