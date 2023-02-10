import HomeContainer from '../components/HomeContainer'

import Img from '../assets/eventbg.webp'
import Img1 from '../assets/logob.webp'

const SecondDonate = () => {
  return (
    <div>
      <HomeContainer bgImg={Img}    title='donate' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”'  button='donate now' />

      <section>
        <div className="center">
          <div className='logo'>
            <img src={Img1} alt='donate' />
          </div>
        </div>
        <div className="center">
          <h4 className="tophead">
            give unto the lord
          </h4>
          <h6>
          BY REMNANT CHRISTIAN NETWORK
          </h6>
          <br />
          <br />
          <p>
          Join us in honoring the LORD with your offering and time.
          </p>
          <br />
        </div>
        <div className="donate-box-second">
          <div className="form-component">
              <form>
                <div className="grid">
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
                  <div className="form-input">
                    <label>
                      Country
                    </label>
                    <input type="text" name="name" placeholder="Gold Sycamore" />
                  </div>
                  <div className='flex'>
                    <div className="form-input">
                      <select name="" id="">
                        <option>NGN</option>
                      </select>
                    </div>
                    <div className='form-input'>
                      <input type="text" name="name" placeholder="Please specify amount" />
                    </div>
                  </div>
                  <div className="form-input">
                    <label>
                      Additional Comment
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="button">  
                      pay now
                    </button>
                  </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecondDonate