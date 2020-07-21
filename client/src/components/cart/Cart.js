import React, { Fragment, useEffect } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProducts } from "../../actions/product";

const Cart = ({ line_items, products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  const productIds = line_items.map((line_item) => line_item.product_id);

  const productsInCart = products.filter(
    (product) => productIds.indexOf(product._id) !== -1
  );

  return (
    <Fragment>
      <div style={{ position: "absolute", top: "500px", color: "white" }}>
        {productsInCart.map((productInCart) => (
          <div key={productInCart._id}>{productInCart.name}</div>
        ))}
      </div>
    </Fragment>
  );
};

// Cart.propTypes = {};

const mapStateToProps = (state) => ({
  line_items: state.cart.cart.line_items,
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Cart);
