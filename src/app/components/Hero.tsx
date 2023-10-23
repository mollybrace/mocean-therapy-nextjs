
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <section className='bg-twitter-blue h-72'>
        <div className='flex justify-center w-screen h-72  
        bg-[url("/beach-image.jpg")] bg-center bg-no-repeat bg-cover md:bg-contain'>
                </div>
            <div className='h-10 bg-twitter-blue flex justify-start content-center'>
                <h1 className=' pl-5 pt-2'>Mocean-Therpy</h1>
            </div>
    
    </section>

    </>
  )
}

export default Hero