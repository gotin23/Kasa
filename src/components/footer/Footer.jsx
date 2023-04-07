import React from 'react';
import './Footer.css';
import logoFooter from './footer-logo.svg'

export default function Footer() {
  return (
    <div className='footer-kasa'>
      <img src={logoFooter} alt="logo kasa footer"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
