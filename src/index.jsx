import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from './utils';
import MobileApp from './mobileApp';
import App from './app';

ReactDOM.render(
  isMobile() ? <MobileApp /> : <App />,
  document.getElementById('root')
);
