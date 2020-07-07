import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLineItem } from "../../actions/lineItem";

const AddToShoppingCartBtn = ({ product, cart, addLineItem }) => {
  const handleClick = (e) => {
    e.preventDefault();
    addLineItem({ cart_id: cart._id, product_id: product._id });
  };

  return (
    <button
      id="add_to_shopping_cart"
      type="button"
      className="btn btn-success btn-lg"
      onClick={(e) => handleClick(e)}
    >
      add to shopping cart &nbsp;&nbsp;
      <i className="fas fa-cart-arrow-down"></i>
    </button>
  );
};

AddToShoppingCartBtn.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { addLineItem })(AddToShoppingCartBtn);
