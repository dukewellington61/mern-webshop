import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

// Load user
export const loadUser = () => async (dispatch) => {
  // if there is a token in local storage it is beeing set to the header of the axios - request
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/users");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    /* if there is no token in localStorage AUTH_ERROR will run and everything gets cleared out */
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Update user data
export const updateUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put("/api/users", formData, config);

    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_ERROR,
    });
  }
};

// Change user password
export const changeUserPassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.put("/api/auth/change-password", formData, config);

    dispatch(setAlert(`Password successfully changed`, "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
