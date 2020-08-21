import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as StoreProvider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
