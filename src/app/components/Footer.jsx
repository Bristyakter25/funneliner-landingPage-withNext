import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='my-10 mx-16'>
        <div className='text-gray-600 text-sm  justify-between flex gap-x-20'>
            <section className='flex gap-x-2'>
            <FaLocationDot />
            <p>Kuril, Vatara, Dhaka-1229, Bangladesh</p>
        </section>
       <a href="#banner">
        <section >
           <ul className='flex gap-x-5'>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
           </ul>
        </section></a>
        </div>
        <p className=' mt-5 border-gray-300 border-b-2 '></p>
        <p className='text-gray-600 text-sm text-center mt-3 mb-4'>© 2026 All Rights Reserved Designed by <span className='text-black'>Funnel Liner</span></p>
    </div>
  )
}
