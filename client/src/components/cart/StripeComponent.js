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
        stripeKey="pk_test_51H9aCqGnYOPoEHal5RMlvSbq6Ms7Ln66jxjxJqiBwfOarxnsA6y92AgYeGeNMpTtzDWeIDmvYfC9tqfJ2jV85RWB00aAgTZ8M9"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={total * 100}
        name={"Your shopping cart"}
      />
    </div>
  );
};

StripeComponent.propTypes = {
  processPayment: PropTypes.func.isRequired,
};

export default connect(null, { processPayment })(StripeComponent);
