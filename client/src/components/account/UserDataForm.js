import React, { useState, useEffect } from "react";
import { updateUser } from "../../actions/user";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserDataForm = ({ user, updateUser }) => {
  const [editForm, setEditForm] = useState(false);

  const toggleEditForm = () =>
    editForm ? setEditForm(false) : setEditForm(true);

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

  const checkForChanges = (data) =>
    data.firstname !== user.firstname ||
    data.lastname !== user.lastname ||
    data.email !== user.email
      ? true
      : false;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkForChanges(formData)) await updateUser(formData);
    toggleEditForm();
  };

  return (
    <div className="row">
      <div className="col-10">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label className="label">first name</label>
            <input
              className="form-control"
              disabled={editForm ? "" : "disabled"}
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">last name</label>
            <input
              className="form-control"
              disabled={editForm ? "" : "disabled"}
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">email address</label>
            <input
              className="form-control"
              disabled={editForm ? "" : "disabled"}
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
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
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, { updateUser })(UserDataForm);
