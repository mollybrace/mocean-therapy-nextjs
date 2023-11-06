"use client"
import React, { use, useState } from 'react'
import Form from './components/Form';
import CalendlyWidget from './components/Calendly';



const page = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <section>
          <CalendlyWidget />
      </section>
    </div>
    )
}

export default page