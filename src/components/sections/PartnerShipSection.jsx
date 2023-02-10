import React from 'react'
import { Link } from 'react-router-dom'

const PartnerShipSection = () => {
  return (
    <div className="partner-section">
      <div className='partner-container'>
        <section>
          <div className="center">
            <h6 className="headline">
              join us!
            </h6>
            <h4 className="tophead">
            “Trust in the LORD, and do good; dwell in the land and befriend faithfulness”
            </h4>
            <br />
            <div>
              <button className="button">
                <Link to='/partnership'>
                  become a partner
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PartnerShipSection
