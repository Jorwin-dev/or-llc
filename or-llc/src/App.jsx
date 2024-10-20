// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Showcase from './components/Showcase/Showcase'

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
      </div>
    </div>
  )
}

export default App
