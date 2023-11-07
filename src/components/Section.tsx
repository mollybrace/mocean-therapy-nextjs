import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    
<section> 
    <div className="max-w-6xl relative px-5 mx-auto mt-10 text-center border md:px-1 lg:max-w-full">

    <div className="flex flex-col mt-0 md:flex-row md:space-x-6">
           <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <div className='image-container'>
            <Image 
                src="/profile-photo.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            
            <h2 className='font-bold'>About Me</h2>
            <p>Hello my name is Oisin, I am a certified NLP practitioner based in Torronto, Canada. Offering free a online consultion and bespoke treatment plan to help you life your most authentic life.</p>
            <br></br>
            <a href="/about"><p className='hover:cursor underline'>Find out more</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
        <div className='image-container'>
            <Image 
                src="/profile-photo.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            <h2 className='font-bold'>Cognitive Hypnotherapy</h2>
            <p>Cognitive Hypnotherapy considers each client to be unique and to be experiencing their own
            protective behaviour. I work at the pace required by the client. Treatment is bespoke, caring
            and flexible.</p>
            <a href="/contact"><p className='underline hover:cursor'>Contact me for more information</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <div className='image-container'>
                <Image 
                    src="/profile-photo.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100'
                />
                </div>
                <h2 className='font-bold'>How can I help you?</h2>
                <p>The fantastic thing about this therapy is that people often leave the first session feeling different. I firmly believe that therapy is just another conversation, and I
                approach each session with empathy and care.</p>
                <a href="/booking"><p className='hover:cursor underline'>Book a free consultation</p></a>
        </div>
        </div>
    </div>

</section>
)}

export default Section