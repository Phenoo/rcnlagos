import React from 'react'
import HomeContainer from '../components/HomeContainer'
import UpcomingEvents from '../components/sections/UpcomingEvents'


import Img from '../assets/bghome.webp'

import Offer from '../components/sections/Offer'
import Listen from '../components/sections/Listen'
import PartnerShipSection from '../components/sections/PartnerShipSection'
import BlogSection from '../components/sections/BlogSection'
import Testimonials from '../components/sections/Testimonials'
import MessageYt from '../components/sections/MessageYt'
import Subscribe from '../components/Subscribe'


const HomePage = () => {
  return (
    <>
      <HomeContainer bgImg={Img} subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <Offer />
      <Listen />
      <PartnerShipSection />
      <UpcomingEvents />
      <BlogSection />
      <Testimonials />
      <MessageYt />
      <Subscribe />
    </>
  )
}

export default HomePage