import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Context} from './Context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Context>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
