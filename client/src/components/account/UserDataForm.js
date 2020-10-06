import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user";
import { setAlert } from "../../actions/alert";
import Spinner from "../layout/Spinner";

import PropTypes from "prop-types";

const UserDataForm = ({ user, updateUser }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    if (user)
      setFormData({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
  }, [user]);

  const { firstname, lastname, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Update</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Update Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder={user.firstname}
            name="firstname"
            value={firstname}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            type="text"
            placeholder={user.lastname}
            name="lastname"
            value={lastname}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder={user.email}
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Update" />
      </form>
    </Fragment>
  );
};

UserDataForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { updateUser })(UserDataForm);
