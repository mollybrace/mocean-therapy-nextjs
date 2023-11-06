import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    
<section> 
    <div className="max-w-6xl relative px-5 mx-auto mt-10 text-center border">

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
            <h2>About Me...</h2>
            <p>Hello my name is Oisin, I am a certified NLP practitioner based in Torronto, Canada</p>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <h5>Cognitive Hypnotherapy</h5>
            <p>"Quote pending"</p>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <h5>How can I help you?</h5>
            <p>"Quote pending"</p>
        </div>
        </div>
    </div>

</section>
)}

export default Section