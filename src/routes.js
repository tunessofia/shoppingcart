import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { BeerComponent } from "./beer/main.js";

export const App = () => {
    
    const mainEndpoint = "/store";
    const homepage = mainEndpoint+"/beer";
    return(
        <Switch>
          <Route path={homepage}  component={BeerComponent}/>
          <Redirect exact from="/" to={homepage} />
        </Switch>
    );   
}
  