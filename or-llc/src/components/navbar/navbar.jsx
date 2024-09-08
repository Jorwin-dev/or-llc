// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navbar.css'
import logo from '/Users/Jorwi/or-llc/or-llc/src/assets/O&R_Logo_no_number.png'

const navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='logo' className='logo'/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Showcase</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default navbar
