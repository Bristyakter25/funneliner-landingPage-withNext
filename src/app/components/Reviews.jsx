import Image from 'next/image'
import React from 'react'

export default function Reviews() {
  return (
    <div>
        <h2 className="text-center mt-20 text-3xl  font-bold text-transparent bg-clip-text 
               bg-gradient-to-r
               from-[#f165aa] to-[#5493ff] py-3">আমাদের কাস্টমার রিভিউ</h2>

               <div className='justify-center py-10 flex gap-x-5'>
                <div>
                    <Image
                              src="/review1.png"
                              alt="line"
                              width={440}
                              height={440}
                            />
                    <Image
                              src="/review2.png"
                              alt="line"
                              width={440}
                              height={440}
                            />
                </div>
                <div>
                    <Image
                              src="/review3.png"
                              alt="line"
                              width={440}
                              height={440}
                            />
                    <Image
                              src="/review4.png"
                              alt="line"
                              width={440}
                              height={440}
                            />
                </div>
               </div>
    </div>
  )
}
