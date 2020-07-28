import React, { Fragment } from "react";
import PropTypes from "prop-types";
import StripeComponent from "./StripeComponent";

const GrantTotal = ({ cart, user }) => {
  const calculateGrandTotal = () => {
    if (cart.line_items.length > 1) {
      let grandTotal = 0;
      grandTotal = cart.line_items.reduce(
        (previousLine_item, currentLine_item) =>
          (grandTotal =
            previousLine_item.price * previousLine_item.quantity +
            currentLine_item.price * currentLine_item.quantity)
      );
      return grandTotal;
    } else {
      return cart.line_items[0].price * cart.line_items[0].quantity;
    }
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-6">Subtotal:</div>
        <div className="col-xl-6">
          &nbsp;{calculateGrandTotal().toFixed(2)}&nbsp;&euro;
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">shipping:</div>
        <div className="col-xl-6">2.95&nbsp;&euro;</div>
      </div>
      <div className="row">
        <div className="col-xl-6">Total:</div>
        <div className="col-xl-6">
          &nbsp;{Number(calculateGrandTotal() + 2.95).toFixed(2)}
          &nbsp;&euro;
        </div>
      </div>
      <StripeComponent
        total={Number(calculateGrandTotal() + 2.95)}
        user={user}
      />
    </Fragment>
  );
};

GrantTotal.propTypes = {};

export default GrantTotal;
