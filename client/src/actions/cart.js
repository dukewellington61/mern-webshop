import axios from "axios";
import { GET_CART, CART_ERROR } from "./types";

// Create a cart
export const createCart = () => async (dispatch) => {
  try {
    const res = await axios.post("/api/cart");

    localStorage.setItem(
      "mern_stack_dummy_bicycle_webshop_shopping_cart_id",
      JSON.stringify(res.data._id)
    );

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

// Create a cart for user
export const createUserCart = () => async (dispatch) => {
  try {
    var res = await axios.put(`/api/cart/`);

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

// Get Cart by user_id
export const getCartByUserId = () => async (dispatch) => {
  console.log("getCartByUserId");
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

// Get Cart by cart_id
export const getCartByCartId = (id) => async (dispatch) => {
  console.log("getCartByCartId");
  try {
    const res = await axios.get(`/api/cart/${id}`);

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
