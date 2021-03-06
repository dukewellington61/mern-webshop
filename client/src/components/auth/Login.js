import React, { useState } from "react";
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
    email: "meister@lampe.de",
    password: "123456",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // browser_cart is the cart if no user is logged in
  const browser_cart = cart;

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = await login(email, password);

    // if a token was returned, login was successfull
    if (token) {
      const user_cart = await getCartByUserId();

      const arr = await updateLineItems({
        user_cart,
        browser_cart,
      });

      // after log in redirect to cart if cart has line items
      // otherwhise redirect to landing page
      arr && arr.data.length > 0 ? history.push("/cart") : history.push("/");
    } else {
      setFormData({ email: "", password: "" });
    }
  };

  // if some nasty user enters .../login in url --> redirect to landing page
  // otherwhise the login form could be displayed to a logged in user
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form_container">
      <h3 className="large text-primary">Sign In</h3>
      <p className="lead">
        <i className="fa fa-user auth_fa-user"></i>&nbsp;Log into your account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control auth_input"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            autoComplete
            defaultValue="meister@lampe.de"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control auth_input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
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
