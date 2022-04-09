import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserProvider } from './contexts/user.context';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
      <React.StrictMode>
        <UserProvider>
          <App />
        </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

