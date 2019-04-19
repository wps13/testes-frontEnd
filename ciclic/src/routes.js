import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import FormSimulation from "./containers/FormSimulation";
import SimulationResult from "./containers/SimulationResult";

const errorMsg = () => (
  <div style={{ margin: "10px" }}>
    <h1>Error 404</h1>
    <p>Essa página ainda não existe.</p>
  </div>
);

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route root path="/" exact component={FormSimulation} />
        <Route path="/result" component={SimulationResult} />
        <Route render={errorMsg} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
