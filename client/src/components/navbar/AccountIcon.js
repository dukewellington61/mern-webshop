import React, { Fragment } from "react";
import Menu from "./Menu";

const AccountIcon = () => {
  return (
    <div>
      <i className="fa fa-user"></i>
      <div id="menu">
        <Menu />
      </div>
    </div>
  );
};

export default AccountIcon;
