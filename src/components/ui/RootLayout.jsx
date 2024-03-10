import React from 'react';
import Navigation from '../nav/Navigation';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
