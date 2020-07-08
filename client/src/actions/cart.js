import axios from "axios";
import { GET_CART, CART_ERROR } from "./types";
import store from "../store";

// Load cart
export const loadCart = () => {
  // checks if the current browser has already been used to access app
  const checkIfCart = () =>
    localStorage.getItem("mern_stack_dummy_bicycle_webshop_shopping_cart_id");

  const user = store.getState().auth;

  if (user.isAuthenticated) {
    store.dispatch(getCartByUserId());
  } else {
    const cartId = checkIfCart();
    cartId
      ? store.dispatch(getCartByCartId(JSON.parse(cartId)))
      : store.dispatch(createCart());
  }
};
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
