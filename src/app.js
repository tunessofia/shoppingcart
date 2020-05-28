import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainViewConnected } from "./components/Main";
import { TopNavbar } from './components/Navbar.js';
import { CheckoutConnected } from './components/Checkout';

export const AppLayout = (componentToRender) => {
  const Component = componentToRender;
  return () => (
    <Fragment>
      <TopNavbar />
      <div className="content">
        <Component />
      </div>
    </Fragment>
  );
}
  
export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppLayout(MainViewConnected)} />
        <Route exact path="/checkout" component={AppLayout(CheckoutConnected)} />
      </Switch>
    </Router>
  );
}