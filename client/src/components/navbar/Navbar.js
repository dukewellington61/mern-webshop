import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="brand_container">
        <Link
          id="brand"
          className="nav-link active"
          to="/"
          style={{ fontWeight: "bold" }}
        >
          MERN STACK BICYCLE EXAMPLE WEBSHOP
        </Link>
      </div>

      <div id="nav_item_container">
        <div>
          <CartIcon />
        </div>

        <Link className="nav_items" to="/products">
          <i className="fas fa-bicycle" style={{ fontSize: "2rem" }}></i>
        </Link>

        <Link className="nav_items" to="#">
          <AccountIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
