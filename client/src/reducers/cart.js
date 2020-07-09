import {
  GET_CART,
  CART_ERROR,
  UPDATE_LINEITEMS,
  LINEITEMS_ERROR,
} from "../actions/types";

const initialState = {
  cart: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
        loading: false,
      };
    case CART_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LINEITEMS:
      return {
        ...state,
        cart: { ...state.cart, line_items: payload },
        loading: false,
      };
    case LINEITEMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
