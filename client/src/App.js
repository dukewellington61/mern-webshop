import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Landing />
        </Fragment>
      </Provider>
    </Fragment>
  </Router>
);

export default App;
