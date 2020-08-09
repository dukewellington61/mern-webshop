import axios from "axios";
import { setAlert } from "./alert";
import {
  CREATE_LINEITEM,
  ADD_LINEITEM,
  REMOVE_LINEITEM,
  LINEITEM_ERROR,
} from "./types";

// Add line-item to cart
export const addLineItem = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/line-items/", formData, config);

    res.data.quantity
      ? dispatch({
          type: ADD_LINEITEM,
          payload: res.data,
        })
      : dispatch({
          type: CREATE_LINEITEM,
          payload: res.data,
        });

    if (res.data.quantity && formData.addToShoppingCartBtn) {
      dispatch(
        setAlert(
          "Quantity of this product has been successfully increased",
          "success",
          "link"
        )
      );
    } else if (res.data.quantity) {
      dispatch(
        setAlert(
          "Quantity of this product has been successfully changed",
          "success"
        )
      );
    } else {
      dispatch(
        setAlert(
          "Product has been added to your shopping cart",
          "success",
          "link"
        )
      );
    }
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

// Update line-items in user's cart from browser cart on log in
export const updateLineItems = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put("/api/line-items/update", formData, config);

    dispatch({
      type: CREATE_LINEITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: LINEITEM_ERROR,
      payload: {
        msg: "err.response.statusTest",
        status: "err.response.status",
      },
    });
  }
};

// Remove line-item from cart
export const removeLineItem = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put("/api/line-items/", formData, config);

    dispatch({
      type: REMOVE_LINEITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LINEITEM_ERROR,
      payload: {
        msg: err.response.statusTest,
        status: err.response.status,
      },
    });
  }
};
