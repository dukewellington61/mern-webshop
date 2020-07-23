import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LineItems from "./LineItem";
import { getProducts } from "../../actions/product";

const Cart = ({ line_items }) => {
  return (
    <Fragment>
      <div style={{ position: "absolute", top: "500px", color: "black" }}>
        <div>
          {line_items.map((line_item) => (
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
  line_items: state.cart.line_items,
});

export default connect(mapStateToProps, { getProducts })(Cart);
