import React from 'react'
import Form from '../booking/components/Form';
import { useState } from 'react';


const page = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  

  return (
    <div>
      <section>
        <Form fullname={fullname} email={email} message={message}/>
      </section>
    </div>
  )
}

export default page