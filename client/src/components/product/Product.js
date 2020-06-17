import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProductImage from "./ProductImage";
import ProductFeatures from "./ProductFeatures";
import RevDescLinks from "./RevDescLinks";
import Ratings from "./Ratings";
import Description from "./Description";

import { getProduct } from "../../actions/product";

const Product = ({ getProduct, product: { product }, match }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct]);

  return !product ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <ProductImage key={product._id} product={product} />
          </div>
          <div className="col-lg-6 col-md-12">
            <ProductFeatures key={product._id} product={product} />
            <RevDescLinks />
            <div className="ratings">
              {product.reviews.map((review) => (
                <Ratings key={review._id} review={review} />
              ))}
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => console.log("yeah")}
                  >rate product
                </button>
            </div>
            <div className="description">
              <Description product={product} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProduct })(Product);
