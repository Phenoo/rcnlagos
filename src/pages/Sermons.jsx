import React from 'react'
import HomeContainer from '../components/HomeContainer'
import SermonContainer from '../components/Sermons/SermonContainer'
import Directory from '../components/Sermons/Directory'
import Img from '../assets/eventbg.webp'

const Sermons = () => {
  return (
    <div className="sermon-page">
      <HomeContainer bgImg={Img}  title='sermons' subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='participate' />
      <section>
        <SermonContainer />
        <Directory />
      </section>
    </div>
  )
}

export default Sermons