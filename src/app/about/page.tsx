import React from 'react'
import Image from 'next/image'
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'

const About = () => {
  return (
  <div>
    <section>
      <Banner />
    </section>

    <section>
      <AboutMe />
    </section>
    
  </div>
  
  )
}

export default About