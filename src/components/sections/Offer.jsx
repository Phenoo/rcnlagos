import React from 'react'

import { CiGlobe } from 'react-icons/ci'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiDiamond} from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'



const Offer = () => {
  const data = [{
    id: 1,
    svg: <CiGlobe />,
    name: 'raise',
    desc: "believers to see with the eyes of the Kingdom"
  },
  {
    id: 2,
    svg: <AiOutlineHeart />,
    name: 'restore',
    desc: 'Apostolic thinking of the Christian'
  },{
    id:3,
    svg: <HiOutlineUserGroup />,
    name: 'revive',
    desc: 'true apostolic teaching in the Body'
  },
  {
    id: 4,
    svg: <BiDiamond />,
    name: 'renew',
    desc: 'the Christian’s walk with Gods'
  },

  ]
  return (
    <div className='offer'>
      <section>
        <div className='info'>
          <p>
          We are a ministry with a single minded focus on restoring the prayer commission of the church in fulfillment of Jesus’ proclamation in Matthew 21: 13 that 
          “My house shall be called the house of prayer”.
          </p>
        </div>
        <div className="offer-container">
          <div className="four-grid">
            {
              data.map((item) => (
                <article key={item.id} className="center offer-item">
                  <span>
                    {item.svg}
                  </span>
                  <h6>
                    {item.name}
                  </h6>
                  <p>
                    {item.desc}
                  </p>
                </article>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer