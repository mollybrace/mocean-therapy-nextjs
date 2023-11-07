import React from 'react'
import Image from 'next/image'
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import AboutHypnotherapy from './components/AboutHypnotherapy'

const About = () => {
  return (
  <div>
    <section>
      <Banner />
    </section>

    <section>
      <AboutMe />
    </section>
    
    <section>
      <AboutHypnotherapy />
    </section>
  </div>
  
  )
}

export default About