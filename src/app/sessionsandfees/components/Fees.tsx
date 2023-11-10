import React from 'react'
import Image from 'next/image'
const Fees = () => {
  return (
    <section>
         <div className='p-10 md:mx-10 md:p-0 max-w-full'>
        <div className="flex flex-col-reverse  flex-reverse items-center mx-auto space-y-10 md:flex-row justify-center md:justify-between">
          <div className='flex flex-col md:w-1/2'>
            <p className='text-xl text-left font-bold mt-10 md:mt-0 py-5'>How much does it cost?</p>
            <p className='pb-5 text-left underline'>Each session costs $75</p>
            <p className='pb-5 text-left'>A sliding scale is available.</p>
            <p>I offer a free initial telephone consultation so that we can discuss your needs and I can answer any queries you might have.</p>
          </div>
          <div className='flex flex-col items-center md:w-1/2'>
          <div className='image-container '>
            <Image 
                  src="/ocean.jpg"
                  alt="profile photo"
                  width={300}
                  height={300} 
                  className='rounded-100'
              />
          </div>

          </div>

        </div>   
    </div>

      <div className='mx-10'>
        <div>
          <p className='text-xl font-bold pb-5'>How do I pay?</p>
          <p className='pb-10'>After our sessions, you will receive an invoice to take to your insurer or have the necessary details to make a direct transfer.</p>
        </div>
      </div>
    </section>
      
    )

}

export default Fees