import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProductImage from "./ProductImage";
import ProductFeatures from "./ProductFeatures";
import RevDescLinks from "./RevDescLinks";
import RatingsItem from "./RatingsItem";
import Description from "./Description";
import RateProductButton from "./RateProductButton";
import { getProduct } from "../../actions/product";
import RatingForm from "./RatingForm";
import RatingStatistics from "./RatingStatistics";

const Product = ({
  getProduct,
  product: { product },
  user: { user, isAuthenticated },
  match,
}) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct]);

  const checkIfStillToRate = () =>
    product.reviews.filter((review) => review.user_id === user._id).length ===
    0;

  return !product ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="product_page_container" className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <ProductImage
              id="product_image"
              key={product._id}
              product={product}
            />
          </div>
          <div className="col-xl-6 col-lg-12">
            <ProductFeatures key={product._id} product={product} />
          </div>
        </div>
        <div id="rev_desc_links">
          <RevDescLinks key="rev_desc_links" />
        </div>

        <div id="ratings" className="container">
          <div id="review_col" className="row">
            <div id="rating_form">
              {isAuthenticated && checkIfStillToRate() && (
                <RatingForm key="rating_form" />
              )}
            </div>

            <div className="col-xl-6 col-lg-12">
              <div id="rate_product_button">
                {isAuthenticated && checkIfStillToRate() && (
                  <RateProductButton key="rate_product_button" />
                )}
              </div>
              {product.reviews.map((review) => (
                <RatingsItem key={review._id} review={review} />
              ))}
            </div>

            <div className="col-xl-6 col-lg-12">
              {" "}
              <RatingStatistics product={product} />
            </div>
          </div>
        </div>

        <div id="description">
          <Description product={product} />
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
  user: state.auth,
});

export default connect(mapStateToProps, { getProduct })(Product);
