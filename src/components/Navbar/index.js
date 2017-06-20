import React, { Component } from 'react';
import cx from 'classnames';

import Menu from './Menu/index.js';

import './style.css';

class Navbar extends Component {
  constructor() {
    super();
    
    this.state = {
      menuOpen: false
    };
    
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu(e) {
    e.preventDefault();
    this.setState({menuOpen: !this.state.menuOpen});
  }

  
  render() {
    return (
      <section className="navbar-normal">
        {/*Mobile Menu*/}
        <div className={cx('menu-overlay', {'hidden': !this.state.menuOpen})}>
          <Menu toggleMenu={this.toggleMenu}/>
          <i className="menu-btn-close fa fa-close" onClick={this.toggleMenu}></i>
        </div>
        
        <h1 className="title">SeaMonster Studios</h1>
        <i className="menu-btn fa fa-bars" onClick={this.toggleMenu}></i>
        
        {/*Desktop Menu*/}
        <div className="menu-normal">
          <Menu/>
        </div>
      </section>
    );
  }
}

export default Navbar;
