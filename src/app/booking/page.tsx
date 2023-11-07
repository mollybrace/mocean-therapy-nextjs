"use client"
import React, { use, useState } from 'react'
import Form from '../contact/components/Form';
import CalendlyWidget from './components/Calendly';
import Banner from './components/Banner';




const page = () => {

  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
          <CalendlyWidget />
      </section>
    </div>
    )
}

export default page