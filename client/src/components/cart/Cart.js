import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LineItems from "./LineItem";
import GrantTotal from "./GrantTotal";
import { getProducts } from "../../actions/product";
import Spinner from "../layout/Spinner";

const Cart = ({ cart, user }) => {
  return cart.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="cart_container" className="container">
        <div>
          {cart.line_items.map((line_item) => (
            <LineItems key={line_item._id} line_item={line_item} cart={cart} />
          ))}
        </div>
        <div id="#grand_total">
          <div>
            {cart.line_items.length > 0 && (
              <GrantTotal cart={cart} user={user} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getProducts })(Cart);
