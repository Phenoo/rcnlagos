import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import {  FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Img1 from '../../assets/image1.jpg'


const BlogCard = ({item}) => {
  return (
    <article className="blog-card">
      <div className="image">
        <img src={Img1} alt="blog-card" />
      </div>
      <div className="text">
        <h4>
          {item.name}
        </h4>
        <div className="space-between">
          <div className="flex">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>
              <p>
                15th January, 2023
              </p>
            </span>
          </div>
          {/* <div className="flex">
            <span>
              <AiOutlineComment />
            </span>
            <span>
              <p>
                13 comments
              </p>
            </span>
          </div> */}
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="btn flex">
          <span>
            <Link to='/'>
              read more
            </Link>
          </span>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </article>
  )
}

export default BlogCard