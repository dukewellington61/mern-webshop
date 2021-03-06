import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeLineItem } from "../../actions/lineItem.js";

const RemoveLineItemSecurityQuery = ({
  line_item,
  cart_id,
  removeLineItem,
  setRenderSecurityQuery,
}) => {
  const handleClick = (line_item_id, cart_id) =>
    removeLineItem({ lineItem_id: line_item_id, cart_id });

  return (
    <div id="security_query_container">
      <div id="security_query">
        <div id="security_query_text">
          {" "}
          Are you sure that you want to remove {line_item.name} from your
          shopping cart?
        </div>{" "}
        <div id="security_query_buttons">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => handleClick(line_item._id, cart_id)}
          >
            Yes
          </button>{" "}
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setRenderSecurityQuery(false)}
          >
            No{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

RemoveLineItemSecurityQuery.propTypes = {
  removeLineItem: PropTypes.func.isRequired,
};

export default connect(null, { removeLineItem })(RemoveLineItemSecurityQuery);
