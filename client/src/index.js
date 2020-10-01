import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Provider } from './Context';
import { Provider } from './ContextIndex';




ReactDOM.render(
  <Provider> 
      <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
