import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLineItem } from "../../actions/lineItem";

const AddToShoppingCartBtn = ({ product, cart, addLineItem }) => {
  const handleClick = (e) => {
    e.preventDefault();
    addLineItem({
      cart_id: cart._id,
      product_id: product._id,
      name: product.name,
      image_url: product.image_url,
      colour: product.colour,
      price: product.price,
      addToShoppingCartBtn: true,
    });
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
  cart: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  cart: state.cart,
});

export default connect(mapStateToProps, { addLineItem })(AddToShoppingCartBtn);
