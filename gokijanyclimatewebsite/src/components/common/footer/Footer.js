import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='footer-image'>
          <img src={require('../../../images/gokijany-logo-nobg.png')} alt=""/>
        </div>
        <div className='rights'>
          <p>&copy; 2025 Electrixitaty | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
