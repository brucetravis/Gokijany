import React from 'react'
import Contacts from '../contacts/Contacts';
import Features from '../features/Features';
import Mission from '../mission/Mission';
import Hero from '../hero/Hero';
import Why from '../whyus/Why';
import Who from '../who/Who';
import './Landing.css';

export default function Landing() {
  return (
    <div>
      <Hero/>
      <Who/>
      <Features/>
      <Mission/>
      <Why/>
      <Contacts/>
    </div>
  )
}
