import React from 'react';
import { Link } from 'react-router';

import './style.css';

const Menu = ({toggleMenu}) => (
  <div className="nav-container">
    <ul className="nav-list">
      <li><Link to="/" >Our Company</Link></li>
      <li><Link to="/">About Us</Link></li>
      <li><Link to="/">Product Info</Link></li>
      <li><Link to="/">Contact Us</Link></li>
    </ul>
  </div>
);

export default Menu;