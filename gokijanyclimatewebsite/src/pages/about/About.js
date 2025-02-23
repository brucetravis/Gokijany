import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
      <section className='about-hero-section'>
        <p>About Us</p>
      </section>

      <section className='innovation-section'>
        <div className='innovation-p'>
          <p>INNOVATION FOR ONSERVATION</p>
        </div>
        <div className='innovation-information'>
          <div className='innovation-text'>
            <p>
              Gokijany transforms climate action into financial opportunity,<br/>
              allowing users to generate income while contributing to<br/>
              sustainability. By participating in carbon offset activities,<br/>
              users can earn carbon credits, which can be traded or sold for<br/>
              financial gain. In 2023, the global carbon credit market was<br/>
              valued at approximately $479.41 billion and is projected to grow<br/>
              at a compound annual growth rate of 39.4% from 2024 to 2030.<br/>
              This growth presents significant financial opportunities for<br/>
              individuals and businesses engaging in carbon offset<br/>
              initiatives.
            </p>
            <p>
              Gokijany introduces Goshilingy, a carbon-backed digital currency<br/>
              that enhances the financial benefits of sustainable actions.<br/>
              Goshilingy can be utilized in various transactions, including<br/>
              peer-to-peer, business-to-business, and consumer purchases,<br/>
              similar to other cryptocurrencies. The value of Goshilingy is<br/>
              directly linked to the platform's carbon offset achievements,<br/>
              providing users with a tangible financial incentive to<br/>
              participate in eco-friendly activities. As the platform scales,<br/>
              the demand for Goshilingy is expected to increase, potentially<br/>
              leading to appreciation in its value.
            </p>
          </div>
          <div className='innovation-image'>
            <img src={require('../../images/climate.png')} alt=""/>
          </div>
        </div>
      </section>

      <section className='secure-section'>
        <div className='secure-p'>
          <p>Securing Our Planet for Future Generations</p>
        </div>
        <div className='secure-information'>
          <div className='secure-image'>
            <img src={require('../../images/whoweare.png')} alt=""/>
          </div>
          <div className='secure-text'>
            <p>
              Kenya has demonstrated significant potential in the carbon
              market, issuing more carbon credits than any other African
              country, accounting for approximately 20% of the continent's
              total. In 2022, Kenya received 11 million voluntary carbon
              market credits, reflecting the country's active participation in
              carbon offset initiatives. With carbon credit prices varying
              globally—from $46 per metric ton in California to over $60 per
              metric ton in the European Union—there is substantial financial
              potential for participants in regions with active carbon
              markets.
            </p>
            <p>
              Gokijany aims to engage 2.2 billion users globally, collectively
              offsetting 37.4 billion metric tons of CO₂ emissions, with each
              user averaging an offset of 17 metric tons annually. Given the
              projected growth of the carbon credit market and the increasing
              emphasis on sustainable practices, early adopters of Gokijany
              stand to benefit financially while contributing to global
              environmental goals. By integrating financial incentives with
              environmental responsibility, Gokijany offers a platform where
              sustainable living is both economically rewarding and impactful.
              Users can actively participate in carbon offset projects, trade
              carbon credits, and utilize Goshilingy in various transactions,
              all within a transparent and reliable ecosystem. This approach
              not only promotes individual financial growth but also supports
              global efforts toward achieving net-zero emissions.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe section */}
      <section className="subscribe">
        <div className="container">
          <h2>Subscribe Newsletter & get latest news</h2>
          <div>
            <form action="">
              <input type="email" placeholder="Enter your email address"  />
              <input type="submit" className="section_btn" />
            </form>
          </div>
        </div>
      </section>
    
    </div>
  )
}
