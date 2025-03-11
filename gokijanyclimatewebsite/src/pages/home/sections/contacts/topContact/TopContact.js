import React, {  useRef  } from 'react'
import './TopContact.css'
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
    <section className="top-contact">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="contact-details col-lg-7">
            <div className="w-50">
              <h2>Contact Us</h2>
              <p>
              Email, call or complete the form to reach out Incase of any inqueries.
              </p>
              <p>info@gokijany.electrixitay.co</p>
              <p>+254 705 247 958</p>
            </div>

            <div className="other-infoz row">
              <div className="other-info col-lg-3">
                <h3>Feedback and Suggestions</h3>
                <p>
                  We value your feedback and are
                  continuously working to improve
                  our response. Your input is crucial
                  in shaping our partnership in the near
                  future.
                </p>
              </div>
              <div className="other-info col-lg-3">
                <h3>Contact Support</h3>
                <p> 
                  support team is available around the clock to address any concerns or queries you may have.
                </p>
              </div>
              <div className="other-info col-lg-3">
                <h3>Media Inquiries</h3>
                <p>
                  For media-related questions or
                  press inquiries, Please contact us
                  at info@gokijany.electrixitay.co.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-flex flex-column align-center">
            <form ref={contactForm} onSubmit={sendEmail} className='contact-form'>
              <div className='titles'>
                <h2 style={{fontSize: "30px"}}>Get inTouch</h2>
                <p className='top-form-p'>You can reach us any time</p><br/>
              </div>
              <div className='input-group mb-2 names row d-flex justify-content-between'>
                  <input className="col-5" type='text' name="first_name" placeholder='First name'/>
                  <input className="col-5" type='text' name="last_name" placeholder='Last name'/>
              </div>
              <div className='input-div  mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
                <input type='email' name="email" placeholder='Your email'/>
              </div>

              <div className="input-div  mb-2 ">
                <input type='number' name="number" placeholder='Phone Number'/>
              </div>
              <div className='help-box'>
                <textarea name='message' placeholder='How can we help?' rows={5} ></textarea>
              </div>
              <button className="section_btn mt-3 mb-2">Submit</button>
              <p className='terms'>
                By contacting us, you agree to <Link>Terms
                of Service</Link> and <Link>Privacy Policy</Link>
              </p>
            </form>
          </div>

          </div> 
        </div>
    </section>
    //<div>
    //   <div className='top-body'>
    //     <div className='contacts'>
    //       <div className='top-logo'>
    //         <img src={require('../../../../../images/gokijany-logo-nobg.png')} alt=""/>
    //       </div>
    //       <h1>Contact Us</h1>
    //       <p className='email-text'>
    //         Email, call or complete the top-form to reach out<br/>
    //         Incase of any inqueries.
    //       </p>
    //       <div className='email-and-number'>
    //         <p>info@snappy.io</p>
    //         <p>321-221-231</p>
    //         <Link to='/customer' className='customer'>Customer Support</Link>
    //       </div>
    //       <div className='text'>
    //         <div className='support'>
    //           <h3>Customer Support</h3>
    //           <p>
    //             Our support team is available<br/>
    //             around the clock to address any<br/>
    //             concerns or queries you may<br/>
    //             have.
    //           </p>
    //         </div>
    //         <div className='feed-back'>
    //           <h3>Feedback and Suggestions</h3>
    //           <p>
    //             We value your feedback and are<br/>
    //             continuously working to improve<br/> 
    //             our response. Your input is crucial<br/>
    //             in shaping our partnership in the near<br/>
    //             future.
    //           </p>
    //         </div>
    //         <div className='media'>
    //           <h3>Media Inquiries</h3>
    //           <p>
    //             For media-related questions or<br/>
    //             press inquiries, Please contact us<br/>
    //             at media@snappyapp.com.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='in-touch'>
    //       <form ref={contactForm} onSubmit={sendEmail} className='top-form'>
    //         <div className='titles'>
    //           <h2 style={{fontSize: "30px"}}>Get inTouch</h2>
    //           <p className='top-form-p'>You can reach us any time</p><br/>
    //         </div>
    //         <div className='first-input-div'>
    //           <input type='text' name="first_name" placeholder='First name'/>
    //           <input type='text' name="last_name" placeholder='Last name'/>
    //         </div>
    //         <div className='other-inputs'>
    //           <input type='email' name="email" placeholder='Your email'/>
    //           <input type='number' name="number" placeholder='phone Number'/>
    //         </div>
    //         <div className='help-box'>
    //           <textarea name='message' placeholder='How can we help?' rows={5} cols={50}></textarea>
    //         </div>
    //         <button>Submit</button>
    //         <p className='terms'>
    //           By contacting us, you agree to <Link>Terms<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //           of Service</Link> and <Link>Privacy Policy</Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
}
