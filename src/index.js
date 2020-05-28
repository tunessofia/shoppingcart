import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./app.js";
import { Provider } from 'react-redux'
import {store} from './store'
import '../resources/scss/main.scss';

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
