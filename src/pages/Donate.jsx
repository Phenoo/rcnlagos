import React from 'react'
import HomeContainer from '../components/HomeContainer'
import {Link } from 'react-router-dom'
import Img from '../assets/eventbg.webp'

const Donate = () => {
  const data = [{
    id: 'account name',
    name: 'Remnant Christian Network Ministry',
  },
  {
    id: 'bank name',
    name: 'first bank plc',
  },{
    id:'ngn',
    name: '2031730750',
  },
  {
    id: 'usd',
    name: '2031730183',
  },
  {
    id: 'gbp',
    name: '2031730217',
  },{
    id:'euro',
    name: '2031730200',
  },
  ]
  return (
    <div className="donate">
      <HomeContainer   bgImg={Img}     title='donate' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”'  button='donate now' />
      <section>
      <div className="center">
        <h4 className="tophead">
          Give Unto The Lord!
        </h4>
        <p>
          Support with your substance for kingdom advancement
        </p>
        <div className="donate-box">
          <h4>
            account details
          </h4>
          <div className='frame'>
            {
              data.map((item, index) => (
                <div className="gridxx" key={index}>
                  <div>
                    <h6>
                      {item.id}:
                    </h6>
                  </div>
                  <div>
                    <p>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex">
            <div className="divider"></div>
            <div><p>OR</p></div>
            <div className="divider"></div>
        </div>
        <div>
          <button className="button">
            <Link to='/payonline'>
              pay online
            </Link>
          </button>
          </div>
      </div>
      </section>
    </div>
  )
}

export default Donate
