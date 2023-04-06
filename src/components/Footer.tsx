import React from 'react'
import NDMark from '../assets/images/svg/hesburgh_mark_H2_white.svg'

const Footer = () => {
  return <footer className="footer">
    <div className="foot-columns">
      <div className="foot-left">
        <p>Hesburgh Libraries › Rare Books & Special Collections ›</p>
        <h1>Book of<br/>
        Remembrance</h1>
        <p>102 Hesburgh Library <br/>
        Notre Dame, IN 46556 USA<br/>
        Phone (574) 631–0290<br/>
        rarebook@nd.edu</p>
        <p>© 2022 University of Notre Dame</p>
      </div>
      <div className="foot-right">
        <NDMark />
      </div>
    </div>
  </footer>;
};

export default Footer;
