import { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/O&R_Logo_no_number.png'

const navbar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sticky, setSticky] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.addEventListener('scroll', () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt='logo' className='logo'/>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
        <li>Showcase</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default navbar
