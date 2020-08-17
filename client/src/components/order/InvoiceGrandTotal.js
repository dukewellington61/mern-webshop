import React, { Fragment } from "react";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";

const InvoiceGrandTotal = ({ order }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-6">Subtotal:</div>
        <div className="col-xl-6">
          &nbsp;{calculateGrandTotal(order).toFixed(2)}&nbsp;&euro;
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">shipping:</div>
        <div className="col-xl-6">2.95&nbsp;&euro;</div>
      </div>
      <div className="row">
        <div className="col-xl-6">Total:</div>
        <div className="col-xl-6">
          &nbsp;{Number(calculateGrandTotal(order) + 2.95).toFixed(2)}
          &nbsp;&euro;
        </div>
      </div>
    </Fragment>
  );
};

export default InvoiceGrandTotal;
