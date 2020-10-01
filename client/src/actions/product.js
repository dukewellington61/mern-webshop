import axios from "axios";

import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_ERROR,
  CREATE_REVIEW,
  CREATE_REVIEW_USER,
  REVIEW_ERROR,
} from "./types";

// Get all products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};

// Get product
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};

// Create review
export const createReview = (formData, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `/api/products/${id}/review`,
      formData,
      config
    );

    // updates state.product.product.reviews
    dispatch({
      type: CREATE_REVIEW,
      payload: res.data.product,
    });
    // updates state.auth.user.reviews
    dispatch({
      type: CREATE_REVIEW_USER,
      payload: res.data.user,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: REVIEW_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};
