import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Cart = ({ line_items, products }) => {
  const productIds = line_items.map((line_item) => line_item.product_id);

  const productsInCart = products.filter(
    (product) => productIds.indexOf(product._id) === -1
  );

  return (
    <div>
      {productsInCart.map((productInCart) => (
        <div>{productInCart.name}</div>
      ))}
    </div>
  );
};

Cart.propTypes = {};

const mapStateToProps = (state) => ({
  line_items: state.cart.cart.line_items,
  products: state.product.products,
});

export default connect(mapStateToProps, null)(Cart);
