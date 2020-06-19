import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const RegisterLogInLogOutLinks = ({ isAuthenticated, logout }) =>
  !isAuthenticated ? (
    <Fragment>
      <Link to="/register">Sign Up</Link>
      <Link to="/login" style={{ marginLeft: "10px" }}>
        Login
      </Link>
    </Fragment>
  ) : (
    <Link onClick={logout} to="/">
      Logout
    </Link>
  );

RegisterLogInLogOutLinks.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(RegisterLogInLogOutLinks);
