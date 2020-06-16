import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProductItem from "./ProductItem";
import ReviewItem from "./ReviewItem";
import { getProduct } from "../../actions/product";

const Product = ({ getProduct, product: { product }, match }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct]);

  return !product ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <div className="row">
          <ProductItem className="col-6" key={product._id} product={product} />
          <div className="reviews col-6">
            {product.reviews.map((review) => (
              <ReviewItem key={review._id} review={review} />
            ))}
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
