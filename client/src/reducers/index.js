import { combineReducers } from "redux";
import auth from "./auth";
import product from "./product";
import cart from "./cart";
import alert from "./alert";
import order from "./order";

export default combineReducers({ auth, product, cart, alert, order });
