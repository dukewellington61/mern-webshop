import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (
  msg,
  alertStyle,
  alertType,
  line_item_id,
  cart_id,
  timeout = 5000
) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertStyle, alertType, id, line_item_id, cart_id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
