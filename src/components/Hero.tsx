
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section className='bg-twitter-blue h-72'>
        <div className='flex justify-center w-screen h-72 bg-center bg-no-repeat bg-cover'>
            <Image
              src="/beach-image.jpg"
              alt="a beach at sunset"
              height={500}
              width={500}
              className='object-cover min-w-full'
            >
            </Image>
        </div>
    </section>

    </>
  )
}


export default Hero