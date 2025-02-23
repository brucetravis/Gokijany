import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <div>
      <section className='features-page'>
          <div className='features-titles'>
            <h2>features</h2>
            <p>Roadmap to Net zero</p>
          </div>
          <div className='calc-div'>
            <a
            className="download-btn"
            href="https://play.google.com/store/apps/details?id=com.electrixitaty.gokijany&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            >
              <i className="bi bi-download"></i>
              <p>Download App</p>
            </a>
            <div className="calculator">
              <div className="row">
                <div className="col-lg-6 tree">
                  <img src={'../../images/tree.png'} alt=""/>
                </div>
                <div className="col-lg-6 calc-text">
                  <h2>Carbon Offset Tracker</h2>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}
