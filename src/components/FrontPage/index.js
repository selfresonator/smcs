import React, { Component } from 'react';

import Navbar from '../Navbar/index.js';
import Footer from '../Footer/index.js';

import './style.css';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <section className="front-page">
        <div className="background"></div>
        <Navbar/>
        <Footer/>
      </section>
    );
  }
}

export default FrontPage;
