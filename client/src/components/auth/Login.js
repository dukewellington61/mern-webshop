import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { updateLineItems } from "../../actions/lineItem";
import { getCartByUserId } from "../../actions/cart";
import PropTypes from "prop-types";

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

  const browser_cart = cart;

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    const user_cart = await getCartByUserId();

    updateLineItems({
      user_cart,
      browser_cart,
    });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
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
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  cart: PropTypes.object.isRequired,
};

// adds isAuthenticated to props (which already has the login function)
// isAuthenticated is then used up above in const Login = ({ login, isAuthenticated }) for the redirect
// after login
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  login,
  getCartByUserId,
  updateLineItems,
})(Login);
