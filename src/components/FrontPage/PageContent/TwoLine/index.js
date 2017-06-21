import React from 'react';

import './style.scss';

const TwoLine = () => (
  <section className="three">
    <div className="info top">
      <p className="box-title"><span className="bold">Left</span> side two-line heading.</p>
      <p className="box-info">Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.</p>
    </div>
    
    <div className="img top">
      <img alt="" className="win"/>
    </div>
  </section>
);

export default TwoLine;