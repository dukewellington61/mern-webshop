import React, { Fragment } from "react";
import Menu from "./Menu";

const AccountIcon = () => {
  return (
    <div>
      <div id="account_icon">
        <i className="fa fa-user"></i>
      </div>
      <div id="menu">
        <Menu />
      </div>
    </div>
  );
};

export default AccountIcon;
