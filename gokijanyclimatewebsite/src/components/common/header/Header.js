import React from 'react'
import './Header.css'
// Anything imported from react-router-dom  is not exported as default, so curly braces are a MUST
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            {/* Logo */}
            <div className='logo'>
                <Link to='/'>
                    <img src={require('../../../images/gokijany-logo-nobg.png')} alt='Gokijany Logo'/>
                </Link>
            </div>
            {/* Navigation bar */}
            <nav>
                <NavLink to='/' className={({  isActive  }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to='/who' className={({  isActive  }) => isActive ? "active" : ""}>About Us</NavLink>
                <NavLink to='/features' className={({  isActive  }) => isActive ? "active" : ""}>Features</NavLink>
                <NavLink to='/objectives' className={({  isActive  }) => isActive ? "active" : ""}>Objectives</NavLink>
                <NavLink to='/whyus' className={({  isActive  }) => isActive ? "active" : ""}>Why Us</NavLink>
                <NavLink to='/contacts' className={({  isActive  }) => isActive ? "active" : ""}>Contact Us</NavLink>
            </nav>
            {/* Download Link */}
            <div>
                <a 
                className='download'
                href="https://play.google.com/store/apps/details?id=com.electrixitaty.gokijany&pcampaignid=web_share"
                rel="noopener noreferrer"
                >
                    Download
                </a>
            </div>
        </header>
    </div>
  )
}
