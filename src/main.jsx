import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import ProductsProvider from './context/products-context';
import ThemeContextProvider from './context/theme-context';

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

const createCounter = function (n) {
  return () => n++;
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 10
console.log(counter()); // 10

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </ThemeContextProvider>,
);
