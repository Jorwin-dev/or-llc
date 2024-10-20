// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Showcase from './components/Showcase/Showcase'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our COMPANY' title='What We Offer'/>
        <Services/>
        <About/>
        <Title subTitle='Gallery' title='Project Photos'/>
        <Showcase/>
        <Title subTitle='TESTIMONIALS' title='What Clients Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
