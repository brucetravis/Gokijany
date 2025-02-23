import React, {  useRef  } from 'react'
import './Top.css'
// Anything imported from react-router is not exported as default so curly braces are a Must
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

export default function Contacts() {
  
  const contactForm = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault() // Prevent the page from reloading

    emailjs.sendForm(
      "service_a7omi2w",
      "template_2yxyqgq",
      contactForm.current, // Reference to the entire form, including all filled-in information
      "ZbcHCUNwCxYZecK4N"
    ).then((result) => {
      alert("Email Sent! success")
      console.log("Email Sent!", result.text)
    })
    .catch((error) => 
      alert("Error sending Email:", error.text)
      // console.log("Error sending Email:", error.text)
    )
  }
  
  
  return (
    <div>
      <section className='top-body'>
        <div className='contacts'>
          <div className='top-logo'>
            <img src={require('../../../images/gokijany-logo-nobg.png')} alt=""/>
          </div>
          <h1>Contact Us</h1>
          <p className='email-text'>
            Email, call or complete the top-form to reach out<br/>
            Incase of any inqueries.
          </p>
          <div className='email-and-number'>
            <p>info@snappy.io</p>
            <p>321-221-231</p>
            <Link to='/customer' className='customer'>Customer Support</Link>
          </div>
          <div className='text'>
            <div className='support'>
              <h3>Customer Support</h3>
              <p>
                Our support team is available<br/>
                around the clock to address any<br/>
                concerns or queries you may<br/>
                have.
              </p>
            </div>
            <div className='feed-back'>
              <h3>Feedback and Suggestions</h3>
              <p>
                We value your feedback and are<br/>
                continuously working to improve<br/> 
                Snappy. Your input is crucial in<br/>
                shaping the future is snappy.
              </p>
            </div>
            <div className='media'>
              <h3>Media Inquiries</h3>
              <p>
                For media-related questions or<br/>
                press inquiries, Please contact us<br/>
                at media@snappyapp.com.
              </p>
            </div>
          </div>
        </div>
        <div className='in-touch'>
          <form ref={contactForm} onSubmit={sendEmail} className='top-form'>
            <div className='titles'>
              <h2 style={{fontSize: "30px"}}>Get inTouch</h2>
              <p className='top-form-p'>You can reach us any time</p><br/>
            </div>
            <div className='first-input-div'>
              <input type='text' name="first_name" placeholder='First name'/>
              <input type='text' name="last_name" placeholder='Last name'/>
            </div>
            <div className='other-inputs'>
              <input type='email' name="email" placeholder='Your email'/>
              <input type='number' name="number" placeholder='phone Number'/>
            </div>
            <div className='help-box'>
              <textarea name='message' placeholder='How can we help?' rows={5} cols={50}></textarea>
            </div>
            <button>Submit</button>
            <p className='terms'>
              By contacting us, you agree to <Link>Terms<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              of Service</Link> and <Link>Privacy Policy</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
