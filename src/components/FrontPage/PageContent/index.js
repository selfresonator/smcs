import React, { Component } from 'react';

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
          
          {/*Side Boxes*/}
          <section className="space">
            <div className="row">
              <div className="page-info left">
                <img src="icon-clock.svg" alt="" className="base clock"/>
                <p className="box-title"><span className="bold">Left</span> side box</p>
                <p className="box-info">Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
              </div>
              
              <div className="page-info right">
                <img src="icon-lock.svg" alt="" className="base lock"/>
                <p className="box-title"><span className="bold">Right</span> side box</p>
                <p className="box-info">Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula.</p>
              </div>
            </div>
          </section>
          
          {/*Two-Line Heading*/}
          <section className="three">
            <div className="info top">
              <p className="box-title"><span className="bold">Left</span> side two-line heading.</p>
              <p className="box-info">Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.</p>
            </div>
            
            <div className="img top">
              <img alt="" className="win"/>
            </div>
          </section>
          
          <section className="sign-up">
            <p className="header">
              <span className="sign">Sign up</span> Integer posuere erat a aliquet.
            </p>
  
            <form action="">
              <input className="input" placeholder="Your Name" type="text"/>
              <input className="input" placeholder="Email Address" type="text"/>
              <input className="input" type="submit"/>
            </form>
            
            <footer className="terms">By clicking “Sign Up” button you agree to our <a href="" className="link">Terms of Use</a></footer>
          </section>
          
        </div>
        
      </section>
    )
  }
}

export default PageContent;