import React from 'react'
import './Mission.css'

export default function Mission() {
  return (
    <div>
      <section className='mission-page'>
        <div className='row-divs'>
          {/* first mission row */}
          <div className='first-mission-row'>
            <div className='mission-statement'>
              <h2>Our Mission</h2>
              <p class="mission-text">
                To integrate fintech with climate solutions making<br/>
                sustainability profitable and inclusive to all.
              </p>
              
              <p className="mission-text-statement">
                We merge financial technology to climate action, ensuring that
                users<br/> can effortlessly offset their carbon footprint, earn
                carbon credits,<br/> and trade them for real economic value. By
                leveraging blockchain for<br/> transparency, AI for market
                efficiency, and an intuitive platform for<br/> ease of access, we
                enable a smooth transition into a carbon-<br/>conscious economy.
                Through continuous innovation, strategic<br/> partnerships, and
                community-driven initiatives, we propel<br/> individuals and
                businesses toward economic growth while<br/> simultaneously reducing
                global emissions.
              </p>
            </div>
            <div className='first-row-image'></div>
          </div>
          {/* second mission row */}
          <div className='second-mission-row'>
            <div className='second-row-image'></div>
            <div className='vision-statement'>
              <h2>Our Vision</h2>
              <p class="vision-text">
                To create global economy where sustainability is the most
                valuable<br/> asset.
              </p>
              <p class="vision-text-statement">
                Gokijany envisions a world where individuals, businesses, and<br/>
                institutions recognize sustainability not as a burden but as an<br/>
                economic opportunity. By creating an ecosystem where
                carbon-<br/>backed value fuels the global economy, we are moving<br/>
                toward a world where sustainable living is as natural and<br/>
                profitable as traditional commerce. While this vision is<br/>
                ambitious, it sets the direction for all our innovations,<br/>
                partnerships, and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
