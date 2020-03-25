import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
// pages for this product
import Components from "views/Components/Components";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/:aid" component={Components} />
      </Switch>
    </Router>
  );
}

export default App;
