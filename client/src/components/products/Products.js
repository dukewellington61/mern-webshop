import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductItems from "./ProductItems";
import Spinner from "../layout/Spinner";

import { getProducts } from "../../actions/product";

const Products = ({ getProducts, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products.length === 0 ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {products.map((product) => (
            <ProductItems key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);
