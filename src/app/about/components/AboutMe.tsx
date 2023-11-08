import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
  
    <div className='p-10 max-w-full'>
        <div className="flex flex-col items-center  space-y-10 md:flex-row justify-center md:justify-between">
          <div className='flex flex-col items-center md:w-1/2'>
          <div className='image-container '>
            <Image
              src="/profile-photo.jpg"
              alt="Oisin O'malley"
              height={500}
              width={500}
              className='rounded-100'
            />
          </div>

          </div>

          <div className='flex flex-col items-center max-w-full md:w-1/2'>
            <p className='text-left'>Hello, my name is Oisin, originally born in Ireland I am a certified NLP practitioner and Quest Cognitive Hypnotherapist based in Vancouver, Canada. Our subconscious mind is constantly shaping how we live our lives. I’m all about helping people tap into this incredible resource to overcome
            challenges and make positive changes in their lives. </p>
          </div>
        </div>   
    </div>
  )
}

export default AboutMe