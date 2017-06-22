import React from 'react';
import ReactSVG from 'react-svg'
import './style.css';

const SideBoxes = () => (
  <section className="side-boxes">
    <div className="row">
      <div className="page-info left">
        <img alt="" className="base clock"/>
        <p className="box-title"><span className="bold">Left</span> side box</p>
        <p className="box-info">Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
      </div>
      
      <div className="page-info right">
        <img alt="" className="base lock"/>
        <p className="box-title"><span className="bold">Right</span> side box</p>
        <p className="box-info">Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula.</p>
      </div>
    </div>
  </section>
);

export default SideBoxes;