import axios from "axios";
import { CREATE_LINEITEM, ADD_LINEITEM, LINEITEM_ERROR } from "./types";

// Add line-item to cart
export const addLineItem = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/line-items/", formData, config);

    console.log(res);

    res.data.quantity
      ? dispatch({
          type: ADD_LINEITEM,
          payload: res.data,
        })
      : dispatch({
          type: CREATE_LINEITEM,
          payload: res.data,
        });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LINEITEM_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};
