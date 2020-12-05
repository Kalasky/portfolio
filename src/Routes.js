import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Footer from "./Footer";
import Header from "./Nav";

const Routes = () => {
  return (
    // BrowserRouter makes props available in this component
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
