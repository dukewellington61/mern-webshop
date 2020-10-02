import axios from "axios";
import { USER_LOADED, AUTH_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

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

// Update user
export const updateUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put("/api/users", formData, config);

    // Hello!! continue here!

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
