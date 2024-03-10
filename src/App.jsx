import React from 'react';
import Navigation from './components/nav/Navigation';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import RootLayout from './components/ui/RootLayout';
import Products from './containers/Products';
import Favorites from './containers/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/favorites', element: <Favorites /> },
    ],
  },
]);

const App = (props) => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
