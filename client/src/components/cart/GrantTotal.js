import React, { Fragment } from "react";
import PropTypes from "prop-types";
import StripeComponent from "./StripeComponent";

const GrantTotal = ({ cart, user }) => {
  const calculateGrandTotal = () => {
    let sum = 0;
    for (let i = 0; i < cart.line_items.length; i++) {
      sum = sum + cart.line_items[i].quantity * cart.line_items[i].price;
    }
    return sum;
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
