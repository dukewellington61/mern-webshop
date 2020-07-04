import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProductImage from "./ProductImage";
import ProductFeatures from "./ProductFeatures";
import RevDescLinks from "./RevDescLinks";
import Description from "./Description";
import RateProductButton from "./RateProductButton";
import { getProduct } from "../../actions/product";
import RatingForm from "./RatingForm";
import RatingStatistics from "./RatingStatistics";
import { totalNumberOfRatings } from "../../utils/ratingStatistics";
import { averageStars } from "../../utils/ratingStatistics";
import StarRating from "./StarRating";
import UserRatings from "./UserRatings";
import AddToShoppingCartBtn from "./AddToShoppingCartBtn";
import ReturnButton from "./ReturnButton";
import { Link } from "react-router-dom";

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
            <div style={{ display: "flex" }}>
              <ProductFeatures key={product._id} product={product} />
              <div id="return_to_products_button">
                <Link to="/products">
                  <ReturnButton returnToProductsPage={true} />
                </Link>
              </div>
            </div>
            <div id="add_to_shopping_cart_button">
              <AddToShoppingCartBtn />
            </div>
          </div>
        </div>
        <div id="rev_desc_links">
          <RevDescLinks key="rev_desc_links" />
        </div>

        <div id="ratings" className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div id="rating_statistics">
                <RatingStatistics product={product} />
              </div>
            </div>

            <div id="rating_statistics_right" className="col-xl-6 col-lg-12">
              <div id="average_stars_in_statistics">
                <StarRating rating={averageStars(product)} />
                {`(${totalNumberOfRatings(product)})`}
              </div>

              <div id="rate_product_button">
                {isAuthenticated && checkIfStillToRate() && (
                  <RateProductButton key="rate_product_button" />
                )}
              </div>

              <div id="rating_form">
                {isAuthenticated && checkIfStillToRate() && (
                  <RatingForm key="rating_form" />
                )}
              </div>
            </div>
          </div>
          <UserRatings product={product} />
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
