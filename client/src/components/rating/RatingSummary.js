import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingsItem from "./RatingsItem";
import Spinner from "../layout/Spinner";
import LineItemImage from "../cart/LineItemImage";

// denormalization had been implemented to avoid costly db queries and intense looping through arrays
// so the user collection in mongo db has an embedded reviews array (so does the product collection --> redundancies!!)

const RatingSummary = ({ user }) => {
  return user === null ? (
    <Spinner />
  ) : (
    <div id="rating_summary_container" className="container">
      {user.reviews.map((review) => {
        // reusing @components/cart/LineItemImage.js the props passed to this component have to be set in a way the component can work with them
        // hence the following three lines of spaghetti code...
        const line_item = {};
        line_item.image_url = review.product_image_url;
        review.user_name = user.firstname;
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link to={`/products/${review.product_id}`}>
              <LineItemImage key={review.product_id} line_item={line_item} />
            </Link>
            <div>{review.product_name}</div>
            <RatingsItem key={review._id} review={review} />
          </div>
        );
      })}
    </div>
  );
};

RatingSummary.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(RatingSummary);
