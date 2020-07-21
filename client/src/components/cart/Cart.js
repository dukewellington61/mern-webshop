import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Cart = ({ line_items }) => {
  console.log(line_items);
  return (
    <Fragment>
      <div style={{ position: "absolute", top: "500px", color: "black" }}>
        {line_items.map((line_item) => (
          <div key={line_item._id}>{line_item.name}</div>
        ))}
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  line_items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  line_items: state.cart.cart.line_items,
});

export default connect(mapStateToProps, null)(Cart);
