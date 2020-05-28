import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { MainViewConnected } from "./components/Main";
import { TopNavbar } from './components/Navbar.js';

export const AppLayout = (route, componentToRender) => {
  const Component = componentToRender;
  return (
    <Fragment>
      <TopNavbar history={route.history} />
      <div className="content p-md-5 pt-5 p-3">
        <div className="row">
          <div className="col-xl-10 col-12 max-content-width">
            <Component route={route} history={route.history} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
  
export const App = () => {
  return (
    <Switch>
      <Route path="/" render={route =>  (AppLayout(route, MainViewConnected))} />
    </Switch>
  );
}