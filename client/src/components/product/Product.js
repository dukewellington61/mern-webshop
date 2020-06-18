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
      <div id="product_page_container" className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <ProductImage key={product._id} product={product} />
          </div>
          <div className="col-lg-6 col-md-12">
            <ProductFeatures key={product._id} product={product} />
            <RevDescLinks />

            <div id="ratings" className="row">
              <div id="review_col" className="col-6">
                {product.reviews.map((review) => (
                  <Ratings key={review._id} review={review} />
                ))}
              </div>
              <div id="button_col" className="col-6">
                <button
                  id="write_review_button"
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={() => console.log("yeah")}
                >
                  rate product
                </button>
              </div>
            </div>

            <div id="description">
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
