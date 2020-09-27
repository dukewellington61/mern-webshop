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

      <CartIcon />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/products">
              Products
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" to="/orders">
              Orders
            </Link>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="./contact.html">
              Contact
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
        <AccountIcon />
      </div>
    </nav>
  );
};

export default Navbar;
