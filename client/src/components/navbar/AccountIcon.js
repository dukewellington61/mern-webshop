import React from "react";
import Menu from "./Menu";

const AccountIcon = () => {
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

export default AccountIcon;
