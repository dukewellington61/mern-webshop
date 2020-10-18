import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import LoaderSkeletonProducts from "../layout/LoaderSkeletonProducts.js";

import { getProducts } from "../../actions/product";

const Products = ({ getProducts, products, loading }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Fragment>
      <div id="products_container" className="container">
        <div className="row">
          {[...Array(30)].map((el, i, arr) => (
            <LoaderSkeletonProducts key={i} />
          ))}
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div id="products_container" className="container">
        <div className="row">
          {[].concat(...new Array(5).fill(products)).map((product, i, arr) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { getProducts })(Products);
