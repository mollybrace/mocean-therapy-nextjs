"use client"
import React, { useState } from 'react'
import Link from 'next/link'


const NavBar = () => {
    const [isClick, setisClick] = useState(false)

    const toggleNavbar = () :void => {
        setisClick(!isClick);
    }


  return (
    <>
        <nav className='bg-white top-0'>
            <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex w-full items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Link href="/" className='text-white'>
                                Mocean Therapy
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className='ml-4 flex items-center space-x-6'>
                                <Link 
                                href="/"
                                className='hover:underline rounded-lg p-2'>
                                    Welcome
                                </Link>
                                <Link 
                                href="/sessionsandfees"
                                className='hover:underline rounded-lg p-2'>
                                    Sessions & Fees
                                </Link>
                                <Link 
                                href="/about"
                                className='hover:underline rounded-lg p-2'>
                                    About
                                </Link>
                                <Link 
                                href="/booking"
                                className='hover:underline rounded-lg p-2'>
                                    Booking
                                </Link>
                                <Link 
                                href="/contact"
                                className='hover:underline rounded-lg p-2'>
                                    Contact
                                </Link>
                        </div>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button
                            className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            onClick={toggleNavbar}
                            >
                                
                                {isClick ? (
                                      <svg
                                      className='h-6 w-6'
                                      xmlns='http:??www.w3.org/2000/svg'
                                      fill='none'
                                      viewBox='0 0 24 24'
                                      stroke='currentColor'>
                                          <path
                                              strokeLinecap='round'
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"
                                              />
                                      </svg>
                                ) : (
                                    <svg
                                    className='h-6 w-6'
                                    xmlns='http:??www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                        <path
                                        strokeLinecap='round'
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"/>
                                         </svg>
                                )}
                            </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden'>
                    <div className='flex flex-row gap-4 x-2 pt-3 pb-3 space-y-2 sm:px-1'>
                                <Link 
                                href="/sessionsandfees"
                                className='hover:underline rounded-lg pt-2'>
                                    Sessions & Fees
                                </Link>
                                <Link 
                                href="/about"
                                className='hover:underline rounded-lg'>
                                    About
                                </Link>
                                <Link 
                                href="/booking"
                                className='hover:underline rounded-lg'>
                                    Booking
                                </Link>
                                <Link 
                                href="/contact"
                                className='hover:underline rounded-lg'>
                                    Contact
                                </Link>

                    </div>
                </div>
            )}
        </nav>

    
    
    
    </>
    
    
    
    
    
  )
}

export default NavBar