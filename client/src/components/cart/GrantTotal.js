import React, { Fragment } from "react";
import StripeComponent from "./StripeComponent";
import { calculateGrandTotal } from "../../utils/calcGrandTotal";

const GrantTotal = ({ cart, user, renderStripeComponent }) => {
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
      <div className="row">
        <div className="col-sm"> </div>
        <div className="col-sm"></div>
        <div className="col-sm">
          {renderStripeComponent && (
            <Fragment>
              <div style={{ marginTop: "1rem" }}>
                <b>Note:</b>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "0.75em",
                    marginBottom: "0",
                  }}
                >
                  The button below prompts a test version of Stripe Checkout to
                  pop up which can be used to complete the acquisition of this
                  shopping cart. Obviously this is just a simulation. No real
                  transaction is taking place. Don't use a genuine credit card
                  number. Instead, in the field 'card number' of the Stripe
                  Checkout box, enter the following number:
                </p>
                <p style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                  <b> 4242 4242 4242 4242</b>
                </p>
              </div>
              <StripeComponent
                total={Number(calculateGrandTotal(cart) + 2.95)}
                user={user}
                cart={cart}
              />
            </Fragment>
          )}
        </div>
        <div className="col-sm"> </div>
      </div>
    </Fragment>
  );
};

export default GrantTotal;
