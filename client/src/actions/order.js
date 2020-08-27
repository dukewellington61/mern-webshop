import axios from "axios";
import { CREATE_ORDER, GET_ORDERS, ORDER_ERROR } from "./types";

// Create order
export const createOrder = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/orders/", formData, config);

    dispatch({
      type: CREATE_ORDER,
      payload: res.data,
    });

    const serializedResponse = JSON.stringify(res.data);
    sessionStorage.setItem("order", serializedResponse);
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};

// Get latest order
export const getLatestOrder = () => (dispatch) => {
  try {
    const serializedResponse = sessionStorage.getItem("order");

    return JSON.parse(serializedResponse);
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};

// Get all orders by user
export const getAllOrdersByUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/orders");

    dispatch({
      type: GET_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};
