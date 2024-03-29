import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import { ThemeContext } from '../../context/theme-context';

const Navigation = (props) => {
  const toggleTheme = useContext(ThemeContext).toggleTheme;

  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <button onClick={toggleTheme}>toggle theme</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
