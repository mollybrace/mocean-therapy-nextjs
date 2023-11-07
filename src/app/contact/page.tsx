'use client'
import React from 'react'
import Form from './components/Form';
import { useState } from 'react';
import Banner from './components/Banner';


const page = () => {
    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    const fullname = "";
    const email = ""
    const message = ""

  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Form fullname={fullname} email={email} message={message}/>
      </section>
    </div>
  )
}

export default page