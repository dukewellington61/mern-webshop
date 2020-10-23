import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const Menu = ({ isAuthenticated, logout }) =>
  !isAuthenticated ? (
    <div id="navbar_menu">
      <Link className="navbar_menu_text" to="/register">
        Sign Up
      </Link>
      <Link className="navbar_menu_text" to="/login">
        Login
      </Link>
    </div>
  ) : (
    <div id="navbar_menu">
      <Link className="navbar_menu_text" to="/orders">
        Orders
      </Link>
      <Link className="navbar_menu_text" to="/reviews">
        Reviews
      </Link>
      <Link className="navbar_menu_text" to="/update">
        Account
      </Link>
      <Link className="navbar_menu_text" to="/" onClick={logout}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </Link>
    </div>
  );

Menu.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Menu);
