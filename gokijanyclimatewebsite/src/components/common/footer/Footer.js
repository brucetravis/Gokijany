import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer
    class="d-flex align-items-center flex-column justify-content-center"
    >
      <div class="container d-flex justify-content-center">
        <div class="logo">
        <img src={require('../../../images/gokijany-logo-nobg.png')} alt=""/>
        </div>
      </div>
      <div class="footer_footer pt-4">
        <p>© 2025 Electrixitaty | All Rights Reserved</p>
      </div>
    </footer>
  )
}
