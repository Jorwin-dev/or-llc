// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/black-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>No job is too small!</h1>
        <p>We offer all kinds of Professional Services. We take pride in customer satisfaction, and
          will go the extra step to leave a smile on every customers face. With affordable pricing we 
          offer services for Landscaping, Masonry, Fences, an much more!</p>
          <button className='btn'>Explore more <img src={dark_arrow} alt='arrow'/></button>
      </div>
    </div>
  )
}

export default Hero
