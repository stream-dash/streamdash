// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app.jsx';

const root = document.querySelector('#app');

window.addEventListener('DOMContentLoaded', () => {
  if (root) {
    ReactDOM.render(<App />, root);
  }
});
