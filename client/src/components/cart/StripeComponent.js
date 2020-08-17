import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StripeCheckOut from "react-stripe-checkout";
import { processPayment } from "../../actions/checkout";
import { createOrder } from "../../actions/order";

const StripeComponent = ({
  total,
  processPayment,
  createOrder,
  user,
  cart,
}) => {
  let history = useHistory();

  const handleToken = async (token, addresses) => {
    const status = await processPayment({ token, addresses, total, user });

    // this conditional makes sure, that an order is created only if the payment was processed successfully
    if (status === 200) {
      await createOrder({
        firstname: user.firstname,
        lastname: user.lastname,
        invoice_items: cart.line_items,
      });

      history.push("/order");
    }
  };

  return (
    <div>
      {" "}
      <StripeCheckOut
        token={handleToken}
        stripeKey={process.env.REACT_APP_KEY}
        email={user && user.email}
        // billingAddress
        // shippingAddress
        amount={total * 100}
        name={"Your shopping cart"}
      >
        <button className="btn btn-outline-primary">PAY WITH CARD</button>
      </StripeCheckOut>
    </div>
  );
};

StripeComponent.propTypes = {
  processPayment: PropTypes.func.isRequired,
};

export default connect(null, { processPayment, createOrder })(StripeComponent);
