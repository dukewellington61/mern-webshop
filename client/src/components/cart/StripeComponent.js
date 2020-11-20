import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StripeCheckOut from "react-stripe-checkout";
import { processPayment } from "../../actions/checkout";
import { createOrder } from "../../actions/order";
import store from "../../store";
import { setAlert } from "../../actions/alert";
import { removeAllLineItems } from "../../actions/lineItem";

const StripeComponent = ({
  total,
  processPayment,
  createOrder,
  user,
  cart,
  auth,
  removeAllLineItems,
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
        customer_id: user.customer_id,
      });

      history.push("/order");

      // empty state.cart.line_items array
      removeAllLineItems({ cart_id: cart._id });
    }
  };

  const displayAlert = () =>
    store.dispatch(setAlert("Log in before you pay", "danger"));

  return auth.isAuthenticated ? (
    <div>
      <StripeCheckOut
        token={handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        email={user && user.email}
        // billingAddress
        // shippingAddress
        amount={total * 100}
        name={"Your shopping cart"}
        panelLabel={"pay"}
      >
        <div id="stripe_button_container">
          <div>
            <b>Note:</b>
            <p
              style={{
                textAlign: "justify",
                fontSize: "0.75em",
                marginBottom: "0",
              }}
            >
              The button below prompts a test version of Stripe Checkout to pop
              up which can be used to complete the acquisition of this shopping
              cart. Obviously this is just a simulation. No real transaction is
              taking place. Don't use a genuine credit card number. Instead, in
              the field 'card number' of the Stripe Checkout box, enter the
              following number:
            </p>
            <p style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
              <b> 4242 4242 4242 4242</b>
            </p>
          </div>
          <button className="btn btn-primary btn-lg">
            <i class="far fa-credit-card"></i> PAY WITH CARD
          </button>
        </div>
      </StripeCheckOut>
    </div>
  ) : (
    <div id="stripe_button_container">
      <Link to={"/login"}>
        <button
          id="stripe_button"
          className="btn btn-primary btn-lg"
          onClick={displayAlert}
        >
          <i class="far fa-credit-card"></i> PAY WITH CARD
        </button>
      </Link>
    </div>
  );
};

StripeComponent.propTypes = {
  processPayment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  processPayment,
  createOrder,
  removeAllLineItems,
})(StripeComponent);
