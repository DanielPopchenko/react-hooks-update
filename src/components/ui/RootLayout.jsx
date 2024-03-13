import React, { useContext } from 'react';
import Navigation from '../nav/Navigation';
import { Outlet } from 'react-router-dom';
import ThemeContextProvider, { ThemeContext } from '../../context/theme-context';

function RootLayout() {
  const theme = useContext(ThemeContext).theme;

  console.log('theme: ', theme);

  const body = document.querySelector('body');
  if (theme === 'dark') {
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add('light-theme');
  }

  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
