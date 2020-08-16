import axios from "axios";
import { setAlert } from "./alert";
import { DUMMY_DISPATCH } from "./types";

// Process Stripe payment
export const processPayment = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/checkout/", formData, config);

    console.log("Response:", res);

    dispatch({
      type: DUMMY_DISPATCH,
      payload: res.data,
    });

    dispatch(setAlert("Payment successful", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
  }
};
