import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { createUserCart } from "../../actions/cart";
import { updateLineItems } from "../../actions/lineItem";
import { useHistory } from "react-router-dom";

const Register = ({
  setAlert,
  register,
  isAuthenticated,
  createUserCart,
  updateLineItems,
  browser_cart,
}) => {
  /* props.setAlert bas been destructured to ({ setAlert })*/
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      await register({ firstname, lastname, email, password });
      const user_cart = await createUserCart();

      const arr = await updateLineItems({
        user_cart,
        browser_cart,
      });

      // after log in redirect to cart if cart has line items
      // otherwhise redirect to landing page
      arr.data.length > 0 ? history.push("/cart") : history.push("/");
    }
  };

  // if some nasty user enters .../login in url --> redirect to landing page
  // otherwhise the register form could be displayed to a logged in user
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  browser_cart: state.cart,
});

export default connect(mapStateToProps, {
  setAlert,
  register,
  createUserCart,
  updateLineItems,
})(Register);
