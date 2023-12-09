import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { error } from 'console';

type Formprops = {
    email: string;
    message: string;
    fullname: string;
    response: string;
    contact_form: string;


  }
  

  
  const Form = () => {

    const form = useRef(null)
    
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState("")
    
   const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
    emailjs.sendForm("service_sa68flb", "template_uriwvbb", form.current, 'NXMUCg8dkjdu3Rpe_').then((response) => {
      console.log(response.text);
      setEmail("")
      setFullname("")
      setMessage("")
      setSubmissionStatus("success")

    }).catch((error) => {
      console.log(error.text)
      setSubmissionStatus("error")
    })
   }
  }


  return (
    <div className='flex items-center max-w-full pr-4 justify-center mt-10 mb-10'>
      <div className=' w-full px-12 '>

      <div className=' items-center justify-center rounded-lg block shadow text-center bg-dogwood/40 outline-none'>

       <form 
        className='pr-10 flex-col items-center justify-center' 
        ref={form}
        onSubmit={handleSubmit}
        >
          <div>

          <label 
            htmlFor="fullname"
            className='p-5 flex justify-center items-center font-bold'

            >
              Full Name
          </label>
          
          
          <input 
            placeholder='Full Name...'
            type='text'
            id="fullname"
            value={fullname}
            name="fullname"
            className='input input-bordered w-full max-w-lg bg-moonstone border-blue-morelli shadow-lg mb-5 '
            required
            onChange={(event) => setFullname(event.target.value)}
            />

        
          <label htmlFor="email" className='flex justify-center font-bold pb-5'>Email Address</label>
          <input  
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder='Email...'
            className='input input-bordered w-full max-w-lg bg-moonstone border-blue-morelli shadow-lg mb-5'
            onChange={(event) => setEmail(event.target.value)}
            required

            />
          </div>

          <label 
            htmlFor="message"
            className='flex justify-center items-center font-bold pb-5'>Message</label>
            <div className='flex  justify-center'>

          <textarea
            name="message"
            value={message}
            placeholder='Message...'
            rows={10}
            cols={60}
            id="message"
            className='textarea-md textarea-bordered w-full max-w-lg bg-moonstone border border-blue-morelli rounded-lg shadow-lg p-5 flex justify-center '
            onChange={(event) => setMessage(event.target.value)}
            required

          />
            </div>
        <br></br>
          <button 
          type='submit'
          className='bg-moonstone-beige m-2 border p-4 text-white transition-all hover:bg-dogwood text-white font-bold py-2 px-4 rounded shadow'
          >
            Submit
          </button>
          <div>
          {submissionStatus === 'success' && <p className='text-green-500'>Form submitted successfully!</p>}
          {submissionStatus === 'error' && <p className='text-red-500'>Form submission failed. Please try again.</p>}
          </div>
  </form>
      </div>
      </div>

</div>
    )
}

export default Form