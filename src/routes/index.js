import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Home from "../pages/Home";
import Logged from "../pages/Logged";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/logged" component={Logged} />
    </Switch>
  );
}

export default Routes;