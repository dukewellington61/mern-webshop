import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="navbar-example"
    >
      <div className="navbar-brand">
        <Link className="nav-link active" to="/" style={{ color: "white" }}>
          &nbsp;&nbsp;MERN STACK BICYCLE EXAMPLE WEBSHOP
        </Link>
      </div>

      <div
        className="test"
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "0",
          width: "33%",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link id="shopping_cart_link" to="/cart">
            <CartIcon />
          </Link>
        </div>
        <div>
          <Link className="nav-link active" to="/products">
            <i class="fas fa-bicycle" style={{ fontSize: "2rem" }}></i>
          </Link>
        </div>
        <div>
          <div id="account_icon_container">
            <AccountIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
