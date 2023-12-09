
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section>
      <div className='w-full flex pt-0 mx-auto hero-container-small md:hero-container-large'> 
        <div className="h-auto w-full bg-center bg-cover bg-no-repeat bg-[url('/hero.jpg')]">
        </div>
      </div>
    </section>

    </>
  )
}


export default Hero
