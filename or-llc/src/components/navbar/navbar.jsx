import { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/O&R_Logo_no_number.png'
import { Link } from 'react-scroll'

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
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='showcase' smooth={true} offset={-260} duration={500}>Showcase</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default navbar
