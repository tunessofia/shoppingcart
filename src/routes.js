import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { BeerComponent } from "./components/beer.js";
import { TopNavbar } from './components/navbar.js';

export const AppLayout = (componentToRender) => {
    const Component = componentToRender;
    debugger;
    return    (
          <Fragment>
            <TopNavbar />
            <div className="content p-md-5 pt-5 p-3">
              <div className="row">
                <div className="col-xl-10 col-12 max-content-width">
                  <Component />
                </div>
              </div>
            </div>
          </Fragment>
  )
}
  
export const AppRoutes = () => {
  const mainEndpoint = "/store";
  const homepage = mainEndpoint + "/beer";

  return (
    <Switch>
      <Route path={homepage} render={props => (AppLayout(BeerComponent))} />
      <Redirect exact from="/" to={homepage} />
    </Switch>
  );
}