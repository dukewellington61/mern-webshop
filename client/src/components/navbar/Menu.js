import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const Menu = ({ isAuthenticated, logout }) =>
  !isAuthenticated ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/orders">Orders</Link>
      <Link to="/reviews">Reviews</Link>
      <Link onClick={logout} to="/">
        <i class="fas fa-sign-out-alt"></i> Logout
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
