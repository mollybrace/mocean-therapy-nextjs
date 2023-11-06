import React from 'react'

type Formprops = {
    email: string;
    message: string;
    fullname: string;
  }

const Form = ({email, message, fullname }: Formprops) => {
  return (
<form
          // onSubmit={handleSubmit}
          >
          <label htmlFor={fullname}>Full name</label>
          
          <br/>
          
          <input 
            placeholder='Full Name...'
            type='text'
            name="fullname"
            />
          <br/>
        
           <label htmlFor={email}>Email Address</label>
          <br/>
          <input  
            type="text"
            name="email"
            placeholder='Email...'
            />
           <br/>

          <label 
            htmlFor={message}>Message</label>
           <br/>
          <textarea
            name="message"
            placeholder='Message...'
            type='text'
            rows="10" 
            cols="60"
          />
        <br></br>
          <button type='submit'>Submit</button>
        </form>
    )
}

export default Form