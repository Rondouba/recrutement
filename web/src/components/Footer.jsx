import React from 'react';

import './css/Footer.css';

function Footer() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginLeft: '10px',
        }}
      >
        <p className="footerMargin">&copy; 2023 Khidémé by DATE Center</p>
        <p className="footerMargin">Do Not Sell My Personal Information</p>
        <p className="footerMargin">Accessibility at Indeed</p>
        <p className="footerMargin">Privacy Center</p>
        <p className="footerMargin">Cookies</p>
        <p className="footerMargin">Privacy</p>
        <p className="footerMargin">Terms</p>
      </div>
    </div>
  );
}

export default Footer;
