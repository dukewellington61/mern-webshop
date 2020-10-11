import React, { useState } from "react";
import { connect } from "react-redux";
import { changeUserPassword } from "../../actions/user";

import PropTypes from "prop-types";

const UserDataForm = ({ changeUserPassword }) => {
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const { old_password, new_password, confirm_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    changeUserPassword(formData);
  };

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div class="form-group">
        <input
          className="form-control"
          type="password"
          placeholder="old password"
          name="old_password"
          value={old_password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div class="form-group">
        <input
          className="form-control"
          type="password"
          placeholder="enter new password"
          name="new_password"
          value={new_password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>

      <div class="form-group">
        <input
          className="form-control"
          type="password"
          placeholder="confirm new password"
          name="confirm_password"
          value={confirm_password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>

      <input type="submit" className="btn btn-primary" value="Update" />
    </form>
  );
};

UserDataForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, { changeUserPassword })(UserDataForm);
