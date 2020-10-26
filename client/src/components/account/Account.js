import React from "react";
import UserDataForm from "./UserDataForm";
import UserPasswordForm from "./UserPasswordForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Account = ({ user }) => {
  return user === null ? (
    <Spinner />
  ) : (
    <div className="form_container">
      <h2 className="large text-primary">
        <i className="fas fa-user"></i>&nbsp;Account Details
      </h2>
      <h3>Hello {user.firstname}</h3>
      <div>Customer Number: {user.customer_id}</div>
      <div className className="row">
        <div className="col-sm">
          <div className="lead">
            {" "}
            User Data
            <UserDataForm key="user_data_form" user={user} />
          </div>
        </div>
        <div className="col-sm">
          <div className="lead">
            Change Password
            <UserPasswordForm key="user_password_form" />
          </div>
        </div>
      </div>
    </div>
  );
};

Account.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(Account);
