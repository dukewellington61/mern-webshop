import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeLineItem } from "../../actions/lineItem.js";

const RemoveLineItem = ({ line_item, cart, removeLineItem }) => {
  const handleClick = (e) => {
    removeLineItem({ lineItem_id: line_item._id, cart_id: cart._id });
  };

  return (
    <div id="delete_line_icon" onClick={handleClick}>
      <i class="fas fa-times"></i>
    </div>
  );
};

RemoveLineItem.propTypes = {};

export default connect(null, { removeLineItem })(RemoveLineItem);
