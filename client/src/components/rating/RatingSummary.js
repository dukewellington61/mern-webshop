import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import RatingsItem from "./RatingsItem";

const RatingSummary = ({ user }) => {
  console.log(user);
  return (
    <div id="rating_summary_container" className="container">
      {user.reviews.map((review) => (
        <RatingsItem
          key={review._id}
          user_name={user.firstname}
          review={review.review}
          rating={review.rating}
          created_at={review.created_at}
        />
      ))}
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
