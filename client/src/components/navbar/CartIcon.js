import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const calculateItemQuantity = (line_items) => {
  if (line_items.length > 1) {
    let quantity = line_items.reduce(function (previousValue, currentValue) {
      return {
        quantity: previousValue.quantity + currentValue.quantity,
      };
    });
    return quantity.quantity;
  } else if (line_items.length === 1) {
    return line_items[0].quantity;
  }
};

const CartIcon = ({ cart }) => {
  return (
    <Link className="nav_items" to="/cart">
      <div
        id="cart_navigation_quantity"
        style={{
          visibility:
            !cart.loading && cart.line_items.length > 0 ? "visible" : "hidden",
        }}
      >
        {!cart.loading && calculateItemQuantity(cart.line_items)}
      </div>

      <i className="fas fa-shopping-cart"></i>
    </Link>
  );
};

CartIcon.propTypes = {
  // calculateItemQuantity: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CartIcon);
