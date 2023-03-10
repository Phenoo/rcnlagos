import React from 'react'
import {FaLinkedin, FaTwitter, FaFacebook, FaMapMarker, } from 'react-icons/fa'
const Contact = () => {
  return (
    <section id="request" className="request">
      <div className='request-cont'>
        <div className="statue">
          <h4 className="tophead">lets talk about <span>everything!</span></h4>
          <p>
            Hate forms? Send us an email instead. Or contact us on social media.
          </p>
          <div className="flex">
            <span>
              <FaMapMarker />
            </span>
            <span>
              Adelodun Plaza, Phase II, Suite 2/13, Agbara road, Atan Ota, Ogun State.
            </span>
          </div>
          <br />
          <ul>
          <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
          {/* <img src={Img} alt="lot" /> */}
        </div>
        <form>
          <div className="form-input">
            <label>Your name</label>
            <input type="text" name="user_name" required/>
          </div>
          <div className="form-input">
            <label>Your email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className='form-input'>
            <label>Your message</label>
            <textarea rows='10' name='message' required/>
          </div>
          <button type='submit' value='send' className='btn btn-blue'>send message</button>
        </form>  
      </div>  
  </section>
  )
}

export default Contact