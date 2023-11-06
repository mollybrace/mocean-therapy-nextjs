import React from 'react'
import Fees from './components/Fees'
import Sessions from './components/Sessions'
import Banner from './components/Banner'

const page = () => {
  return (
    <div>
    <section>
      <Banner />
    </section>
    
    <section>
      <Sessions />
    </section>

    <section>
      <Fees />
    </section>

    </div>
  )
}

export default page