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
        <li className="list-title subscribe-title">SUBSCRIBE TO OUR NEWSLETTER</li>
        <li>
          <input className="email" placeholder="&#xf003;    Email Address" type="text"/>
        </li>
        <li></li>
      </ul>
    </div>
    
    <hr className="line"/>
    
    <div className="signature">
      <p className="seaworthy">Built to be Seaworthy by SeaMonster Studios</p>
      <p className="copyright">&copy;2017 SeaMonster Studios. All rights reserved.</p>
    </div>
  </section>
);

export default Footer;