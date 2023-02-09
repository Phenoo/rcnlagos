import React from 'react'
import HomeContainer from '../components/HomeContainer'

import Img from '../assets/partbg.webp'
const SecondPartnership = () => {
  return (
    <div>
      <HomeContainer bgImg={Img}  title='Partnership' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”'  button='join us'  />
      <section>
        <div className='center'>
          <h4 className='tophead'>
            become a partner
          </h4>
          <p>
            Commit as a partner, kindly fill this form with your details to proceed.
          </p>
        </div>
        <div className='grid form-component'>
          <div>
            <h4 className='tophead'>
              PARTNER COMMITMENT FORM
            </h4>
            <p>
              Becoming an RKS Partner requires a sacrificial commitment from each partner to first give himself or herself to God in a consecrated lifestyle.
              <br />
              <br />
              Every act of generosity must be channeled from right and honest living. Every committed partner must be intentional and spirit-driven.
              <br />
              <br />
              We look forward to your being committed to the mandate given to God’s Servant, Apostle Aroma Osayi, in uplifting him and the ministry before God in prayers, that the work of God may continually advance.
              <br />
              <br />
              We desire volunteered time and skill to fit the needs that arise in-house and commitment of financial resources on periodic basis as each partner is able.
              <br />
              <br />

              Here attached is a detailed form for potential partners to fill with their information, after which a unique membership number will be assigned to each RKS partner so they can, from time to time, be updated with relevant information from the ministry and with respect to their RKS membership status.
              <br />
              <br />
              Robust communication will be established between each partner and the ministry to receive notifications about all our events and outreaches as we progress.
            </p>
          </div>
          <div>
            <h4 className='tophead'>
              PARTNER COMMITMENT FORM
            </h4>
            <form>
              <div className='grid'>
                <div className="form-input">
                  <label>
                    First Name  <span>*</span>
                  </label>
                  <input type="text" name="name" placeholder="Jane Doe" />
                </div>
                <div className="form-input">
                  <label>
                    Last Name  <span>*</span>
                  </label>
                  <input type="text" name="name" placeholder="Jane Doe" />
                </div>
              </div>      
              <div className="form-input">
                <label>
                  Email Address  <span>*</span>
                </label>
                <input type="text" name="email" placeholder="janedoe@mail.com" />
              </div>
              <div className="form-input">
                <label>
                  Phone Number  <span>*</span>
                </label>
                <input type="text" name="email" placeholder="janedoe@mail.com" />
              </div>
              <div className='grid'> 
                <div className="form-input">
                  <label>
                    Country
                  </label>
                  <input type="text" name="name" placeholder="Gold Sycamore" />
                </div>
                <div className="form-input">
                  <label>
                    State
                  </label>
                  <input type="text" name="email" placeholder="janedoe@mail.com" />
                </div>
              </div>
              <div className="form-input">
                <label>
                  Prefered Means of communication  <span>*</span>
                </label>
                <select name="" id="">
                  <option>select an option</option>
                </select>
              </div>
              <div className="form-input">
                <label>
                How Often Would You Like To Make A Commitment?  <span>*</span>
                </label>
                <select name="" id="">
                  <option>select an option</option>
                </select>
              </div>
              
              <div className="form-input">
                <label>
                Select  Month Of Commencement <span>*</span>
                </label>
                <select name="" id="">
                  <option>select an option</option>
                </select>
              </div>
              <div className="form-input">
                <label>
                Select Preferred Currency  <span>*</span>
                </label>
                <select name="" id="">
                  <option>select an option</option>
                </select>
              </div>
              <div className="form-input">
                <label>
                  Enter Amount  <span>*</span>
                </label>
                <input type="text" name="email" placeholder="janedoe@mail.com" />
              </div>
              <button type="submit" className="button">  
                submit
              </button>
          </form>
          </div>
        </div>
      </section>    
    </div>
  )
}

export default SecondPartnership