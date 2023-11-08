
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section>
      <div className='w-full'> 
        <div className="relative pt-56 h-72 bg-center bg-no-repeat w-full bg-cover bg-[url('/hero.jpg')]">
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