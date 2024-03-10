import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { combineReducers } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import Products from './containers/Products';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
