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
    
   const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
    emailjs.sendForm("service_sa68flb", "template_uriwvbb", form.current, 'NXMUCg8dkjdu3Rpe_').then((response) => {
      console.log(response.text);
      setEmail("")
      setFullname("")
      setMessage("")

    }).catch((error) => {
      console.log(error.text)
    })
   }
  }


  return (
    <div className='container items-center max-w-full pr-4 border'>
       <form 
        className='pr-10' 
        ref={form}
        onSubmit={handleSubmit}
        >
          <label 
            htmlFor={fullname}
            >
              Full name
          </label>
          
          <br/>
          
          <input 
            placeholder='Full Name...'
            type='text'
            value={fullname}
            name="fullname"
            className='border-champagne-beige border'
            required
            onChange={(event) => setFullname(event.target.value)}
            />
          <br/>
        
          <label htmlFor={email}>Email Address</label>
          <br/>
          <input  
            type="email"
            name="email"
            value={email}
            placeholder='Email...'
            className='border-champagne-beige border'
            onChange={(event) => setEmail(event.target.value)}
            required

            />
            <br/>

          <label 
            htmlFor={message}>Message</label>
            <br/>
          <textarea
            name="message"
            value={message}
            placeholder='Message...'
            rows={10}
            cols={60}
            className='border-champagne-beige border'
            onChange={(event) => setMessage(event.target.value)}
            required

          />
        <br></br>
          <button 
          type='submit'
          className='border-champagne-beige m-2 border rounded p-4'
          >
            Submit
          </button>
  </form>

</div>
    )
}

export default Form