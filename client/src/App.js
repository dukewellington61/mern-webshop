import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/layout/Landing";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Product from "./components/product/Product";
import Products from "./components/products/Products";

import Cart from "./components/cart/Cart";

import Alert from "./components/layout/Alert";

import Order from "./components/order/Order";
import Orders from "./components/order/Orders";

import RatingSummary from "./components/rating/RatingSummary";

import Account from "./components/account/Account";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/user";
import { loadCart } from "./actions/cart";

import "./App.css";

// if there is a token in local storage it is beeing set to the header of the axios - request
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    const getData = async () => {
      await store.dispatch(loadUser());
      loadCart();
    };

    getData();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div id="alert_container">
            <Alert />
          </div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/reviews" component={RatingSummary} />
            <Route exact path="/update" component={Account} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
