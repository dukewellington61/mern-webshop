import React, { Fragment } from "react";
import StripeComponent from "./StripeComponent";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";

const GrantTotal = ({ cart, user }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm"></div>
        <div className="col-sm">Subtotal:</div>
        <div className="col-sm">
          {calculateGrandTotal(cart).toFixed(2)}&nbsp;&euro;
        </div>
      </div>
      <div className="row">
        <div className="col-sm"> </div>
        <div className="col-sm"></div>
        <div className="col-sm">shipping:</div>
        <div id="shipping" className="col-sm">
          2.95&nbsp;&euro;
        </div>
      </div>
      <div className="row">
        <div className="col-sm"> </div>
        <div className="col-sm"></div>
        <div className="col-sm">Total:</div>
        <div className="col-sm">
          {Number(calculateGrandTotal(cart) + 2.95).toFixed(2)}
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
