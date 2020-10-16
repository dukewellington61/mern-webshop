import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import Spinner from "../layout/Spinner";

import { getProducts } from "../../actions/product";

const Products = ({ getProducts, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products.length === 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="products_container" className="container">
        <div className="row">
          {[].concat(...new Array(5).fill(products)).map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
