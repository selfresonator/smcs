import React, { Component } from 'react';

import Navbar from '../Navbar/index.js';
// import Footer from './PageContent/Footer/index.js';
import PageContent from './PageContent/index.js';

import './style.css';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  render() {
    return (
      <section className="front-page">
        <Navbar/>
        <PageContent/>
        {/*<Footer/>*/}
      </section>
    );
  }
}

export default FrontPage;
