import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/layout/Footer";
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

import Search from "./components/search/Search";
import Result from "./components/search/Result";

import LegalNotice from "./components/legal/LegalNotice";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";

import CookieBanner from "./components/legal/CookieBanner";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/user";
import { loadCart } from "./actions/cart";

import "./App.scss";
import "./aux.js";

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

  // the following lines of code render a cookie banner on first load
  // on click "I accept" button cookie banner disappears and stripe checkout component is being rendered
  // on click "I decline" button cookie banner disappears and stripe checkout component is not being rendered
  // on refresh browser app checks in sessionStorage, if cookie banner had been displayed in this tab already
  // if so conditionals in useEffekt hook make sure that
  // a) cookie banner is not being rendered again
  // and
  // b) user settings with regard to cookies or not (i.e. stripe checkout component rendered or not) are being remembered

  const [renderStripeComponent, setRenderStripeComponent] = useState(false);

  const [renderCookieBanner, setRenderCookieBanner] = useState(true);

  const body = document.querySelector("body");
  renderCookieBanner
    ? body.classList.add("no-sroll")
    : body.classList.remove("no-sroll");

  const handleCookieAccept = () => {
    setRenderStripeComponent(true);
    setRenderCookieBanner(false);
    sessionStorage.setItem(
      "mern_stack_example_web_shop_render_stripe_component",
      "true"
    );
  };

  const handleCookieDecline = () => {
    setRenderCookieBanner(false);
    sessionStorage.setItem(
      "mern_stack_example_web_shop_render_stripe_component",
      "false"
    );
  };

  useEffect(() => {
    if (
      sessionStorage.getItem(
        "mern_stack_example_web_shop_render_stripe_component"
      ) === "true"
    ) {
      setRenderCookieBanner(false);
      setRenderStripeComponent(true);
    }

    if (
      sessionStorage.getItem(
        "mern_stack_example_web_shop_render_stripe_component"
      ) === "false"
    ) {
      setRenderCookieBanner(false);
      setRenderStripeComponent(false);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {renderCookieBanner && (
            <div id="cookie_banner_container">
              <CookieBanner
                handleCookieAccept={handleCookieAccept}
                handleCookieDecline={handleCookieDecline}
              />
            </div>
          )}
          <Navbar />
          <Search />
          <div id="alert_container">
            <Alert />
          </div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/search-result" component={Result} />
            <Route exact path="/products/:id" component={Product} />
            <Route
              exact
              path="/cart"
              render={() => (
                <Cart renderStripeComponent={renderStripeComponent} />
              )}
            />
            <Route exact path="/order" component={Order} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/reviews" component={RatingSummary} />
            <Route exact path="/update" component={Account} />
            <Route exact path="/privacy_policy" component={PrivacyPolicy} />
            <Route exact path="/legal_notice" component={LegalNotice} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
