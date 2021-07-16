import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './styles/global.scss';
import { LoginProvider } from './contexts/LoginProvider';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
