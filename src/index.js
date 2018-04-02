import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import apiKey from './apiAuthentificate';

import registerServiceWorker from './registerServiceWorker';

// test connectivity with api
fetch(`${process.env.REACT_APP_API_URL}`, {
  method: 'GET',
  headers: new Headers(apiKey),
}).then(res => res.json())
  .then(response => response)
  .catch(err => console.error(err));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
