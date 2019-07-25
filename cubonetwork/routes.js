import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./src/containers/Home";

// eslint-disable-next-line import/no-cycle

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/" root component={Home} />
    </Switch>
  </HashRouter>
);

export default Routes;
