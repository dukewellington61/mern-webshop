import React from "react";
import UserDataForm from "./UserDataForm";
import UserPasswordForm from "./UserPasswordForm";

const Account = () => {
  return (
    <div className="form_container">
      <h2 className="large text-primary">
        <i className="fas fa-user"></i>Update
      </h2>
      <div className className="row">
        <div className="col">
          <p className="lead">
            Update User Data
            <UserDataForm />
          </p>
        </div>
        <div className="col">
          <p className="lead">
            Change Password
            <UserPasswordForm />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
