import React from 'react'

type Formprops = {
    email: string;
    message: string;
    fullname: string;
  }

const Form = ({email, message, fullname }: Formprops) => {
  return (
<div className='container items-center max-w-full pr-4 border'>
<form className='pr-10'
          // onSubmit={handleSubmit}
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
            name="fullname"
            className='border-blue-morelli border'
            required
            />
          <br/>
        
           <label htmlFor={email}>Email Address</label>
          <br/>
          <input  
            type="text"
            name="email"
            placeholder='Email...'
            className='border-blue-morelli border'
            required

            />
           <br/>

          <label 
            htmlFor={message}>Message</label>
           <br/>
          <textarea
            name="message"
            placeholder='Message...'
            rows={10}
            cols={60}
            className='border-blue-morelli border'
            required

          />
        <br></br>
          <button 
          type='submit'
          className='border-blue-morelli border rounded p-4'
          >
            Submit
          </button>
        </form>

</div>
    )
}

export default Form