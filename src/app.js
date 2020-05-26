import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { ProductsViewConnected } from "./components/ProductsView";
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
  
export const AppRoutes = () => {
  const mainEndpoint = "/store";
  const homepage = mainEndpoint + "/products";

  return (
    <Switch>
      <Route path={homepage} render={route =>  (AppLayout(route, ProductsViewConnected))} />
      <Redirect exact from="/" to={homepage} />
    </Switch>
  );
}