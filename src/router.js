import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const router = (
    <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
    </Switch>
  );

export default router;
