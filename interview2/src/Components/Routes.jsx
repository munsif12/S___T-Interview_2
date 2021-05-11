import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Ranklist from "./Ranklist";
function Routes() {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/ranklist">
          <Ranklist />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
