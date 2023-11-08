import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    
<section> 
    <div className="max-w-6xl relative px-5 mx-auto mt-10 text-center md:px-1 lg:max-w-full">

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
            <p>I’m Oisin O’Malley, and I’m a passionate Cognitive Hypnotherapist residing in the vibrant city of
            Vancouver, Canada. With a deep-rooted belief in the power of the mind and a genuine desire to help
            others, my journey into Cognitive Hypnotherapy was born out of a fascination with the intricate
            workings of the human mind.</p>
            <br></br>
            <a href="/about"><p className='hover:cursor underline'>Find out more</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
        <div className='image-container'>
            <Image 
                src="/ocean.jpg"
                alt="profile photo"
                width={300}
                height={300} 
                className='rounded-100'
            />
            </div>
            <h2 className='font-bold'>Cognitive Hypnotherapy</h2>
            <p>Working at the pace of the client Cognitive Hypnotherapy draws on a range of diverse techniques
            and therapeutic modalities, with this, I tailor my approach to create a bespoke approach that suits
            each individual&#39;s unique needs and goals.</p>
            <a href="/contact"><p className='underline hover:cursor'>Contact me for more information</p></a>
        </div>

        <div className="flex flex-col items-center p-6 m-6 space-y-6 rounded-lg md:w-1/3">
            <div className='image-container'>
                <Image 
                    src="/stones.jpg"
                    alt="profile photo"
                    width={300}
                    height={300} 
                    className='rounded-100'
                />
                </div>
                <h2 className='font-bold'>How can I help you?</h2>
                <p>TWhether it’s managing stress, conquering fears, or breaking free from negative patterns, I’m here to
                provide a safe, compassionate, and non-judgmental space for your transformation. I firmly believe
                that therapy is just another conversation and the fantastic thing about this conversation is often
                people leave the first session feeling distinctive and curious about what they can accomplish.</p>
                <a href="/booking"><p className='hover:cursor underline'>Book a free consultation</p></a>
        </div>
        </div>
    </div>

</section>
)}

export default Section