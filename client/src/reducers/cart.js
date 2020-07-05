import { GET_CART } from "../actions/types";

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
    default:
      return state;
  }
}
