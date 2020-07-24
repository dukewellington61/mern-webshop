import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LineItems from "./LineItem";
import { getProducts } from "../../actions/product";
import Spinner from "../layout/Spinner";

const Cart = ({ cart }) => {
  return cart.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="cart_container" className="container">
        <div>
          {cart.line_items.map((line_item) => (
            <LineItems key={line_item._id} line_item={line_item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { getProducts })(Cart);
