import React from 'react';

import './style.css';

const Footer = () => (
  <section className="footer">
    <div className="container">
      <ul className="footer-list">
        <li className="list-title">LINK</li>
        <li className="list-item">Apples</li>
        <li className="list-item">Oranges</li>
        <li className="list-item">Watermelons</li>
      </ul>
      <ul className="footer-list">
        <li className="list-title">LINK</li>
        <li className="list-item">Treehouses</li>
        <li className="list-item">Rope Swings</li>
        <li className="list-item">Waterslides</li>
      </ul>
      <ul className="footer-list">
        <li className="list-title">LINK</li>
        <li className="list-item">Company Info</li>
        <li className="list-item">Customer Info</li>
      </ul>
      <ul className="footer-list">
        <li className="list-title">LINK</li>
        <li className="list-item">Contact Us</li>
        <li className="list-item">Informational Links</li>
      </ul>
      
      <ul className="footer-list subscribe">
        <li className="list-title">SUBSCRIBE TO OUR NEWSLETTER</li>
        <li>
          <input className="email" type="text"/>
        </li>
        <li></li>
      </ul>
    </div>
    
    <hr className="line"/>
    
  </section>
);

export default Footer;