import React from 'react'
import './Contacts.css'
import MiddleContact from './middleContact/MiddleContact';
import TopContact from './topContact/TopContact';


export default function Contacts() {
  return (
    <div>
      {/* Top */}
        <TopContact/>
      {/* Middle */}
        <MiddleContact/>
    </div>
  )
}
