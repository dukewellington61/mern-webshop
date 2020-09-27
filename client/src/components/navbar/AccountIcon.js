import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "./Menu";

const AccountIcon = (props) => {
  return (
    <div>
      <div id="account_icon">
        <i className="far fa-user-circle"></i>
      </div>
      <div id="menu">
        <Menu />
      </div>
    </div>
  );
};

AccountIcon.propTypes = {};

export default AccountIcon;
