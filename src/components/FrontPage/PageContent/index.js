import React, { Component } from 'react';
import SideBoxes from './SideBoxes';
import SignUp from './SignUp';
import TwoLine from './TwoLine';

import './style.css';

class PageContent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    
    return (
      <section className="content">
        <div className="contain">
          
          {/*Intro*/}
          <img className="app-icon" alt="logo"/>
          <h1 className="para">Constectur Malesuada. <span className="sed">Sed pourere consectetur est.</span></h1>
          <div className="btn-main">Button</div>
          <img className="window-1" alt="logo"/>
          
          <section className="divider"></section>
          
          <SideBoxes/>
          <TwoLine/>
          <SignUp/>
        </div>
        
      </section>
    )
  }
}

export default PageContent;