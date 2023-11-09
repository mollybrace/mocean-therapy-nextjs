
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section>
      <div className='w-full flex pt-0 mx-auto hero-container-small md:hero-container-large'> 
        <div className="h-full w-full bg-center bg-cover bg-no-repeat bg-[url('/hero.jpg')]">
            {/* <Image
              src="/hero.jpg"
              alt="a beach at sunset"
              height={600}
              width={600}
              className='object-contain min-w-full md:object-cover w-full h-full'
            >
            </Image> */}
        </div>
      </div>
    </section>

    </>
  )
}


export default Hero
