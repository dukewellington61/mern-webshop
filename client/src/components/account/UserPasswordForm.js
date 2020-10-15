import React, { useState } from "react";
import { connect } from "react-redux";
import { changeUserPassword } from "../../actions/user";

import PropTypes from "prop-types";

const UserDataForm = ({ changeUserPassword }) => {
  const [editForm, setEditForm] = useState(false);

  const toggleEditForm = () =>
    editForm ? setEditForm(false) : setEditForm(true);

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
    await changeUserPassword(formData);
    toggleEditForm();
    setFormData({ old_password: "", new_password: "", confirm_password: "" });
  };

  return (
    <div className="row">
      <div className="col-10">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              className="form-control"
              disabled={editForm ? "" : "disabled"}
              type="password"
              placeholder={editForm && "enter old password"}
              name="old_password"
              value={old_password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              disabled={editForm ? "" : "disabled"}
              type="password"
              placeholder={editForm && "enter new password"}
              name="new_password"
              value={new_password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              disabled={editForm ? "" : "disabled"}
              type="password"
              placeholder={editForm && "confirm new password"}
              name="confirm_password"
              value={confirm_password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary"
            value="Update"
            style={{
              display: editForm ? "block" : "none",
            }}
          />
        </form>
      </div>

      <div className="col-2">
        {" "}
        <i
          className="fas fa-user-edit"
          style={{
            display: editForm ? "none" : "block",
            position: "absolute",
            bottom: "0",
            paddingBottom: "1rem",
          }}
          onClick={() => toggleEditForm()}
        ></i>
      </div>
    </div>
  );
};

UserDataForm.propTypes = {
  changeUserPassword: PropTypes.func.isRequired,
};

export default connect(null, { changeUserPassword })(UserDataForm);
