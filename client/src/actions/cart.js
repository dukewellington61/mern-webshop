import axios from "axios";
import { GET_CART, CART_ERROR } from "./types";

// Create a cart
export const createCart = () => async (dispatch) => {
  try {
    const res = await axios.post("/api/cart");

    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};

// Get Cart
export const getCart = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/cart/`);

    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};
