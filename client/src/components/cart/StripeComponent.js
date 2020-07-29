import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StripeCheckOut from "react-stripe-checkout";
import { processPayment } from "../../actions/checkout";

const StripeComponent = ({ total, processPayment, user }) => {
  const handleToken = (token, addresses) => {
    processPayment({ token, addresses, total, user });
  };

  return (
    <div>
      {" "}
      <StripeCheckOut
        token={handleToken}
        stripeKey={process.env.REACT_APP_KEY}
        email={user.email}
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

export default connect(null, { processPayment })(StripeComponent);
