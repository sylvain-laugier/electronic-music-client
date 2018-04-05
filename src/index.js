import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import apiKey from './apiAuthentificate';

import registerServiceWorker from './registerServiceWorker';

function detectIE() {
  const ua = window.navigator.userAgent;

  const msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // other browser
  return false;
}

const version = detectIE();
if (version !== false && version <= 11) {
  setTimeout(() => alert("Oups ! It seems like you are using Internet Explorer," +
  " I'm sorry but this website is not compatible with this browser," +
  " please use a recent browser like Edge, Chrome or Firefox"), 2500);
}
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
