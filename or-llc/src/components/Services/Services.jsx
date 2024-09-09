// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Services.css'
import service_1 from '../../assets/landscapingS.jpg'
import service_2 from '../../assets/Masonry-Work.jpg'
import service_3 from '../../assets/fencing-work.jpg'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={service_1} alt='landscaping'/>
        <div className="caption">
          <img src='' alt=''/>
          <p>Landscaping</p>
        </div>
      </div>
      <div className='service'>
        <img src={service_2} alt='masonry'/>
        <div className="caption">
          <img src='' alt=''/>
          <p>Masonry</p>
        </div>
      </div>
      <div className='service'>
        <img src={service_3} alt='fencing'/>
        <div className="caption">
          <img src='' alt=''/>
          <p>Fencing</p>
        </div>
      </div>
    </div>
  )
}

export default Services
