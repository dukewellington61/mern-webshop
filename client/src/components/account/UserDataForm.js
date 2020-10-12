import React, { useState, useEffect } from "react";
import { updateUser } from "../../actions/user";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    await updateUser(formData);
  };

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder={user.firstname}
          name="firstname"
          value={firstname}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
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
          className="form-control"
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
  );
};

UserDataForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, { updateUser })(UserDataForm);
