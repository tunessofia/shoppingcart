import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {AppRoutes} from "./app.js";
import { Provider } from 'react-redux'
import {store} from './store'
import '../resources/scss/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <AppRoutes/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
