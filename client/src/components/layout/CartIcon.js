import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const calculateItemQuantity = (cart) => {
  if (cart.line_items.length > 1) {
    let quantity = cart.line_items.reduce(function (
      previousValue,
      currentValue
    ) {
      return {
        quantity: previousValue.quantity + currentValue.quantity,
      };
    });
    return quantity.quantity;
  } else if (cart.line_items.length === 1) {
    document.querySelector("#cart_navigation_quantity").style.display = "flex";
    return cart.line_items[0].quantity;
  } else {
    document.querySelector("#cart_navigation_quantity").style.display = "none";
  }
};

const CartIcon = ({ cart }) => {
  return (
    <div id="shopping_cart_icon">
      <Link id="shopping_cart_link">
        <i class="fas fa-shopping-cart"></i>
      </Link>
      <span id="cart_navigation_quantity">
        {cart && calculateItemQuantity(cart)}
      </span>
    </div>
  );
};

CartIcon.propTypes = {
  calculateItemQuantity: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, null)(CartIcon);
