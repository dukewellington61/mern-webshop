import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductImage from "./ProductImage";
import ProductFeatures from "./ProductFeatures";
import RevDescLinks from "./RevDescLinks";
import Description from "./Description";
import RateProductButton from "../rating/RateProductButton";
import { getProduct } from "../../actions/product";
import RatingForm from "../rating/RatingForm";
import RatingStatistics from "../rating/RatingStatistics";
import { totalNumberOfRatings } from "../../utils/ratingStatistics";
import { averageStars } from "../../utils/ratingStatistics";
import StarRating from "../rating/StarRating";
import UserRatings from "../rating/UserRatings";
import AddToShoppingCartBtn from "./AddToShoppingCartBtn";
import ReturnButton from "../rating/ReturnButton";

const Product = ({
  getProduct,
  product,
  user,
  match,
  loading,
  isAuthenticated,
}) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, []);

  const [renderRatings, setRenderRatings] = useState(false);

  const switchRatingToDescription = (val) =>
    val === "rating" ? setRenderRatings(true) : setRenderRatings(false);

  const [renderRatingForm, setRenderRatingForm] = useState(false);

  const toggleRatingForm = (render) =>
    render ? setRenderRatingForm(true) : setRenderRatingForm(false);

  const [renderRateProductButton, setRenderRateProductButton] = useState(true);

  const toggleRateProductButton = (val) => setRenderRateProductButton(val);

  const checkIfStillToRate = () =>
    product.reviews.filter((review) => review.user_id === user._id).length ===
    0;

  // fn is called when user hits ratings button or hits see more (ratings) button
  const scrollToRef = (ref) => {
    setTimeout(
      () =>
        // ref has attribute current ? fn call comes from @components/product/RevDescLinks.js :
        // fn call comes from @components/product/UserRatings.js
        window.scrollTo({
          top: ref.current ? ref.current.offsetTop : ref.offsetTop,
        }),
      100
    );
  };

  return loading ? (
    <div id="loader_skeleton_product" className="container-fluid loading"></div>
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
            <div id="add_to_shopping_cart_button_container">
              <AddToShoppingCartBtn />
            </div>
          </div>
        </div>
        <div id="rev_desc_links">
          <RevDescLinks
            key="rev_desc_links"
            scrollToRef={scrollToRef}
            switchRatingToDescription={switchRatingToDescription}
          />
        </div>

        <div
          id="ratings"
          className="container"
          style={{ display: renderRatings ? "flex" : "none" }}
        >
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div id="rating_statistics">
                <RatingStatistics product={product} />
              </div>
            </div>

            <div id="rating_statistics_right" className="col-xl-6 col-lg-12">
              <div
                id="average_stars_in_statistics"
                style={{ display: renderRatingForm ? "none" : "flex" }}
              >
                <StarRating rating={averageStars(product)} />
                {`(${totalNumberOfRatings(product)})`}
              </div>

              <div
                id="rate_product_button"
                style={{ display: renderRateProductButton ? "block" : "none" }}
              >
                {isAuthenticated && checkIfStillToRate() && (
                  <RateProductButton
                    key="rate_product_button"
                    toggleRatingForm={toggleRatingForm}
                    toggleRateProductButton={toggleRateProductButton}
                  />
                )}
              </div>

              <div
                id="rating_form"
                style={{ display: renderRatingForm ? "block" : "none" }}
              >
                {isAuthenticated && checkIfStillToRate() && (
                  <RatingForm
                    key="rating_form"
                    toggleRatingForm={toggleRatingForm}
                    toggleRateProductButton={toggleRateProductButton}
                  />
                )}
              </div>
            </div>
          </div>
          <UserRatings product={product} scrollToRef={scrollToRef} />
        </div>

        <div
          id="description"
          style={{ display: renderRatings ? "none" : "flex" }}
        >
          <Description product={product} />
        </div>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  loading: state.product.loading,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getProduct })(Product);
