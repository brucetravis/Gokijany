import React from 'react'
import './Features.css'

export default function Features() {
  return (
<section class="features" id="features">
    <div class="container">
      <div class="section-title mt-4">
        <h2>Features</h2>
        <p>Roadmap to Net zero</p>
      </div>
      <div class="calc-div" data-aos="fade-right">
        <a
          class="download-btn"
          href="https://play.google.com/store/apps/details?id=com.electrixitaty.gokijany&pcampaignid=web_share"
          target="_blank"
          rel='noopener noreferrer'
        >
          <i class="bi bi-download"></i>
          <p>Download App</p>
        </a>
        <div class="calculator">
          <div class="row">
            <div class="col-lg-6 tree"></div>
            <div class="col-lg-6 calc-text">
              <h2>Carbon Offset Tracker</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row more-features d-flex justify-content-around">
        <div class="col-lg-3 shop" data-aos="fade-right">
          <div>
            <h2>Eco-Friendly Shopping</h2>
          </div>
        </div>
        <div class="col-lg-4 event" data-aos="zoom-in">
          <h2>Climate Events</h2>
        </div>
        <div class="col-lg-5 project" data-aos="fade-left">
          <h2>Clean Projects Support</h2>
        </div>
      </div>
    </div>
  </section>  )
}
