import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { updateLineItems } from "../../actions/lineItem";
import { getCartByUserId } from "../../actions/cart";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Login = ({
  login,
  updateLineItems,
  getCartByUserId,
  isAuthenticated,
  cart,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // browser_cart is the cart if no user is logged in
  const browser_cart = cart;

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    const user_cart = await getCartByUserId();

    const arr = await updateLineItems({
      user_cart,
      browser_cart,
    });

    // after log in redirect to cart if cart has line items
    // otherwhise redirect to landing page
    arr && arr.data.length > 0 ? history.push("/cart") : history.push("/");
  };

  // if some nasty user enters .../login in url --> redirect to landing page
  // otherwhise the login form could be displayed to a logged in user
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div id="log_in">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fa fa-user"></i> Sign Into Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              autocomplete="on"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  login,
  getCartByUserId,
  updateLineItems,
})(Login);
