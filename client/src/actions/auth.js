import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import { loadUser } from "./user";
import { loadCart } from "./cart";
import store from "../store";

// Register user
export const register = ({ firstname, lastname, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ firstname, lastname, email, password });

  try {
    const res = await axios.post("/api/auth/signup", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // Register action returns only the token, not the user --> hence user has to be loaded
    // dispatches whatever loadUser() returns which is type and payload
    await dispatch(loadUser());
    const user = store.getState().auth.user;
    dispatch(
      setAlert(
        `Welcome ${user.firstname}! You've successfully registered`,
        "success"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth/login", body, config);

    console.log(res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // Login action returns only the token, not the user --> hence user has to be loaded
    await dispatch(loadUser());
    const user = store.getState().auth.user;
    dispatch(
      setAlert(
        `Welcome ${user.firstname}! You've successfully logged in`,
        "success"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  loadCart();
  dispatch(setAlert("You've successfully logged out", "success"));
};
