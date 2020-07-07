import axios from "axios";
import { UPDATE_LINEITEMS, LINEITEMS_ERROR } from "./types";

// Add line-item to cart
export const addLineItem = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/line-items/", formData, config);

    dispatch({
      type: UPDATE_LINEITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LINEITEMS_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};
