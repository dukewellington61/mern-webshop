import {
  GET_CART,
  CART_ERROR,
  CREATE_LINEITEM,
  ADD_LINEITEM,
  REMOVE_LINEITEM,
  LINEITEM_ERROR,
} from "../actions/types";

const initialState = {
  _id: null,
  line_items: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CART:
      return {
        ...state,
        _id: payload._id,
        line_items: payload.line_items,
        loading: false,
      };
    case CART_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CREATE_LINEITEM:
      return {
        ...state,
        line_items: payload,
        loading: false,
      };
    case ADD_LINEITEM:
      return {
        ...state,
        line_items: state.line_items.map((line_item) =>
          line_item._id === payload.id
            ? { ...line_item, quantity: payload.quantity }
            : line_item
        ),
        loading: false,
      };
    case REMOVE_LINEITEM:
      return {
        ...state,
        line_items: payload,
        loading: false,
      };
    case LINEITEM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
