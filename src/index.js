import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {AppRoutes} from "./routes.js";
import '../resources/scss/main.scss';

ReactDOM.render(
  <HashRouter>
    <AppRoutes/>
  </HashRouter>,
  document.getElementById('root')
);
