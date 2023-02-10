import React from 'react'
import HomeContainer from '../components/HomeContainer'
import PastorCard from '../components/PastorCard'

import Img from '../assets/aboutbg.webp'
import { CiGlobe } from 'react-icons/ci'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiDiamond} from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'

const Offer = () => {
  const data = [{
    id: 1,
    svg: <CiGlobe />,
    name: 'our mission',
    desc: "Preservation of biblical doctrine and living out the truth of God's word as it is written in the Holy Scriptures"
  },
  {
    id: 2,
    svg: <AiOutlineHeart />,
    name: 'our vision',
    desc: 'To equip ministers of the gospel of our Lord Jesus Christ in Africa and Europe to become effective in the work of the ministry'
  },{
    id:3,
    svg: <HiOutlineUserGroup />,
    name: 'our community',
    desc: 'Our community is one that strives for the rebirth of Apostolic Christianity in our generation'
  },
  {
    id: 4,
    svg: <BiDiamond />,
    name: 'our values',
    desc: 'Dedication, Relevance, Excellence, Accountability, Resilience, Forbearance, Faithfulness'
  },

  ]
  return (
    <div className='offer'>
      <section>
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


const AboutGlobal = () => {
  return (
    <div className='global'>
      <HomeContainer bgImg={Img}   title='About RCN Global' subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <section>
        <div className="flex">
          <div>
        <h6 className='headline'>
          who are we?
        </h6>
        <br />
        <h4 className='tophead'>
        Remnant Christian Network 
        </h4>
        <br />
        <p>
          Remnant Christian Network (RCN) is a non-denominational ministry headquartered in Makurdi, Benue state with apostolic centres in Lagos, Kaduna, Enugu, Ibadan, Calabar and Canada and a host of mission outreaches within and outside Nigeria.
          <br />
          <br />
          Remnant Christian Network (RCN) has a singular focus to restore the prayer commission of the church in fulfillment of Jesus’ proclamation in Matthew 21: 13 that “My house shall be called the house of prayer”. It is an apostolic movement that seeks to torpedo world systems and make able ministers out of Nigeria’s youth, who will take the gospel to every nook and cranny of the earth in tandem with the divine mandate for the last apostolic dispensation, as revealed by the ancients that “Nigeria is the trigger”.
          <br />
          <br />
          If the glory of the Lord must fill the earth as the waters cover the sea; if revival must occur before the second coming of the Lord, men must watch, pray and spread the good news. This is RCN’s mandate: to raise men- intercessors, prophets, evangelists, teachers
        </p>
        <br />
        <p>
          <strong>
            <em>
            Are you fed up of playing church? Are you tired of church overridden by mammon and Babylon? Are you tired of sipping milk when you should be chewing strong meat? Are you looking to grow spiritual muscles in Christ? Are you searching for a deeper revelation of God? Do you want to be able to sift between the wheat and the chaff and gain a proper handle on the truth? Do you want to be a student of the word of God? Do you want to stand out as light in these dark days?
            </em>
          </strong>
        </p>
        <br />
        <br />
        <p>
          Welcome to Remnant Christian Network, Lagos where you will be taught to access and navigate the immortal realm; where you will receive the requisite training and equipping to stand as a soldier in the army of God.
        <br />
          <br />
  	      You can call us by phone or send emails to get more information and also we’ll be glad to see you in one of our weekly meetings. You are welcome.
        </p>
          </div>
          <div>
            <PastorCard />
          </div>
        </div>
      </section>
      <Offer />
    </div>
  )
}

export default AboutGlobal 