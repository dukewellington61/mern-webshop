import React, { Fragment } from "react";
import StripeComponent from "./StripeComponent";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";

const GrantTotal = ({ cart, user }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-6">Subtotal:</div>
        <div className="col-xl-6">
          &nbsp;{calculateGrandTotal(cart).toFixed(2)}&nbsp;&euro;
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">shipping:</div>
        <div className="col-xl-6">2.95&nbsp;&euro;</div>
      </div>
      <div className="row">
        <div className="col-xl-6">Total:</div>
        <div className="col-xl-6">
          &nbsp;{Number(calculateGrandTotal(cart) + 2.95).toFixed(2)}
          &nbsp;&euro;
        </div>
      </div>
      <StripeComponent
        total={Number(calculateGrandTotal(cart) + 2.95)}
        user={user}
        cart={cart}
      />
    </Fragment>
  );
};

export default GrantTotal;
