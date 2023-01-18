import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="navbar">
    <div className="navbar-inner container">
      <h1 className="logo">Math Magicians</h1>
      <nav>
        <ul className="nav-bar">
          <li className="nav-bar-item">
            <Link className="nav-bar-item-link" to="/">Home</Link>
          </li>
          <li className="nav-bar-item">
            <Link className="nav-bar-item-link" to="calculator">Calculator</Link>
          </li>
          <li className="nav-bar-item">
            <Link className="nav-bar-item-link" to="quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default NavBar;
