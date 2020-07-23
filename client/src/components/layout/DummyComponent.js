import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductItems from "../products/ProductItems";
import Spinner from "../layout/Spinner";

import { getProducts } from "../../actions/product";

const Products = ({ getProducts, product: { products }, cart: { cart } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      <div style={{ position: "absolute", top: "500px", color: "black" }}>
        {cart.line_items[0].name}
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
